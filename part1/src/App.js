
import './App.css';

const Mensaje = (props) => {
  return <h1>{props.message}</h1>
}


function App() {
  return (
    <div className="App">
      <Mensaje message='Hola holita'/>
    </div>
  )
}

export default App;
