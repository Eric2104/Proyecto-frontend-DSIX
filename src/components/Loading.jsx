import React from 'react'

export default function Loading() {
  return (
    <div className="container mx-auto p-4 h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="loader w-36 h-36 m-4"></div>
        <p className="text-lg">Cargando...</p>
      </div>
    </div>
    )
}
