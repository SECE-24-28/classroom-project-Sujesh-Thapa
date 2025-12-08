import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city="Kathmandu"
  let nums=[1,2,3,4,5]

  return (
    <>
      <p>I am from {city}</p>
      <p>Lucky Numbers: {[10, 20, 30]}</p>
      <p>Numbers: {nums}</p>
      <p>{true}</p>
      <p>{JSON.stringify({name:"Sujesh",age:21})}</p>
    </>
  )
}

export default App
