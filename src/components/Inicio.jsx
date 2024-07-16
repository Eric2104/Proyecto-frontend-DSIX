import {} from 'react'
import Hero from './Hero.jsx'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from '../configs/carouselConfig.js';
import Cards from './Cards.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Footer from '../sections/Footer.jsx';
import ComprarNosotros from '../sections/ComprarNosotros.jsx';
import dataHero from '../configs/infoHero.js';
import {useFetch} from '../hooks/useFetch.js'
import { Link } from 'react-router-dom';

export default function Inicio() {

  const {data} = useFetch("https://fakestoreapi.com/products/category/electronics?limit=3");
  
  return (
    <div className='bg-zinc-100'>
        <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        >
        {dataHero.map((item, index)=>{
          return(
            <Hero key={index} imagen={item.imagen} titulo={item.titulo} descripcion={item.descripcion} enlace={item.enlace}/>
          )
        })}
        </Carousel>
        <div className='container my-2'>
        <div className='flex py-8 items-center'>
            <div className='w-1/3 space-y-4 px-6'>
            <h2 className='font-bold text-xl'>Tecnología de última generación</h2>
            <p>
              Productos electrónicos innovadores que mejoran la vida diaria, desde smartphones y laptops hasta electrodomésticos inteligentes, combinando tecnología avanzada, diseño moderno y funcionalidad para satisfacer diversas necesidades del consumidor.
            </p>
            <button className='bg-slate-500 p-2 rounded-md font-semibold text-white mx-auto'>
              <Link to="/electronics"> Ver categoria </Link>
            </button>
            </div>
            <div className='w-2/3 flex justify-between '>

            {
              data?.map((product)=> (
                <Cards key={product.id} product={product}/>
              ))
            }

            </div>
        </div>
        </div>
        <ComprarNosotros />
        <Testimonials />
        <Footer />
    </div>
  )
}
