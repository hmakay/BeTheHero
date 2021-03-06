import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';
export default function NewIncident(){
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the Hero"/>
          <h1> Cadastrar novo caso</h1>
          <p> Descreva o caso detalhado  aqui do lado -></p>
          <Link className="back-link" to="/profile">
             <FiArrowLeft size={16} color="#E02041" ></FiArrowLeft>Voltar para home
        </Link>
        </section>


        <form >
          <input placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"/>
          <input placeholder="valor em reais"/>
         

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}