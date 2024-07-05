import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
<nav className="bg-slate-800 p-4 flex justify-between items-center text-white shadow-md">
  <div className="flex items-center space-x-4">
    <h1 className="text-2xl font-bold">ShopCity</h1>
  </div>
  <div className="flex items-center space-x-4">
    <Link to="/home" className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Inicio</Link>
    <Link to={'/electronics'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Electronicos</Link>
    <Link to={'/electronics'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Joyeria</Link>
    <Link to={'/electronics'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Ropa de Hombre</Link>
    <Link to={'/electronics'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Ropa de Mujeres</Link>
  </div>
  <div className="flex items-center space-x-4">
    
    <Link to="#" className="hover:text-gray-400 transition duration-300">Registrarse/Login</Link>
    <Link to="#" className="relative hover:text-gray-400 transition duration-300">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1.68 16.32a2 2 0 01-1.992 1.68H6.672a2 2 0 01-1.992-1.68L3 3zm6 9v4m6-4v4M5 3h14M9 5a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
      {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> */}
    </Link>
  </div>
</nav>


  )
}
