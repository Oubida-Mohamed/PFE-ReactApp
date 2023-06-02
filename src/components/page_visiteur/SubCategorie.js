

export default function SubCategorie(props){
    return (<>
        
            {props.service.nom!=undefined?
            <div className="rounded-lg cursor-pointer  overflow-hidden xl:w-[290px] md:w-[270px]  w-[240px] lg:w-[18rem] xl:h-[350px] h-[270px] relative  shadow-2xl">
                <div className="absolute rounded-lg w-full h-full ">
                    <img className="w-full h-full " src={props.service.image} alt="Sunset in the mountains"/>
                </div>
                <div className="absolute text-white my-5">
                    <p className="md:text-lg text-[16px] font-Inter w-full ml-4  font-semibold">{props.service.description}</p>
                    <h1 className="md:text-3xl text-2xl my-2 ml-7 font-bold ">{props.service.nom}</h1>
                </div>
            </div> :
                <div className="rounded-lg  overflow-hidden xl:w-[290px] md:w-[270px]  w-[240px] lg:w-[18rem] xl:h-[350px] h-[270px] relative  shadow-2xl">
                    <div className="absolute rounded-lg w-full h-full ">
                        <img className="w-full h-full " src={props.service.image} alt="Sunset in the mountains"/>
                    </div>
                    <div className="absolute text-white ml-4 my-4 ">
                        <p className="text-3xl  font-Irish Grover md:text-[24px] text-[16px] font-semibold ">{props.service.description}</p>
                    </div>
                </div>
            }
        </>
    );
}