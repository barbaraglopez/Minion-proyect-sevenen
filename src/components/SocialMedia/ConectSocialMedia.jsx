export const ConectSocialMedia =()=>{
    return (
      <div className="bg-slate-100 h-96 flex justify-center font-medium max-sm:h-full">
        <div className="p-10 flex flex-col">
          <img src="../../../img/AgregarWhatsapp.svg" className="h-6 mb-3" />
          <div className="grid grid-cols-2 gap-10 p-6 max-sm:flex-col max-sm:flex">
            <div className="flex justify-center p-1">
              <img src="../../../img/QR.svg" className="h-40" />
            </div>
            <div className="flex flex-col justify-center p-1">
              <div className="">
                <p>Nombre del bot</p>
                <input className="mt-2" placeholder=" Carlos Sanchez" />
              </div>
              <div className="flex justify-center flex-col mt-2">
                <p>Foto del bot</p>
                <div className="flex justify-center items-center mt-2">
                  <img src="../../../img/fotodelbot.svg" className="h-20" />
                  <button className="boton-primario h-9 ml-3 text-xs p-2 rounded-md">
                    Cambiar foto
                  </button>
                </div>
              </div>
              <div>
                <p className="mt-2">Descripcion</p>
                <input className="mt-2" placeholder=" Bienvenido a Paya" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}