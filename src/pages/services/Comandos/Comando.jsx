import { useNavigate } from "react-router-dom";
import './Comandos.css'

export const Comando = ({comandoData}) => {
	const navigate = useNavigate();

	const handelClick = () => {
		navigate('/editar-comandos', { state: { comando: comandoData } });
	}

	return (
		<div className="my-cols-comandos grid grid-cols-7 gap-10 h-14">
			<div className="column-com">{comandoData.nombre}</div>
			<div className="column-des col-span-4">{comandoData.descripcion}</div>
			<div className="column-acc col-span-2">
				<div className="action-buttons flex gap-2">
					<button onClick={() => handelClick()} className="boton-small boton-primario w-20">Editar</button>
					<button className="boton-small boton-secundario">Borrar</button>
				</div>
			</div>
		</div>
	)
}