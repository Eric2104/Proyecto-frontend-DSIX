import React from 'react'
import Inicio from './components/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Contacto from './sites/Contacto'
import Electronics from './sites/Electronics'
import Joyas from './sites/Joyas'
import RopaHombre from './sites/RopaHombre'
import RopaMujer from './sites/RopaMujer'
import Footer from './sections/Footer' 

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/home" element={<Inicio />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/joyas" element={<Joyas />} />
          <Route path="/rh" element={<RopaHombre />} />
          <Route path="/rm" element={<RopaMujer />} />

          {/* Supongo que para la categoria se deberia crear una ruta para cada una xd*/}
        </Routes>
      <Footer />  
      </BrowserRouter>
    </>
  )
}
