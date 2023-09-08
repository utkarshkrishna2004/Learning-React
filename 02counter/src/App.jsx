import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    if(counter>0){  //just a check so that the count doesn't go below 0 upon decrement. 
      setCounter(counter - 1)  
    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter in React⏱️</h1>
      
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue}
      >Increase Value {counter}</button>
      
      <br />
      <br />
      
      <button onClick={reduceValue}
      >Decrease Value {counter}</button>
      
      <br />
      <br />

      <button onClick={resetValue}
      >Reset Value {counter}</button>
      
      <h5>Footer: {counter}</h5>
    </>
  )
}

export default App
