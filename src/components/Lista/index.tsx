import style from "./Lista.module.scss"
import Item from "./Item"
import ITarefa from "../../types/ITarefa"

interface listaProps {
    tarefas: ITarefa[],
    selecionarTarefa: (tarefaClicada: ITarefa) => void
}

const Lista = ({tarefas, selecionarTarefa} : listaProps) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((itemTarefa) => (
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={itemTarefa.id}
                        {...itemTarefa} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista