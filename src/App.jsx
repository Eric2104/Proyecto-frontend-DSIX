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
import Login from './components/Login'
import VerProducto from './sites/VerProducto'
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <div className='relative'><NavBar /></div>
      <div className='h-20 bg-slate-800'></div>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/joyas" element={<Joyas />} />
            <Route path="/rh" element={<RopaHombre />} />
            <Route path="/rm" element={<RopaMujer />} />
            <Route path="/session" element={<Login />} />
            <Route path="/ver/:id" element={<VerProducto />} />
            {/* Supongo que para la categoria se deberia crear una ruta para cada una xd*/}
          </Routes>
        <Footer />  
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}
