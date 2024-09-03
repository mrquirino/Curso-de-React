import './App.css';
import HelloWorld from './componets/HelloWorld'
import SayMyName from './componets/SayMyName'


function App() {
  return (
    <div className='App'>

      <HelloWorld />
      <SayMyName nome = "Matheus" />
    </div>
  )
}

export default App;
