import './BotaoGenerico.css'
import React from 'react'

export default props => (
    <div id={props.id} className={`botao-generico ${props.classe}`}>
        {props.texto}
    </div>
)