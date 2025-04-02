import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter,setcounter] = useState(5)
  
 // let counter =5;
   
  return (
    <>
      <h1>chai aur react</h1>
      <h3> Counter value:{counter}</h3>

      <button onClick={()=>{
        
        setcounter(counter+1)
      }}>Add Value </button>
      <br />
      <button onClick={()=>{
        if(counter<=0){
          setcounter(0)
        }else{
        setcounter(counter-1)}
      }}>Decrease Value </button>
    </>
  )
}

export default App
