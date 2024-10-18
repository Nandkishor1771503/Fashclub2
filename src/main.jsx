import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import One from './components/One.jsx'
import Two from './components/Two.jsx'
import Three from './components/Three.jsx'
import Four from './components/Four.jsx'
import Product_one from './components/Product_one.jsx'
import Product_two from './components/Product_two.jsx'
import Product_three from './components/Product_three.jsx'
import Product_four from './components/Product_four.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element ={<App />} />

    <Route path='/one' element ={<One />} />
    <Route path='/one/:id' element ={<Product_one />} />

    <Route path='/two' element ={<Two />} />
    <Route path='/two/:id' element ={<Product_two />} />

    <Route path='/three' element ={<Three />} />
    <Route path='/three/:id' element={<Product_three />} />

    <Route path='/four' element ={<Four />} />
    <Route path='/four/:id' element ={<Product_four />} />
    <Route path="/about" element={<About />} />
    <Route path='/contact' element={<Contact/>} />
    
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
