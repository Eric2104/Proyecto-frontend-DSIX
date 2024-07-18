import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useTestimonialFetch from '../hooks/TestimonialFetch.js';
import responsive from '../configs/carouselConfig.js';
import iconUser from '/iconUser.svg';

export default function Testimonials() {
  const { data, isLoading, error } = useTestimonialFetch('https://fakestoreapi.com/users?limit=4');

  if (isLoading) {
    return <div className="text-center text-white">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center text-white">Error al cargar los testimonios.</div>;
  }

  return (
    <div className='w-full space-y-4 my-4'>
        <h2 className='font-semibold text-2xl text-gray-600 text-center'>Testimonios</h2>
        <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {data.map(user => (
          <div key={user.id} className="w-2/4 mx-auto text-center">
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, quod, quisquam fugit doloribus adipisci nisi, animi asperiores quidem distinctio quaerat rerum et in id impedit facilis maiores necessitatibus molestias odit!
            </p>
            <img src={iconUser} alt="iconUser" className="h-16 mx-auto my-2" />
            <span>{user.name.firstname} {user.name.lastname}</span>
            <div className="text-gray-500">@{user.username}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
