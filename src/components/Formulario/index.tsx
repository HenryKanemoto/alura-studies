import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import ITarefa from "../../types/ITarefa";

import { v4 as uuid4 } from "uuid";

interface formularioProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

const Formulario = ({ setTarefas }: formularioProps) => {
    const [state, setState] = useState({
        tarefa: "",
        tempo: ""
    })

    function adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas,
            {
                ...state,
                selecionado: false,
                concluido: false,
                id: uuid4()
            }])
        setState({ tarefa: "", tempo: "" })
    }
    
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={state.tarefa}
                    onChange={event => setState({ ...state, tarefa: event.target.value })}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    value={state.tempo}
                    onChange={event => setState({ ...state, tempo: event.target.value })}
                    step={1}
                    min="00:00:00"
                    max="01:30:00"
                    name="tarefa"
                    id="tempo"
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <Botao type='submit'>
                Adicionar
            </Botao>
        </form>
    )
}


export default Formulario