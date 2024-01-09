import "./SocialMedia.css"
import { useNavigate } from "react-router-dom";

export const SocialMedia =({imagenIcon, imagenWord})=>{
  const navigate = useNavigate();

    return (
      <div className="grid grid-cols-2 gap-40">
        <div className="flex">
          <img src={imagenIcon} className="h-10" />
          <img src={imagenWord} className="ml-4"/>
        </div>
        <div className="flex">
          <button 
          onClick={()=>{navigate("/addintegrations");}}
          className="boton-large boton-primario button-socialmedia">Agregar</button>
        </div>
      </div>
    );
}