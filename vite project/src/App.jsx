import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Middlesection } from './components/middlesection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
 <Middlesection/>
 <Footer/>
    </>
  )
}

export default App
