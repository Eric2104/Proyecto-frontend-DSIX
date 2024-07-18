// NavBar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function NavBar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <nav className="w-full fixed top-0 z-10 bg-slate-800 p-4 flex justify-between items-center text-white shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">ShopCity</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Inicio</Link>
        <Link to={'/electronics'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Electrónicos</Link>
        <Link to={'/joyas'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Joyería</Link>
        <Link to={'/rh'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Ropa de Hombre</Link>
        <Link to={'/rm'} className="hover:text-gray-400 transition duration-300 hover:bg-slate-700 p-2 rounded-md">Ropa de Mujeres</Link>
      </div>
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <button className='' onClick={handleLogout}>Logout</button>
            <Link to="/carts" className="relative hover:text-gray-400 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" className='fill-50'/></svg>
            </Link>
          </>
        ) : (
          <Link to="/session" className="hover:text-gray-400 transition duration-300">Registrarse/Login</Link>
        )}
      </div>
    </nav>
  );
}
