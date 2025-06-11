import React from 'react'
import BotonCrearCuenta from './BotonCrearCuenta'
import BotonInicioSesion from './BotonInicioSesion'

const ContenedorBotones = () => {
  return (
    <div className='container'>
        <hr/>
        <h2 className='h4 text-start mt-4'>
            Contenedor de botones
        </h2>
        <div className="col-12 d-flex flex-column flex-md-row g-2 justify-content-around">
        <BotonCrearCuenta />
        <BotonInicioSesion />
    </div>
    </div>

    
  )
}

export default ContenedorBotones
