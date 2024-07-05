import React from 'react'
import iconHome from '/iconHome.svg';
import iconArrow from '/iconArrow.svg';
import iconShop from '/iconShop.svg';
import iconSupport from '/iconSupport.svg';

export default function ComprarNosotros() {
  return (
  <div className='my-8 px-8 flex flex-col lg:flex-row justify-between items-center'>
    <div className='lg:w-2/4 mb-8 lg:mb-0'>
      <h2 className='text-center text-4xl font-bold mb-6'>¿Por qué comprar con nosotros?</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 text-center gap-8'>
        
        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <div className='flex items-center justify-center mb-4'>
            <img src={iconHome} alt='Entrega a domicilio' className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold mb-2'>Entrega a domicilio</h3>
          <p className='text-gray-600'>Disfruta de nuestras rápidas y seguras entregas directamente a tu puerta.</p>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <div className='flex items-center justify-center mb-4'>
            <img src={iconArrow} alt='Fácil devoluciones' className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold mb-2'>Fácil devoluciones</h3>
          <p className='text-gray-600'>Devolver productos es sencillo y sin complicaciones con nuestro servicio.</p>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <div className='flex items-center justify-center mb-4'>
            <img src={iconShop} alt='Fácil de comprar' className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold mb-2'>Fácil de comprar</h3>
          <p className='text-gray-600'>Navega y compra con facilidad en nuestra plataforma intuitiva.</p>
        </div>

        <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <div className='flex items-center justify-center mb-4'>
            <img src={iconSupport} alt='Soporte 24/7' className='w-12 h-12'/>
          </div>
          <h3 className='text-xl font-semibold mb-2'>Soporte 24/7</h3>
          <p className='text-gray-600'>Estamos aquí para ayudarte en cualquier momento, todos los días del año.</p>
        </div>

      </div>
    </div>
    <div className='lg:w-2/4 flex justify-center'>
      <img src='/genteComprando.png' alt='Hero' className='w-full lg:w-3/4 mx-auto rounded-lg'/>
    </div>
  </div>

  )
}
