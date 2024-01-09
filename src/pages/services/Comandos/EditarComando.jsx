import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import { BurguerNav } from "../../../components/BurguerNav/BurguerNav.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditarComando = () =>{
	const { state } = useLocation();
	const navigate = useNavigate();
	const [ comando , setComando ] = useState({
		nombre: state.comando.nombre,
		descripcion: state.comando.descripcion
	})
	const handleReturn = () => {
		navigate("/comandos")
	}

	const handleChange = (e) => {
		setComando({
			...comando,
			[e.target.name] : e.target.value
		})
	}

	const handelClick = () =>{
		//Enviar los datos de la sucursal que se coloquen en los inputs, a la api
		alert(JSON.stringify(comando))
	}

	return (
		<div className="homeContainer flex items-stretch">
			<Sidebar/>
			<BurguerNav />
			<div className="container p-5">
				<Navbar
					imagen={"../../../../img/Comandos.svg"}
					displayButton={"hidden"}
					displayInput={"hidden"}
					funcionButtonAtras={handleReturn}
				/>
				<div className="main-container pt-10 pl-20">
					<h2 className="text-3xl">Editar Comando</h2>
					<div className="grid grid-cols-1">
						<div className="columna-izq">
							<div className="campo mt-10 w-60">
								<p><b>Nombre</b></p>
								<input name="nombre" onChange={handleChange} className="w-56" placeholder={comando.nombre}></input>
							</div>
							<div className="campo mt-10 w-60">
								<p><b>Descripción</b></p>
								<textarea name="descripcion" onChange={handleChange} className="w-80 h-52 p-1" placeholder={comando.descripcion}></textarea>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-52 p-14 flex justify-end items-center">
					<button onClick={() => handelClick()} className="boton-large boton-primario">Guardar Comando</button>
				</div>
			</div>
		</div>
	)
}