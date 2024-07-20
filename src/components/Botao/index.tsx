import React from "react";
import style from "./Botao.module.scss";

interface botaoProps {
    children: React.ReactNode,
    type?: "submit" | "reset" | "button",
    onClick?: () => void
}

const Botao = ({ children, type = "button", onClick }: botaoProps) => {
    return (
        <button
            className={style.botao}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}
export default Botao