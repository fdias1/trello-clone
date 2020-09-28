import React from 'react'
import './Lista.css'
import BotaoAddCartao from '../BotaoAddCartao/BotaoAddCartao'
import TituloLista from '../TituloLista/TituloLista'

export default props => (
    <div className="lista">
        <div className="titulo-lista-container">
            <TituloLista id={props.id}/>
        </div>
        <div className="conteudo">
            {props.children}
        </div>
        <div className="botao-container">
            <BotaoAddCartao texto='Adicionar Cartão'/>
        </div>
    </div>
)
