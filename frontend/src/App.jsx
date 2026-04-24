import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './styles/layout.css'
import Header from './compontents/Header'
import Vangemert from './compontents/Vangemert'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Vangemert />
    </>
  )
}

export default App
