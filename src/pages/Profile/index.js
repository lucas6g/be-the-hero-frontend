import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiPower,FiTrash2} from 'react-icons/fi'

import './estilo.css'
import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

function Profile(){
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const [casos,setCasos] = useState([])
    const historico = useHistory()


    //vai ser executado assim que o componente renderizar
    useEffect(function(){
      api.get('/profile',{
          headers:{
              Authorization:ongId,
          }
      }).then(resposta=>{
          setCasos(resposta.data)
      })
    },[ongId])



   async function hadleDeletaCaso(id){
            try {
               await api.delete(`/insidents/${id}`,{
                   headers:{
                       Authorization:ongId
                   }
               }) 

               setCasos(casos.filter((caso)=>{
                   return caso.id != id
               }))
            } catch (error) {
                alert('Erro ao deletar Caso')
            }


    }


    function handleLogaout(){
        localStorage.clear()
        historico.push('/')
    }

   return(
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt=""/>
                    <span> Bem vindo ,{ongName}</span>
                
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo Caso
                </Link>
                
                <button onClick={handleLogaout} type="button" >
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                  {casos.map((caso)=>{
                      return <li key={caso.id}>
                        <strong>CASO:</strong>
                        <p>{caso.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                       <p>{caso.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(caso.value)}</p>
                        <button onClick={function(){hadleDeletaCaso(caso.id)}} type="button">
                                <FiTrash2 size={20} color="a8a8b3"/>
                        </button>
              
                    </li>
                  })}
            </ul>

        </div>

   ) 
}



export default Profile