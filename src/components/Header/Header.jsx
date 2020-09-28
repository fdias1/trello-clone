import './Header.css'
import React from 'react'
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa'

export default props => (
    <div className="header">
        <div className="esquerda">
            <BarraPesquisa searchHandle={(event) => console.log(event.target.value)}/>
        </div>
        <div className='centro'>
            <img src="img/logo.png" alt="logo" className='logo' id='logo'/>
        </div>
        <div className="direita">
            <img src="/img/user.png" alt="avatar"/>
        </div>
    </div>
)