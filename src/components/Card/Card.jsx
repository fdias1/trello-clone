import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export default props => {
    const dragCardStart = (e) => {
        e.target.classList.add('drag')
        console.log('dragStarted')
        const posX = e.clientX;
        const posY = e.clientY;
        console.log(posX,posY,e.target.style.left,e.target.style.top)
        e.target.style.left = `${posX}px`
        e.target.style.top = `${posY}px`
    }
    const dragCard = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        console.log(posX,posY,e.target.style.left,e.target.style.top)
        e.target.style.left = `${posX}px`
        e.target.style.top = `${posY-100}px`
    }
    const dragCardEnd = (e) => {
        e.target.classList.remove('drag')
        console.log('dragEnded')
    }
    return(
        <div className="card" onDragStart={e => dragCardStart(e)} onDragEnd={e => dragCardEnd(e)} onDrag={e => dragCard(e)} draggable >
            <div className="titulo-card">
                {props.titulo}
            </div>
            <div className="icone">
                <FontAwesomeIcon icon={faTrash} onClick={props.onClick}/>
            </div>
        </div>
    )
}