import React,{ useState} from 'react';
import Routes from './routes'

// css global
import './global.css'


//componente é uma funcao que retorna um html
//quando html ta dentro do react chamamos de jsx
//sempre quando for usar codigo js no html usar {}
//sempre quando armazenar uma informaçao criar um estado

// //sempre armazenar o estado e a funcao que altera o estado 
// let [counter,setCounter] = useState(0)


function App() {
    
  
  return (
    <Routes/>
  );
}

export default App;
