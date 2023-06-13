import Navbar from "../Navbar/Navbar";
import Footer from "../page_visiteur/footer";
import {services} from "./data";
import { useParams } from "react-router-dom";
export default function Detail_Services(){
    let { id } = useParams();
   
    const service_detail=services.find((sr)=>{return sr.id==id })
    console.log(service_detail)
    return(<>
            <Navbar afiche={false} detail_services={true}/>
            <div className="detail_services mt-2 w-full lg:px-[6%] xl:px-[13%] max-[981px]:mx-[3%]">
            <section id="Overview" className="w-full">
                <div className="md:w-[70%]">
                    <p className="font-bold text-lg text-custom-blue">Categorie > Sous categorie</p>
                    <h1 className="md:text-[30px] text-[20px] lg:text-[32px] font-bold">{service_detail.description} </h1>
                </div>
                <div className="md:w-[30%]"></div>

            </section>
                
            </div>
            
            {/* <Footer/> */}
        </>
    )
}