import React from 'react'
import Inicio from './sites/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Electronics from './sites/Electronics'
import Joyas from './sites/Joyas'
import RopaHombre from './sites/RopaHombre'
import RopaMujer from './sites/RopaMujer'
import Footer from './sections/Footer' 
import Login from './sites/Login'
import VerProducto from './sites/VerProducto'
import Carts from './sites/Carts'
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
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/joyas" element={<Joyas />} />
            <Route path="/rh" element={<RopaHombre />} />
            <Route path="/rm" element={<RopaMujer />} />
            <Route path="/carts" element={<Carts />} />
            <Route path="/session" element={<Login />} />
            <Route path="/ver/:id" element={<VerProducto />} />
          </Routes>
        <Footer />  
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}
