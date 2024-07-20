import ITarefa from "../../../types/ITarefa"
import style from "./Item.module.scss"

interface itemProps extends ITarefa {
    selecionarTarefa: (tarefaClicada: ITarefa) => void
}

const Item = ({
    tarefa,
    tempo,
    selecionado,
    concluido,
    id,
    selecionarTarefa }: itemProps) => {
    return (
        <li
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${concluido ? style.itemCompletado : ''}`}
            onClick={() => !concluido && selecionarTarefa({
                tarefa,
                tempo,
                selecionado,
                concluido,
                id
            }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {concluido &&
                <span 
                className={style.concluido} 
                aria-label="Tarefa concluída"></span>
            }
        </li>
    )
}

export default Item