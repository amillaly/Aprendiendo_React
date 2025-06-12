import React, { useState } from 'react'

export const Ejercicio004 = () => {
     //variable
     let varchar = "";
     //hooks
     const [saludito, setSaludito] = useState("Aplicacion UTSH")
     //funciones
     const saludar = () =>{
         setSaludito("Hola Amillaly");
     }

     const adios = () =>{
        setSaludito("Adios Amillaly");
    }

    const reiniciar = () =>{
        setSaludito("Aplicacion UTSH");
    }


  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <div className="h4 mt-4">
                <h2>
                    Ejercicio 4 - Saludar
                </h2>
                <hr/>
            </div>
            <div className="col-12 text-center">
                <p className="h1">
                    {saludito}
                </p>
                <div className="col-12 ">
                    <button className="w-25 btn btn-outline-secondary" onClick={saludar}>Saludar</button>
                    <button className="w-25 btn btn-outline-danger ms-4" onClick={reiniciar}>Reiniciar</button>
                    <button className="w-25 btn btn-outline-primary ms-4" onClick={adios}>Despedir</button>
                </div>

               
            </div>
        </div>
    </div>
    </>
  )
}