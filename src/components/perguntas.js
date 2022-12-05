import React, { useState } from 'react';
import seta from '../assets/img/seta_play.png'
import setaRotacional from '../assets/img/seta_virar.png'



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
let concluidas = 0;

// functions
export default function Perguntas({concluidas, setConcluidas}){
    return(
        cards.map(c => <Pergunta pergunta={c.number} question={c.question} answer={c.answer} valor={concluidas} setConcluidas={setConcluidas}/>)
    )
}


function Pergunta(props){
    let [card1, setCard1] = useState("")
    let [card2, setCard2] = useState("escondido")
    let [card3, setCard3] = useState("escondido")

    let green = false;
    let red = false;

    let num = props.valor

    return(
        <div className='pergunta'>
            <div className={`pergunta-fechada ${card1}`}>
                <p>Pergunta {props.pergunta}</p>

                <img src={seta} onClick={
                    () =>
                    {
                        setCard1("escondido")
                        setCard2("")
                    }
                }/>
            </div> 
            <div className={`pergunta-aberta ${card2}`}>
            {props.question}

            <img src={setaRotacional} onClick={
                () =>
                {
                    setCard2("escondido")
                    setCard3("")
                }
            } />
            </div>

            <div className={`pergunta-aberta ${card3}`}>
                {props.answer}

                <div className='container-botoes'>
                    <button className='c3' onClick={() => {
                            props.setConcluidas(num += 1)
                            setCard1("")
                            setCard3("escondido")

                            red = true;
                    }}>Não lembrei</button>

                    <button className='c2' onClick={() =>{
                        props.setConcluidas(num += 1)
                        setCard1("")
                        setCard3("escondido")
                    }}>Quase não lembrei</button>

                    <button className='c1' onClick={() =>{
                        green = true
                        props.setConcluidas(num += 1)
                        setCard1("")
                        setCard3("escondido")
                    }}>Zap!</button>
                </div>
                
                 
                
            </div>
        </div>
    )
}

function PerguntaAberta(props){
    return(   
    <div>

    </div>
    )
}

function updateText(){
    return(
        concluidas += 1
    )
}