import React from 'react'
import './BotaoAddColuna.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default Props => (
    <div className="btn-add-coluna" onClick={Props.onClick}>
        <FontAwesomeIcon icon={faPlus} className='icone-mais'/>
        <span>{Props.texto}</span>
    </div>
)
