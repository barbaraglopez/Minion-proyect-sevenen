import Sidebar from "../../../components/Sidebar/Sidebar";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import Navbar from "../../../components/Navbar/Navbar";
import "./Configurations.css"
import {ParametrosBot} from "./ParametrosBot.jsx";
import {SelectorModeloOpenAI} from "./SelectorModeloOpenAI.jsx";
import {EstadoBot} from "./EstadoBot.jsx";
import {ControlBot} from "./ControlBot.jsx";
import {ConfigurarAPIKey} from "./ConfigurarAPIKey.jsx";

export const Configurations = () => {



  return (
    <div className="homeContainer max-md:align-middle flex items-stretch max-lg:flex-col">
      <Sidebar />
      <BurguerNav />
      <div className="container p-5 flex flex-col">
        <Navbar
          imagen={"../../../../img/Configuraciones.svg"}
          displayInput={"hidden"}
          displayButton={"hidden"}
          displayButtonAtras={"hidden"}
        />
        <div className="grid grid-cols-2 containerDiv gap-5 mb-10">
          <div className="bg-slate-100 rounded-md ">
            <ParametrosBot />
          </div>
          <div className="bg-slate-100 rounded-md ">
            <SelectorModeloOpenAI />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-9">
          <div className="bg-slate-100 containerDivs h-72 rounded-md">
            <EstadoBot />
          </div>
          <div className="bg-slate-100 containerDivs h-72 rounded-md">
            <ControlBot />
          </div>
          <div className="bg-slate-100 containerDivs h-72 rounded-md">
            <ConfigurarAPIKey />
          </div>
        </div>
      </div>
    </div>
  );
};
