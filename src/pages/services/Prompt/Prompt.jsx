import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import { Card } from "../../../components/Cards/Card.jsx";
import { useState } from "react";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Prompt = () => {
  const navigate = useNavigate();
  const BASE_URL = "https://bot.yappastore.com";

  const handleClick =()=>{
    navigate("/addprompt");
  }

  const fetchData = () => {
    axios.get(`${BASE_URL}//prompts/names`)
       .then(response => {

       })
  }

  const cards = [
    {
      id: 1,
      title: "Prompt de prueba para Bot",
      on: false,
      privacidad: "Privado",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Prompt de prueba para Bot",
      on: false,
      privacidad: "Privado",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Prompt de prueba para Bot",
      privacidad: "Privado",
      on: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Prompt de prueba para Bot",
      privacidad: "Privado",
      on: false,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ];

  return (
    <>
      <BurguerNav />
      <div className="flex items-stretch max-lg:flex-col w-full homeContainer">
        <Sidebar />
        <div className="p-5 max-lg:p-1">
          <Navbar
              className=""
              imagen={"../../../../img/Prompts.svg"}
              displayButtonAtras={"hidden"}
              funcionButton={"Crear nuevo prompt"}
              eventoFuncion={handleClick}
          />
          <div className=" w-full justify-center cardsContainer bg-slate-100">
            <div className="mr-2 w-full items-center flex justify-center">
              <input placeholder="Buscar prompts" required className={`hidden max-md:block w-full m-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}/>
            </div>
            <img
              src="../../../../img/Listado de Prompts.svg"
              className="p-3 h-12 max-md:h-12"
            />
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-lg:p-5">
              {cards.map(({ title, text, OnOff, id, privacidad }) => (
                  <div className="" key={id}>
                    <Card
                        privacidad={privacidad}
                        title={title}
                        text={text}
                        OnOff={OnOff}
                    />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
