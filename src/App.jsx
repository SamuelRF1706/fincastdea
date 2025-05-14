import { useState } from 'react'
import './App.css'
import Autentication from './views/autentication/autentication'
import Register from './views/autentication/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Autentication/>
      <Register/>
      
    </div>
  )
}

export default App
