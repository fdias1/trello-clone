import React from 'react'
import Coluna from '../Coluna/Coluna'
import TituloJanelaTrabalho from '../TituloJanelaTrabalho/TituloJanelaTrabalho'
import Lista from '../Lista/Lista'
import Card from '../Card/Card'
import CriarNovaListaWrapper from '../CriarNovaListaWrapper/CriarNovaListaWrapper'
import './MesaTrabalho.css'

export default props => (
<div className="janela">
    <div className="titulo-container">
        <TituloJanelaTrabalho />
    </div>
    <div className="mesa-container">
        <div id="mesa-trabalho">
            <Coluna>
                <Lista titulo='Adicionar um cartão' id={'lista0'}>
                    <Card titulo="teste com um texto enorme para saber s eo card faz overflow ou wrap por padrão"/>
                </Lista>
            </Coluna>
            <Coluna>
                <Lista titulo='Adicionar um cartão' id={'lista0'}>
                    <Card titulo="Teste"/>
                </Lista>
            </Coluna>
            <Coluna>
                <CriarNovaListaWrapper />
            </Coluna>
            <div className="separador"></div>
        </div>
    </div>
</div>  
)