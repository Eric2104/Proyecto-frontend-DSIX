import React from 'react'
import Producto from '../components/Producto'
import { electronics } from '../configs/infoProducto'

const Electronics = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Electrónicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {electronics.map((product) => (
          <Producto key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Electronics