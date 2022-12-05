import React from 'react';
import seta from '../assets/img/seta_play.png'

export let concluidas = 0;

export const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Perguntas(){
    let qtdPergunta = []

    
    for(let i = 0; i < cards.length; i++){
        let numPergunta = `Pergunta ${i+1}`
        qtdPergunta.push({pergunta: numPergunta});
    }

    return(
        qtdPergunta.map((p) => <PerguntaFechada pergunta={p.pergunta}/>)
    )
}

function PerguntaFechada(props){
    return(
        <div className='pergunta-fechada'>
            <p>{props.pergunta}</p>

            <img src={seta}/>
        </div>
    )
}