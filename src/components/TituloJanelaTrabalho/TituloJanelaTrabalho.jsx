import React from 'react'
import './TituloJanelaTrabalho.css'

const updateTitulo = (event) => {
    const caixaDeTexto = document.querySelector('#titulo-documento-edit')
    const tituloVisualizacao = document.querySelector('#titulo-documento-view')
    const maxCaracteres = 24
    if (caixaDeTexto.value.length > maxCaracteres) {
        caixaDeTexto.value = caixaDeTexto.value.substr(0,maxCaracteres)
    }   
    tituloVisualizacao.innerText = caixaDeTexto.value
}
const modoEditar = () => {
    const caixaDeTexto = document.querySelector('#titulo-documento-edit')
    const tituloVisualizacao = document.querySelector('#titulo-documento-view')
    caixaDeTexto.value = tituloVisualizacao.innerText
    caixaDeTexto.classList.remove('oculto')
    tituloVisualizacao.classList.add('oculto')
    caixaDeTexto.focus()
}
const modoVisualizar = () => {
    const caixaDeTexto = document.querySelector('#titulo-documento-edit')
    const tituloVisualizacao = document.querySelector('#titulo-documento-view')
    if (caixaDeTexto.value === "") {
        caixaDeTexto.value = 'Sem Título'
        tituloVisualizacao.innerText = 'Sem Título'
    }
    caixaDeTexto.classList.add('oculto')
    tituloVisualizacao.classList.remove('oculto')
}
export default props => (
    <div className="titulo">
        <input type="text" name="titulo" className="oculto" autoComplete="off" id="titulo-documento-edit" onChange={updateTitulo} onBlur={modoVisualizar}/>
<div id="titulo-documento-view" onClick={modoEditar} >{props.titulo}</div>
    </div>
)