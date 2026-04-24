import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './styles/layout.css'
import Header from './components/Header'
import Haugen from './components/Haugen'
import Marra from './components/Marra'
import Vinge from './components/Vinge'
import Vangemert from './components/Vangemert'
import Assignments from './components/Assignments'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <section>
          <Haugen />
          <Marra />
          <Vinge />
          <Vangemert />
        </section>
        <Assignments />
      </main>
    </>
  )
}

export default App
