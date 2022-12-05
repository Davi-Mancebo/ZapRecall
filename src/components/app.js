import { useState } from 'react'
import logo from '../assets/img/logo.png'
import FooterConcluido from './footer'
import Perguntas from './perguntas'

export default function App(){
    const [concluidas, setConcluidas] = useState(0);


    return(
        <div className='screen-container'>
            <div class='logo-container'><img src={logo}/> <h1>ZapRecall</h1></div>

            <Perguntas concluidas = {concluidas} setConcluidas = { setConcluidas}/>

            <FooterConcluido concluidas = {concluidas}/>
        </div>
    )
}
