import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Main } from './components/Main.jsx'

export const App = () => {

  return(
    <>
        <div className="card-main">
           <h1>Tareas por realizar</h1>
          <div className="style-homes">
              <h2>Tareas: 4</h2>
              <h2>Pendientes: 3</h2>
          </div>

          <div className="style-add">
            <h2>Agregar</h2>
            <Main/>
          </div>

        </div>

    </>
  );
};
