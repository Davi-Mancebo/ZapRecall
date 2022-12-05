import React from "react"
import { cards } from "./perguntas"

export default function FooterConcluido({concluidas}){
    return(
        <div className="footer">
            {concluidas}/{cards.length} concluidos
        </div>
    )
}
