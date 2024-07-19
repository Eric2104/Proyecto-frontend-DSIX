import {Link} from 'react-router-dom'
export default function Hero({imagen,titulo, descripcion, enlace}) {
  return (
    <div className='bg-slate-800 text-white h-[60vh] flex items-center justify-center'>
        <div className='container w-5/6 mx-auto px-4'>
            <div className='flex flex-col lg:flex-row items-center justify-between h-full'>
            <div className='text-center lg:text-left lg:w-1/2 space-y-6'>
                <h1 className='text-4xl lg:text-6xl font-bold'>{titulo}</h1>
                <p className='mt-4 lg:mt-6 text-lg lg:text-xl'>{descripcion}</p>
                <Link to={enlace} className='inline-block mt-6 px-6 py-3 bg-slate-500 text-white rounded-md shadow-lg hover:bg-slate-600 transition duration-300'>
                Visitar categoria
                </Link>
            </div>
            <div className='lg:w-1/2 mt-6 lg:mt-0 flex justify-center'>
                <img src={imagen} alt='Hero' className='w-full lg:w-3/4 mx-auto lg:mx-0'/>
            </div>
            </div>
        </div>
    </div>
  )
}
