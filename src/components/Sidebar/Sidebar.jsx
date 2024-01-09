import { useState } from 'react'
import './Sidebar.css'
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../context/useContext'

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

    const Menus = [
      {
        title: "Chats",
        url: "/home",
        icon: "/../img/Message circle.svg",
      },
      {
        title: "Prompts",
        url: "/prompts",
        icon: "/img/Union.svg",
      },
      {
        title: "Sucursales",
        url: "/sucursales",
        icon: "/img/Home.svg",
      },
      {
        title: "Administradores",
        url: "/administradores",
        icon: "/img/Users.svg",
      },
      {
        title: "Configuraciones",
        url: "/configurations",
        icon: "/img/Settings.svg",
      },
      {
        title: "Integraciones",
        url: "/integrations",
        icon: "/img/Vector.svg",
      },
      {
        title: "Comandos",
        url: "/comandos",
        icon: "/img/Info circle.svg",
      },
    ];

 /*  const handleEventsSidebar = (parametro1, parametro2) => {
        if (parametro1) {
          navigate(parametro1);
        } else if (parametro2) {
          darkmode();
          } else{
            handleLogout();
        }
      };

//funcion para cerrar sesion
  const handleLogout = () => {
    const showAlert = () => {
      Swal.fire({
        title: "Warning",
        text: "Are you sure you want to logout?",
        icon: "question",
        showDenyButton: true,
        denyButtonText: "No",
        denyButtonColor: "#C0392B",
        confirmButtonText: "Yes",
        confirmButtonColor: "#239B56",
        iconColor: "#000000",
      }).then((response) => {
        if (response.isConfirmed) {
          Swal.fire("Succes", "your session closed", "success");
          navigate("/");
        } else if (response.isDenied) {
          Swal.fire("Info", "Ok, you still online", "info");
        } else {
          Swal.fire("Info", "Error", "something unexpected happened", "info");
        }
      });
    };

    showAlert();
  };
   */

  return (
    <div className="flex flex-col w-60 bg-slate-50 justify-between max-lg:hidden">
      <ul className="flex flex-col gap-5 m-5 ">
        <img src="/img/Capa_1.png" className="p-5" />
        {Menus.map((menu, index) => (
          <>
            <li
              onClick={() => navigate(menu.url)}
              key={index}
              className="flex mb-4 p-3 items-center bg-white rounded-md hover:bg-slate-300 hover:cursor-pointer"
            >
              <div className="mr-3 flex">
                <img src={menu.icon} className={`h-5`} />
              </div>
              <div className="text-sm font-medium leading-6 text-gray-900">
                {menu.title}
              </div>
            </li>
          </>
        ))}
      </ul>
      <div className="flex gap-3 m-5">
        <div className="flex items-center bg-white rounded-md hover:bg-slate-300 hover:cursor-pointer p-3 w-56 text-sm font-medium leading-6 text-gray-900">
          <img src="/img/Logout.svg" className="h-5 mr-2" />
          <p>Cerrar sesion</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar