import React, { useState } from 'react';
import seta from '../assets/img/seta_play.png'
import setaRotacional from '../assets/img/seta_virar.png'
import { PerguntaAberta, PerguntaFechada, ContainerBotoes, ButtonC3, ButtonC1, ButtonC2 } from '../assets/css/style';


export const cards = [
	{ number: '1', question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ number: '2', question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ number: '3', question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ number: '4', question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ number: '5', question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ number: '6', question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ number: '7', question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ number: '8', question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

// functions
export default function Perguntas({concluidas, setConcluidas}){
    return(
        cards.map(c => <Pergunta numero={c.number} question={c.question} answer={c.answer} concluidas={concluidas}  setConcluidas={setConcluidas}/>)
    )
}

function Pergunta(props){
    let number = props.concluidas

    let [card0, setCard0] = useState("")
    let [card1, setCard1] = useState("escondido")
    let [card2, setCard2] = useState("escondido")

    function updateText(){
        props.setConcluidas(number += 1)

        setCard1("escondido")
        setCard2("escondido")
    }
    
    return(
        <div className='perguntas'>
            <PerguntaFechada>
                <p>Pergunta {props.numero}</p>

                <img src={seta} onClick={() => {
                        setCard1("");
                        setCard0("escondido")
                    }}
                    />
            </PerguntaFechada>

            <PerguntaAberta className={card1}>
            {props.question}

                <img img src={setaRotacional} onClick={
                    () => {
                        setCard1("escondido")
                        setCard2("")
                    }
                }/>
            </PerguntaAberta>

            <PerguntaAberta className={card2}>
                {props.answer}

                <ContainerBotoes>
                    <ButtonC3 onClick={updateText}>Não lembrei</ButtonC3>
                    <ButtonC2 onClick={updateText}>Quase não lembrei</ButtonC2>
                    <ButtonC1 onClick={updateText}>Zap!</ButtonC1>
                </ContainerBotoes> 
            </PerguntaAberta>
        </div>
    )
}

