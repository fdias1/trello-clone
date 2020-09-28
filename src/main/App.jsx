import React from 'react'
import './App.css'
import Header from '../components/Header/Header'
import MesaTrabalho from '../components/MesaTrabalho/MesaTrabalho'
import Footer from '../components/Footer/Footer'


export default () => (
    <div className="app">
        <Header />
        <MesaTrabalho />
        <Footer />
    </div>
)