import React, { useState } from 'react'

export const Ejercicio003 = () => {
     //variable
     let numero = 10;
     //hooks
     const [numerito, setNumerito] = useState(0)
     //funciones
     const sumar = () =>{
         setNumerito(numerito + 1);
     }

     const restar = () =>{
        setNumerito(numerito - 1);
    }

    const reiniciar = () =>{
        setNumerito(0);
    }


  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <div className="h4 mt-4">
                <h2>
                    Ejercicio 3 - Funciones-Contador
                </h2>
                <hr/>
            </div>
            <div className="col-12 text-center">
                <p className="h1">
                    {numerito}
                </p>
                <div className="col-12">
                    <button className="w-25 btn btn-warning" onClick={sumar}>Sumar</button>
                </div>

                <div className="col-12 mt-2" >
                    <button className="w-25 btn btn-success" onClick={reiniciar}>Reiniciar</button>
                </div>  
                
                <div className="col-12 mt-2" >
                    <button className="w-25 btn btn-danger" onClick={restar}>Restar</button>
                </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

//En un componente nuevo 
//Un botón que diga saludar y otro despedir

//Hola, amillaly
//Adios, Amillaly

//Estado inicial: Aplicación UTS