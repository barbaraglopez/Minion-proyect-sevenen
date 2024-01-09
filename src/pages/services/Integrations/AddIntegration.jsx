import Sidebar from "../../../components/Sidebar/Sidebar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import Navbar from "../../../components/Navbar/Navbar";
import {ConectSocialMedia} from "../../../components/SocialMedia/ConectSocialMedia"
import "./AddIntegration.css"

export const AddIntegration = () => {
  return (
    <div className="max-md:align-middle flex items-stretch max-lg:flex-col">
      <Sidebar />
      <BurguerNav />
      <div className="container p-5">
        <Navbar
          imagen={"../../../../img/Integraciones.svg"}
          displayInput={"hidden"}
          displayButton={"hidden"}
          nombre={"Sara Hebe"}
          funcionBoton={"Crear nueva sucursal"}
        />
        <ConectSocialMedia className="conectSocialmedia"/>
      </div>
    </div>
  );
};
