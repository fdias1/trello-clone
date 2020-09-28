import React from 'react'
import './BotaoAddCartao.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default Props => (
    <div className="btn-add-cartao">
        <FontAwesomeIcon icon={faPlus} className='icone-mais'/>
        <span>{Props.texto}</span>
    </div>
)
