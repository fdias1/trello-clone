import './CriarNovaLista.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import BotaoGenerico from '../BotaoGenerico/BotaoGenerico'

export default props => (
    <div className="nova-lista">
        <input type="text" name="nome" id="nome" className="input-nova-lista" placeholder="Insira o título da lista..." autoComplete="off"/>
        <div className="nova-lista-container">
            <BotaoGenerico texto='Adicionar Lista' color="#00ff00" id="botao generico"/>
            <div className='nova-lista-fechar' onClick={props.onClick}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    </div>
)