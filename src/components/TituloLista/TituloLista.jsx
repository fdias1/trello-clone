import React from 'react'
import './TituloLista.css'

export default props => {
    const updateTitulo = (event) => {
        const caixaDeTexto = document.querySelector('#' + props.id + '-edit')
        const tituloVisualizacao = document.querySelector('#' + props.id + '-view')
        const maxCaracteres = 24
        if (caixaDeTexto.value.length > maxCaracteres) {
            caixaDeTexto.value = caixaDeTexto.value.substr(0,maxCaracteres)
        }   
        tituloVisualizacao.innerText = caixaDeTexto.value
    }
    const modoEditar = () => {
        const caixaDeTexto = document.querySelector('#' + props.id + '-edit')
        const tituloVisualizacao = document.querySelector('#' + props.id + '-view')
        caixaDeTexto.value = tituloVisualizacao.innerText
        caixaDeTexto.classList.remove('oculto')
        tituloVisualizacao.classList.add('oculto')
        caixaDeTexto.focus()
    }
    const modoVisualizar = () => {
        const caixaDeTexto = document.querySelector('#' + props.id + '-edit')
        const tituloVisualizacao = document.querySelector('#' + props.id + '-view')
        if (caixaDeTexto.value === "") {
            caixaDeTexto.value = 'Sem Título'
            tituloVisualizacao.innerText = 'Sem Título'
        }
        caixaDeTexto.classList.add('oculto')
        tituloVisualizacao.classList.remove('oculto')
    }

    return (
        <React.Fragment>
            <input type="text" name="titulo" className="oculto titulo-lista-edit" autocomplete="off" id={props.id+'-edit'} onChange={updateTitulo} onBlur={modoVisualizar}/>
            <div id={props.id + '-view'} className="titulo-lista-view" onClick={modoEditar} >Sem Título</div>
        </React.Fragment>
    )   
}