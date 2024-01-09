export const BurguerNav =()=>{
    return (
      <div className="bg-slate-200 hidden max-lg:block max-lg:flex max-lg:justify-between p-5 w-screen">
        <img src="../../../img/Capa_1.png" className="h-7" />
        <div className="flex items-center">
          <img src="../../../img/Profile.svg" className="h-8" />
          <div className="w-10 hover:cursor-pointer ">
            <img src="../../../img/Burger.svg" className="h-10" />
          </div>
        </div>
      </div>
    );
}