import React from 'react'
import {Link} from 'react-router-dom'
export default function Hero({imagen,titulo, descripcion, enlace}) {
  return (
    //Quiero un hero con un fondo con bg-slate-800 donde a la izquierda haya un texto de color blanco con un tamaño de 4xl y derecha una imagen
    <div className='bg-slate-800 text-white w-full'>
        <div className='container flex justify-between items-center h-96'>
            <div className='w-full text-center space-y-4'>
                <h1 className='text-4xl'>{titulo}</h1>
                <div className='w-3/4 mx-auto'>
                    <p className=' my-4'>{descripcion}</p>
                    <Link to={enlace} className='p-2 my-4 rounded-md bg-slate-500'>Visitar categoria</Link>
                </div>
            </div>
            <div className='w-full'>
                <img src={imagen} alt='Hero' className='w-3/4'/>
            </div>
        </div>
    </div>

  )
}
