import React from 'react';
import Producto from '../components/Producto';
import {RopaM} from '../configs/infoProducto';


export default function RopaMujer() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Ropa de Damas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {RopaM.map((product) => (
          <Producto key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
