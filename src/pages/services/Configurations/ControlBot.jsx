export const ControlBot = () =>{
    return(
        <div className="flex flex-col items-center">
            <div>
               <img src={"../../../../img/Control_del_Bot.svg"} className="p-5"/>
            </div>
           <div className="flex flex-col gap-4">
              <button className="boton-primario boton-large">Reiniciar Bot</button>
              <button className="boton-secundario boton-large">Apagar Bot</button>
           </div>
        </div>
    )
}