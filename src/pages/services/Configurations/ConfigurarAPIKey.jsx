export const ConfigurarAPIKey = () =>{
   return(
      <div className="flex flex-col">
         <div>
            <img src={"../../../../img/Configurar_API_Key.svg"} className="p-5"/>
            <div>
               <p className="text-lg pl-5">Nueva API Key</p>
               <input className="w-full pl-2 ml-5" placeholder="EJEMPLO: AKHFBEOAUBF51655"></input>
            </div>
         </div>
         <div className="mt-14 pl-5 flex gap-2">
            <button className="boton-large boton-primario">Guardar</button>
            <button className="boton-large boton-secundario">Eliminar API Key</button>
         </div>
      </div>
   )
}