import Botao from "../Botao"
import Relogio from "./Relogio"

import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time"
import ITarefa from "../../types/ITarefa"
import { useEffect, useState } from "react"

interface cronometroProps {
    tarefaSelecionada: ITarefa | undefined
    finalizarTarefa: () => void
}

const Cronometro = ({ tarefaSelecionada, finalizarTarefa }: cronometroProps) => {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (tarefaSelecionada?.tempo) {
            setTempo(tempoParaSegundos(tarefaSelecionada.tempo))
        }
    }, [tarefaSelecionada])

    function contagem(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return contagem(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Ecolha um card e inicie o cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => contagem(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}

export default Cronometro