import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hello textColor='red'userName='Raju Kumar Mandal'/>
    <Hello textColor='yellow'userName='Ranjan Kumar Mandal'/>
    <Hello textColor='green'userName='Ritik Kumar Mandal'/>
    <Hello/>
    </>
  )
}

export default App
