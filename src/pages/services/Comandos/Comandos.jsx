import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import React, { useEffect, useState } from "react";
import { Comando } from "./Comando.jsx";
import axios from "axios";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";
import {useNavigate} from "react-router-dom";

export const Comandos = () =>{
	const [data, setData] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	/*const fetchData = () =>{
		axios.get('https://bot.yappastore.com')
			.then(response => {
				setData(response.data);
			})
			.catch(error => {
				console.error('Error al realizar la operación GET:', error);
			});
	}*/

	const fetchData = () =>{
		setData ([
			{
				nombre: "reboot",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			},
			{
				nombre: "stop",
				descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			}
		])
	}

	const handelAgregar = () => {
		navigate("/agregar-comando")
	}

	return(
		<div className="homeContainer flex items-stretch">
			<Sidebar/>
			<BurguerNav />
			<div className="container p-5">
				<Navbar
					imagen={"../../../../img/Comandos.svg"}
					displayInput={"hidden"}
					displayButtonAtras={"hidden"}
					funcionButton={"Agregar"}
					eventoFuncion={handelAgregar}
				/>
				<div className="main-container">
					<div className="grid grid-cols-7 gap-10 mb-8">
						<div className="column-com"><b>Comando</b></div>
						<div className="column-des col-span-4"><b>Descripción</b></div>
						<div className="column-acc col-span-2"><b>Acciones</b></div>
					</div>
					<div className="column-elements">
						{data &&
							data.map((comando) => {
								return (<Comando comandoData={comando}/>)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}