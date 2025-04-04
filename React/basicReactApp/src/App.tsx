import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from "./components/Name"
import Address from './components/Address'




function App() {
  const [count, setCount] = useState(0)

  return <div>
     <Name name="Ranjan Ram"/>
    <Address/>
  </div>
}

export default App
