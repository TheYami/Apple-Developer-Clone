import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Promo from './components/Promo'
import Plan from './components/Plan'
import Product from './components/Product'
import Build from './components/Build'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Promo/>
      <Plan/>
      <Product/>
      <Build/>
      <Footer/>
    </>
  )
}

export default App
