export const EstadoBot = () =>{

    const listData = [
        {
            titulo: "estado 1"
        },
        {
            titulo: "estado 2"
        },
        {
            titulo: "estado 3"
        },
        {
            titulo: "estado 4"
        },
    ];
    return (
        <>
            <div className="container">
                <img src="../../../../img/Estado del Bot.svg" className="p-5"/>
            </div>
            <ul className="flex flex-col gap-5 m-5">
                {
                    listData.map((item, index) => (
                        <li key={index}> {item.titulo} </li>
                    ))
                }
            </ul>
        </>
)}