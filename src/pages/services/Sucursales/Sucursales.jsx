import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import { Sucursal } from "./Sucursal.jsx";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";

export const Sucursales = () => {
    const [data, setData] = useState(null);
    const BASE_URL = "https://bot.yappastore.com";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () =>{
        axios.get(`${BASE_URL}/branches`)
           .then(response => {
               setData(response.data);
           })
           .catch(error => {
               console.error('Error al realizar la operación GET:', error);
           });
    }

    /*let sucursales = [
        {
            nombre : "test",
            latitud: 12345.0,
            longitud: 12345.0,
            direccion: "test 123",
            telefono: "123-456789",
            gerente: "test"
        },
        {
            nombre : "test2",
            latitud: 99999.0,
            longitud: 99999.0,
            direccion: "test 456",
            telefono: "123-999999",
            gerente: "test2"
        }
    ];*/

    return (
      <>
        <BurguerNav />
        <div className="homeContainer flex items-stretc">
          <Sidebar />
          <div className="p-5">
            <Navbar
              imagen={"../../../../img/Sucursales.svg"}
              displayButtonAtras={"hidden"}
              displayInput={"hidden"}
              funcionButton={"Agregar sucursal"}
            />
            <div className="main-container">
              <div className="my-cols column-titles grid grid-cols-8 mb-8">
                <div className="column-nom w-40 max-xl:w-20">
                  <b>Nombre</b>
                </div>
                <div className="column-lat w-40 max-xl:w-20">
                  <b>Latitud</b>
                </div>
                <div className="column-lon w-40 max-xl:w-20">
                  <b>Longitud</b>
                </div>
                <div className="column-dir w-32 max-xl:w-20">
                  <b>Dirección</b>
                </div>
                <div className="column-tel w-32 max-xl:w-20">
                  <b>Teléfono</b>
                </div>
                <div className="column-ger w-40 max-xl:w-20">
                  <b>Gerente</b>
                </div>
                <div className="column-map w-48 max-xl:w-20">
                  <b>Mapa</b>
                </div>
                <div className="column-acc w-48max-xl:w-20 ">
                  <b>Acciones</b>
                </div>
              </div>
              <div className="column-elements">
                {data &&
                  data.map((sucursal) => {
                    return <Sucursal sucursalData={sucursal} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

