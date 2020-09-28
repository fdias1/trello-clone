import './CriarNovaListaWrapper.css'
import React from 'react'
import CriarNovaLista from '../CriarNovaLista/CriarNovaLista'
import BotaoAddColuna from '../BotaoAddColuna/BotaoAddColuna'

const testeAbrir = (e) => {
    const botao = document.querySelector('.nova-lista-whrapper-botao')
    const form = document.querySelector('.nova-lista-whrapper-form')
    botao.classList.add('hidden')
    form.classList.remove('hidden')
}
const testeFechar = (e) => {
    const botao = document.querySelector('.nova-lista-whrapper-botao')
    const form = document.querySelector('.nova-lista-whrapper-form')
    botao.classList.remove('hidden')
    form.classList.add('hidden')
}
export default props => (
    <div className="nova-lista-wrapper">
        <div className="nova-lista-whrapper-botao">
            <BotaoAddColuna texto='Adicionar uma lista' onClick={testeAbrir}/>
        </div>
        <div className="nova-lista-whrapper-form hidden" >
            <CriarNovaLista onClick={testeFechar}/>
        </div>
    </div>
)