import style from "./Relogio.module.scss"

interface relogioProps {
    tempo: number | undefined
}

const Relogio = ({ tempo = 0 } : relogioProps) => {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60 ;
    const [minutosDezena, minutosUnidade] = String(minutos).padStart(2, '0');
    const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0');
    return(
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span  className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    )   
}

export default Relogio