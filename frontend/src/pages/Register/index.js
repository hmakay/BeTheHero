import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft } from 'react-icons/fi'
import logoImg from  '../../assets/logo.svg'

import api from '../../services/api'
import './styles.css';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
 
  async function handleRegister(e){
    e.preventDefault();
    const data ={
      name,
      email,
      whatsapp,
      city,
      uf
    }

  try{
    const response = await api.post('/ongs',data)
    alert(`id: ${response.data}`)
  } catch (err) {

    alert(`erro no cadastro`)

  }
  

  

  }

  return (
    
    <div className="register-conteiner">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the Hero"/>
          <h1> Cadastro </h1>
          <p> Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos de sua ONG</p>
          <Link className="back-link" to="/">
             <FiArrowLeft size={16} color="#E02041" ></FiArrowLeft>Possuo Cadastro
        </Link>
        </section>


        <form  onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ong" 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="e-mail"
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="whatsapp"
            value={whatsapp} 
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
              <input 
                placeholder="Cidade"
                value={city} 
                onChange={e => setCity(e.target.value)}
              />
              <input 
                placeholder="UF" 
                value={uf} 
                onChange={e => setUf(e.target.value)}
                width="80"
              />


          </div>

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}