import React from 'react'

export const Ejercicio002 = () => {
    //Logica de componente 
    // 1.-variable / constante 
    // 2.-hooks
    // 3.-funciones
    const nombreProducto = 'Smart Tv 90';

    function agregarACarritoDeCompras (){
        console.log('El producto: ',nombreProducto, "Se agrego a carrito");
    }

    function eliminarProducto (){
        console.warn('El producto: ',nombreProducto, "Se elimino del carrito");
    }

    
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className='h4 mt-4'>Ejercicio 2 - Botón y Funciones</h2>
            <hr/>
        </div>
        <button className=" w-25 btn btn-primary " onClick={agregarACarritoDeCompras}><i class="bi bi-plus-circle-fill"></i>
        <span className="ms-2">Agregar articulo</span>
        </button>
        

        <button className="w-25 btn btn-danger ms-4" onClick={eliminarProducto}><i class="bi bi-plus-circle-fill"></i>
        <span className="ms-2">Eliminar</span>
        </button>

    </div>
    </>
  );
};

export default Ejercicio002

