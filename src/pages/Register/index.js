import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

import './estilo.css'

import ImgLogo from '../../assets/logo.svg'


export default function Register(){

    //criar um estado para cada um dos inputs
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [whatsapp,setWatsapp] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')
   
//serve para redirecionar o usuario para a rota de login
    const historico = useHistory()
   
    //funcao que envia os dados do formulario fazendo o cadastro na minha api
   async function handleSubmit(evento){
        evento.preventDefault()

        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        }

        

        const resposta = await  api.post('ongs',data)

        alert(`Seu cadastro foi efetuado com sucesso seu id: ${resposta.data.id}`)
        historico.push('/')
        
    }
    
    

    return(
        <div className="register-container">

            <div className="content">
                    <section>
                            <img src={ImgLogo} alt="be the hero"/>
                                <h1>Cadastro</h1>
                                <p>Faça seu cadastro enter na paltaforma e ajude pessoas a encontrare os casos da sua ONG</p>

                                <Link className="back-link" to="/">
                                    <FiArrowLeft size={16} color="#e02041"/>
                                    Voltar ao Logon
                
                                </Link>
                    </section>
                    <form  onSubmit={handleSubmit}>
                            <input value={name} onChange={e=> setName(e.target.value)} type="text" placeholder="Nome da ong"/>
                            <input value={email} onChange={e=> setEmail(e.target.value)} type="email" placeholder="E-mail"/>
                            <input value={whatsapp} onChange={e=> setWatsapp(e.target.value)}type="text" placeholder="whatsapp"/>

                            <div className="input-grup">
                                    <input value={city} onChange={e=> setCity(e.target.value)} type="text" placeholder="Cidade"/>
                                    <input value={uf} onChange={e=> setUf(e.target.value)} type="text" placeholder="UF"style={{width:80}} />
                                    


                            </div>
                            <button className="button" type="submit">Cadastrar</button>

                    </form>

            </div>
        </div>
    )

}