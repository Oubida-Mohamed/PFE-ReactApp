export default function Avantage_fiver(props){
    return(
        <div className=" h-[200px] md:w-[300px] w-[200px]   md:font-semibold ">
            <div className="text-center">
                <img src={props.avantage.image} className="md:w-[70px] w-[50px] md:h-[65px] h-[45px] mx-auto"/>
                <p className="text-[#00B3FF] md:text-[20px] text-[16px] mb-1">{props.avantage.nom}</p>
            </div>
            <div className="text-center text-[#868686] max-md:text-[15px] ">
            {props.avantage.description}
            </div>
        </div>
    )
}