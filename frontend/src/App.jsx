import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './styles/layout.css'
import Header from './compontents/Header'
import Haugen from './compontents/Haugen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Haugen />
    </>
  )
}

export default App
