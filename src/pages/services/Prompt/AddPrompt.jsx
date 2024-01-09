import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import CrudPrompt from "../../../components/CrudPrompt/CrudPrompt.jsx";
import {useNavigate} from "react-router-dom";

export const AddPrompt = () => {
   const  navigate  = useNavigate();
   const handleReturn = () =>{
      navigate("/prompts")
   }
   return (
      <div className="homeContainer flex max-lg:flex-col items-stretch">
         <Sidebar />
         <BurguerNav />
            <div className="container p-5 flex flex-col">
               <Navbar
                  imagen={"../../../../img/Prompts.svg"}
                  displayButton={"hidden"}
                  displayInput={"hidden"}
                  funcionBoton={"Crear nueva sucursal"}
                  funcionButtonAtras={handleReturn}
               />
               <CrudPrompt
                  imagen={"../../../../img/NuevoPrompt.svg"}
                  funcionalidadBoton={"Crear"}
               />
            </div>
      </div>
   );
};