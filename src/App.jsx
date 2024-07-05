import React from 'react'
import Inicio from './components/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Contacto from './sites/Contacto'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/home" element={<Inicio />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/electronics" element={<div>Electronics</div>} />
          {/* Supongo que para la categoria se deberia crear una ruta para cada una xd*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}
