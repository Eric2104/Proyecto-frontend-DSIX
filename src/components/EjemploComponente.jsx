//Si escribes "rfc" y luego presionas "tab" se crea automaticamente el componente funcional
import React from 'react'

export default function EjemploComponente() {
  return (
    //Recordar que cada componente debe tener un "contenedor" padre ya sea un div o un fragment "<></>"
    //Se usa div si quieres aplicar className o estilos al contenedor padre
    <div className='claseEjemplo'>
        <h1>Este es un componente de ejemplo</h1>
    </div>

    //Ejemplo con fragment, recordar que no puede haber 2 padres
    // <>
    //     <h1>Este es un componente de ejemplo</h1>
    // </>
  )
}
