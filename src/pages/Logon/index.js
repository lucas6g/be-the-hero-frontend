import React ,{useState}from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link,useHistory} from 'react-router-dom'


import api from '../../services/api'

// usar o Link para nao carregar a pagina sempre spa

//estilo da pagina de login
import './estilo.css'



//importar todos os arquivos incluisive img ,asets etc.. pelo js
import HerosImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'


export default function Logon(){

    const [id,setId] = useState('')
    const historico = useHistory()

   async function handleLogin(e){
        e.preventDefault()


        try {
            const resposta = await api.post('session',{id})
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',resposta.data)
            //direciona para rota de perfil  
            historico.push('/profile')
        } catch (error) {
            alert('Falha no Login tente novamente')
        }


    }


    return (
       <div className="logon-container">
           <section className="form">
            <img src={LogoImg} alt="be the hero"/>

            <form >
                <h1>Faça seu logon</h1>

                <input value={id} onChange={e=>setId(e.target.value)} type="text" placeholder="Seu Id"/>
                <button onClick={handleLogin} className="button" type="submit">Entrar</button>

                <Link  to="/register">Não tenho Cadastro
                   <FiLogIn size={16} color="#e02041"/>
                
                </Link>
            </form>

           </section>

        <img src={HerosImg} alt="heros"/>
       </div>
    )

}
