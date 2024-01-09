import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export const EditarAdministrador = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [ admin , setAdmin ] = useState({
        foto: state.admin.foto,
        nombre: state.admin.nombre,
        apellido: state.admin.apellido,
        telefono: state.admin.telefono,
        correo: state.admin.correo
    })

    const handleReturn = () => {
        navigate("/administradores")
    }

    const handelClick = () =>{
        alert(JSON.stringify(admin))
    }

    const handleChange = (e) => {
        setAdmin({
            ...admin,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className="homeContainer flex items-stretch">
            <Sidebar/>
            <div className="container p-5">
                <Navbar
                    imagen={"../../../../img/Administradores.svg"}
                    displayButton={"hidden"}
                    displayInput={"hidden"}
                    funcionButtonAtras={handleReturn}
                />
                <div className="main-container pt-10 pl-20">
                    <h2 className="text-3xl">Editar Administrador</h2>
                    <div className="grid grid-cols-2">
                        <div className="columna-izq">
                            <div className="campo mt-10 w-60">
                                <p><b>Nombre</b></p>
                                <input name="nombre" onChange={handleChange} className="w-56" placeholder={admin.nombre + " " + admin.apellido}></input>
                            </div>
                            <div className="campo mt-10 w-60">
                                <p><b>Teléfono</b></p>
                                <input name="telefono" onChange={handleChange} className="w-56" placeholder={admin.telefono}></input>
                            </div>
                        </div>
                        <div className="columna-der">
                            <div className="campo mt-10 w-60">
                                <p><b>Email</b></p>
                                <input name="correo" onChange={handleChange} className="w-56" placeholder={admin.correo}></input>
                            </div>
                            <div className="campo mt-10 w-60">
                                <p><b>Foto</b> (URL)</p>
                                <input name="foto" onChange={handleChange} className="w-56" placeholder={admin.foto}></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-52 p-14 flex justify-end items-center">
                    <button onClick={() => handelClick()} className="boton-large boton-primario">Guardar Aministrador</button>
                </div>
            </div>
        </div>
    )
}