import './App.css';
import SayMyName from './componets/SayMyName'
import Pessoa from './componets/Pessoa'
import Frase from './componets/Frase'


function App() {
  const nome = 'maria'

  return (
    <div className='App'>
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome = "Matheus" />
      <SayMyName nome = "Jao" />
      <SayMyName nome = {nome} />
      <Pessoa nome="Irineu" idade= "38" profissao= "Garoto de Programa" foto= "https://via.placeholder.com/150" />
    </div>
  )
}

export default App;
