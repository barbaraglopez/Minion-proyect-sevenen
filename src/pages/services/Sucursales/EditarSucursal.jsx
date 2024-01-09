import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import './Sucursal.css';
import {useState} from "react";
import {BurguerNav} from "../../../components/BurguerNav/BurguerNav";

export const EditarSucursal = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [ sucursal , setSucursal ] = useState({
        nombre: state.sucursal.nombre,
        longitud: state.sucursal.longitud,
        latitud: state.sucursal.latitud,
        direccion: state.sucursal.direccion,
        telefono: state.sucursal.telefono,
        gerente: state.sucursal.gerente
    })

    const handleReturn = () => {
        navigate("/sucursales")
    }

    const handelClick = () =>{
        //Enviar los datos de la sucursal que se coloquen en los inputs, a la api
        alert(JSON.stringify(sucursal))
    }

    const handleChange = (e) => {
        setSucursal({
            ...sucursal,
            [e.target.name] : e.target.value
        })
    }

    return (
      <>
        <BurguerNav />
        <div className="homeContainer flex items-stretch justify-center">
          <Sidebar />
          <div className="container p-5">
            <Navbar
              imagen={"../../../../img/Sucursales.svg"}
              displayButton={"hidden"}
              displayInput={"hidden"}
              funcionButtonAtras={handleReturn}
            />
            <div className="main-container pt-10 pl-20 max-md:pl-10 max-md:flex max-md:flex-col max-md:items-center bg-slate-100 p-10 rounded-lg">
              <h2 className="text-3xl">Editar Sucursal</h2>
              <div className="grid grid-cols-2 max-md:flex max-md:flex-col max-md:items-center max-md:w-full">
                <div className="columna-izq">
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Nombre</b>
                    </p>
                    <input
                      name="nombre"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.nombre}
                    ></input>
                  </div>
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Longitud</b>
                    </p>
                    <input
                      name="longitud"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.longitud}
                    ></input>
                  </div>
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Teléfono</b>
                    </p>
                    <input
                      name="telefono"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.telefono}
                    ></input>
                  </div>
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Mapa</b>
                    </p>
                    <input
                      name="mapa"
                      onChange={handleChange}
                      className="w-56"
                    ></input>
                  </div>
                </div>
                <div className="columna-der">
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Latitud</b>
                    </p>
                    <input
                      name="latitud"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.latitud}
                    ></input>
                  </div>
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Dirección</b>
                    </p>
                    <input
                      name="direccion"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.direccion}
                    ></input>
                  </div>
                  <div className="campo mt-10 w-60">
                    <p>
                      <b>Gerente</b>
                    </p>
                    <input
                      name="gerente"
                      onChange={handleChange}
                      className="w-56"
                      placeholder={sucursal.gerente}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-52 p-14 flex justify-end items-center">
              <button
                onClick={() => handelClick()}
                className="boton-large boton-primario"
              >
                Guardar Sucursal
              </button>
            </div>
          </div>
        </div>
      </>
    );
}