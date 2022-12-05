import { useState } from 'react'
import logo from '../assets/img/logo.png'
import FooterConcluido from './footer'
import Perguntas from './perguntas'

export default function App(){
    return(
        <div className='screen-container'>
            <div class='logo-container'><img src={logo}/> <h1>ZapRecall</h1></div>

            <Perguntas />

            <FooterConcluido />
        </div>
    )
}