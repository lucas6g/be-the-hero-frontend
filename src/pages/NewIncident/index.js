import React,{ useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import './estilo.css'
import ImgLogo from '../../assets/logo.svg'
import api from '../../services/api'


function NewIncident(){
    const ongId = localStorage.getItem('ongId')
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value, setValue] = useState('')
    const historico = useHistory()


    async function handleNewIncident(e){
        e.preventDefault()
        const data ={
            title,
            description,
            value

        }
        try {
            await api.post('/insidents',data,{
                headers:{
                    Authorization:ongId
                }
            })
            historico.push('/profile')

        } catch (error) {
            alert('erro ao cadastrar')
        }
    }

    return(
        <div className="new-incident-container">

        <div className="content">
                <section>
                        <img src={ImgLogo} alt="be the hero"/>
                            <h1>Cadastrar Novo caso</h1>
                            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                            <Link className="back-link" to="/profile">
                                <FiArrowLeft size={16} color="#e02041"/>
                                Voltar ao Perfil
            
                            </Link>
                </section>
                <form >
                        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Titulo do caso"/>
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Descrição"></textarea>
                        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="Valor em Reais"/>

                        
                        <button onClick={handleNewIncident} className="button" type="submit">Cadastrar</button>

                </form>

        </div>
    </div>
    )
}

export default NewIncident

