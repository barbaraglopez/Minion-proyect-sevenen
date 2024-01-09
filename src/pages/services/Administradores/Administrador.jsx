import { useNavigate } from "react-router-dom";
export const Administrador = ({administradorData}) => {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/editar-administrador', { state: { admin: administradorData } });
    }

    return(
        <div className="grid grid-cols-5 h-14">
            <div className="column-nom w-40">{administradorData.foto}</div>
            <div className="column-lat w-40">{administradorData.nombre + " " + administradorData.apellido}</div>
            <div className="column-dir w-32">{administradorData.correo}</div>
            <div className="column-tel w-32">{administradorData.telefono}</div>
            <div className="column-acc w-48">
                <div className="action-buttons flex gap-2">
                    <button onClick={() => handelClick()} className="boton-small boton-primario">Editar</button>
                    <button className="boton-small boton-secundario">Borrar</button>
                </div>
            </div>
        </div>
    )
}