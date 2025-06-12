import { DosComponentes } from "./components/DosComponentes"
import Ejercicio002 from "./components/Ejercicio002"
import { Ejercicio003 } from "./components/Ejercicio003"
import { Ejercicio004 } from "./components/Ejercicio004"
import Ejercicio01 from "./components/Ejercicio01"
import { BotonGeneral } from "./components/utils/buttonGeneral"
import ContenedorBotones from "./components/utils/ContenedorBotones"

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              Hola UTSH 
            </h1>
          </div>
        </div>

      {/** Mando llamar componente externo */}
      <Ejercicio01/>
      <hr/>
      <BotonGeneral/>
      <hr/>
      <ContenedorBotones/>

      <Ejercicio002/>
      <hr/>
      <Ejercicio003/>
      <hr/>
      <Ejercicio004/>



      </div>

      
    </>
  )
}

export default App
