import { useState } from 'react'
import './App.css'
import Autentication from './views/autentication'
import Register from './views/autentication'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Register/>
      <Autentication/>
      
    </div>
  )
}

export default App
