import Sidebar from "../../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import { Administrador } from "./Administrador.jsx";
export const Administradores = () => {

    //Aca se debería hacer el llamado a la api
    let administradores = [
        {
            foto : "asd",
            nombre: "test",
            apellido: "test",
            correo: "test@test.com",
            telefono: "123-456789",
        },
        {
            foto : "asd",
            nombre: "test2",
            apellido: "test2",
            correo: "test2@test.com",
            telefono: "123-456789",
        }
    ];

    return(
        <div className="homeContainer flex items-stretch">
            <Sidebar/>
            <div className="container p-5">
                <Navbar
                    imagen={"../../../../img/Administradores.svg"}
                    displayButtonAtras={"hidden"}
                    funcionButton={"Agregar administrador"}
                />
                <div className="main-container">
                    <div className="my-cols column-titles grid grid-cols-5 mb-8">
                        <div className="column-nom w-40"><b>Foto</b></div>
                        <div className="column-lat w-40"><b>Nombre y Apellido</b></div>
                        <div className="column-lon w-40"><b>Correo Electrónico</b></div>
                        <div className="column-tel w-32"><b>Teléfono</b></div>
                        <div className="column-acc w-48"><b>Acciones</b></div>
                    </div>
                    <div className="column-elements">
                        {administradores.map((admin) => {
                            return(
                                <Administrador administradorData={admin}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

