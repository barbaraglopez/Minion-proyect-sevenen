import { useNavigate } from "react-router-dom";
import "./cards.css";
import Switch from "./Switch.jsx";

export const Card = ({ privacidad, title, text }) => {
  const navigate = useNavigate();

  const handleClick = () =>{
     navigate("/editprompt")
  }

  return (
    <div className="cards bg-white rounded-lg">
      <div className="flex justify-between">
        <div className="text-xs font-medium text-violet-950 bg-violet-200 self-center flex justify-center w-32 rounded-sm mb-2">
          <p className="text-sm leading-6 text-gray-900">Prompt {privacidad}</p>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="cardText m-5">
        <p className="font-bold text-gray-600">{title}</p>
        <p className="text-sm font-medium leading-6 text-gray-900 p-1">
          {text}
        </p>
      </div>
      <div className="buttonsContainer flex justify-between p-5">
        <button
          onClick={() => navigate("/editprompt")}
          className="boton-primario p-2 text-sm text-slate-50 font-bold rounded-lg w-48 max-2xl:w-32"
        >
          Editar
        </button>
        <button
          /* onClick={() => navigate(menu.url)} */
          className="boton-secundario p-2 text-sm text-slate-50 font-bold rounded-lg w-48 max-2xl:w-32"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};
