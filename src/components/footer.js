import { cards } from "./perguntas"
import { concluidas } from "./perguntas";


export default function FooterConcluido(){
    const [concluida, letConcluida] = useState(concluidas);


    return(
        <div className="footer">
            {concluida}/{cards.length} concluidos
        </div>
    )
}