import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottey from './Lottery/Lottey'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lottey/>
    </>
      
  )
}

export default App
