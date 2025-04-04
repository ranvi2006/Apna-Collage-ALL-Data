import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Like from './Like'
import LudoBoard from './LudoBoard'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      {/* <Like/> */}
     <LudoBoard/> 
     
     </>
  )
}

export default App
