import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar ({imagen, displayButton, displayInput, funcionButton, nombre, eventoFuncion, displayButtonAtras, funcionButtonAtras}) {
  
  return (
    <div className="w-full h-30 flex items-center justify-between p-10 max-md:p-3 ">
      <div className={`${displayButtonAtras} w-5 h-5`}>
        <button onClick={() => funcionButtonAtras()} className="boton-atras"> {`\<`} </button>
      </div>
      <div className="justify-self-start pl-10">
        <img src={imagen} />
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <input
            placeholder=" Buscar prompts "
            required
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ${displayInput} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-md:hidden`}
          />
        </div>
        <button onClick={()=>eventoFuncion()} className={`boton-large boton-primario h-min mr-5 ${displayButton} text-sm p-2 font-bold text-zinc-200`}>
          {funcionButton}
        </button>
        <div className=" self-end bg-slate-200 rounded-full flex items-center w-48 max-lg:hidden">
          <img src="/img/Profile.svg" className="mr-2" />
          <div className="display">
            <p className="text-sm font-medium leading-6 text-gray-900">
              {nombre ?? "Sara Hebe"}
            </p>
            <p className="text-indigo-700 text-sm">Administrador</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
