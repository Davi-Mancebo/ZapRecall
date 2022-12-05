import { cards } from "./perguntas"
import { useState } from "react";


export default function FooterConcluido({concluidas}){
    return(
        <div className="footer">
            {concluidas}/{cards.length} concluidos
        </div>
    )
}
