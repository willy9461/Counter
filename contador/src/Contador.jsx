import { useCounter } from './useCounter'

const Contador = () => {
    
    const {count, handleDecrement, handleIncrement} = useCounter()

  return (
    <div style={{minWidth:'30vw', minHeight:'40vh', backgroundColor:'darkgrey'}}>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'2em'}}>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        </div>
        <div style={{backgroundColor:'gray', color:'white', marginTop:'2rem'}}>
            <p>Ejercicio para crear un contador con REACT y llevar la logica de funcionamiento del componente a un Custo Hook </p>
        </div>
    </div>
  )
}

export default Contador