import './BarraPesquisa.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTimes } from '@fortawesome/free-solid-svg-icons'

const pesquisaMouseOn = (event) => {
    const barraPesquisa = document.querySelector('.pesquisa')
    const barraPesquisaBtn = barraPesquisa.children[1]
    const iconeLupa = barraPesquisaBtn.children[0]
    const iconeFechar = barraPesquisaBtn.children[1]
    iconeLupa.classList.remove('ativo')
    iconeFechar.classList.add('ativo')
    barraPesquisa.classList.add('ativo')
    if(iconeLupa.classList.contains('ativo')) {
        barraPesquisaBtn.onclick = pesquisaMouseClick
    } else {
        barraPesquisaBtn.onclick = pesquisaClickApagar
    }  
}
const pesquisaMouseClick = (event) => {
    const barraPesquisa = document.querySelector('.pesquisa')
    const barraPesquisaBtn = barraPesquisa.children[1]
    const iconeLupa = barraPesquisaBtn.children[0]
    const iconeFechar = barraPesquisaBtn.children[1]
    iconeLupa.classList.remove('ativo')
    iconeFechar.classList.add('ativo')
    barraPesquisa.classList.add('ativo')
    if(iconeLupa.classList.contains('ativo')) {
        barraPesquisaBtn.onclick = pesquisaMouseClick
    } else {
        barraPesquisaBtn.onclick = pesquisaClickApagar
    }  

}
const pesquisaMouseOut = (event) => {
    const barraPesquisa = document.querySelector('.pesquisa')
    const barraPesquisaInput = barraPesquisa.children[0]
    const barraPesquisaBtn = barraPesquisa.children[1]
    const iconeLupa = barraPesquisaBtn.children[0]
    const iconeFechar = barraPesquisaBtn.children[1]
    if (barraPesquisaInput.value === '') {
        barraPesquisa.classList.remove('ativo')
        iconeLupa.classList.add('ativo')
        iconeFechar.classList.remove('ativo')
        barraPesquisaInput.blur()
    }
    if(iconeLupa.classList.contains('ativo')) {
        barraPesquisaBtn.onclick = pesquisaMouseClick
    } else {
        barraPesquisaBtn.onclick = pesquisaClickApagar
    }  

}
const pesquisaClickApagar = (event) => {
    event.preventDefault()
    const barraPesquisa = document.querySelector('.pesquisa')
    const barraPesquisaInput = barraPesquisa.children[0]
    const barraPesquisaBtn = barraPesquisa.children[1]
    const iconeLupa = barraPesquisaBtn.children[0]
    barraPesquisaInput.value = ''
    if(iconeLupa.classList.contains('ativo')) {
        barraPesquisaBtn.onclick = pesquisaMouseClick
    } else {
        barraPesquisaBtn.onclick = pesquisaClickApagar
    }  
    barraPesquisaInput.focus()
}

export default props => (
    <div className="pesquisa" onMouseOver={pesquisaMouseOn} onMouseLeave={pesquisaMouseOut} >
        <input type="text" name="pesquisa" id="pesquisa" onInput={pesquisaMouseClick} onChange={props.searchHandle}/>
        <div className="pesquisa-btn" >
            <FontAwesomeIcon icon={faSearch} className='lupa ativo'/>
            <FontAwesomeIcon icon={faTimes} className='fechar'/>
        </div>
    </div>
)