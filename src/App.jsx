import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Display from './components/Display'
import Text from './components/Text'
import Cards from './components/Cards'
import Qualities from './components/Qualities'
import Footer from './components/Footer'
import Customers from './components/Customers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Display />
     <Text />
     <Cards />
     <Qualities />
     <Customers />
     <Footer />
    </>
  )
}

export default App