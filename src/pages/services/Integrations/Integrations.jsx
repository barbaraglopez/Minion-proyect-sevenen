import Sidebar from "../../../components/Sidebar/Sidebar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import Navbar from "../../../components/Navbar/Navbar";
import "./Integrations.css"
import { SocialMedia } from "../../../components/SocialMedia/SocialMedia";

export const Integrations = () => {
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
        <div className="grid grid-cols-2 gap-10 p-5 h-80 max-md:grid-cols-1">
          <div className="integrations-sub-div">
            <SocialMedia
              imagenIcon={"../../../../img/whatsappIcon.svg"}
              imagenWord={"../../../../img/Whatsapp-word.svg"}
            />
          </div>
          <div className="integrations-sub-div">
            <SocialMedia
              imagenIcon={"../../../../img/facebooIcon.svg"}
              imagenWord={"../../../../img/Facebookword.svg"}
            />
          </div>
          <div className="integrations-sub-div">
            <SocialMedia
              imagenIcon={"../../../../img/telegramIcon.svg"}
              imagenWord={"../../../../img/TelegramWord.svg"}
            />
          </div>
          <div className="integrations-sub-div">
            <SocialMedia
              imagenIcon={"../../../../img/IgIcon.svg"}
              imagenWord={"../../../../img/InstagramWord.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
