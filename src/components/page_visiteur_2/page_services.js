import Service from "./page_components/Service";
import { services } from "./data";
import DropDownPrice from "./page_components/DropDownPrice";
import DropDownTime from "./page_components/DropDownTime";
import ToggleButton from "./page_components/ToggleButton";
import Pagination from './page_components/pagination';
import { useState ,useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../page_visiteur/footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading_func from "./no_produits";
function PageServices() {
  let {categorie}=useParams()
  let {subcategorie}=useParams()
  let {search2}=useParams()
  let {header}=useParams()
  let {id}=useParams()

  const [currentPage, setCurrentPage] = useState();
  const [cg, setcg] = useState([]);
  const [datail_filter, setdatail_filter] = useState([]);
  const [data, setdata] = useState([]);
  const nbrPages = Math.ceil(services.length/24);

  // const categories = useSelector((state) => state.categorie);
  useEffect(() => {

    setCurrentPage(1);
    fetch(`http://127.0.0.1:8000/api/services`).then(rep=>rep.json())
        .then(rep_data=>{setdata(rep_data)})
        .catch(error=>console.log(error))
  },[]);

  useEffect(()=>{
    if(id!=null){
      setdatail_filter(data.filter((d)=>{return d.sub_categories_id==id}))
    }else if(search2!=null){
     if(search2!="undefined"){
        const servs=[]
        data.filter((sd)=>{ 
          if(sd.tags.indexOf(search2) >= 0) {
            servs.push(sd) 
           }
        });
        if(servs.length>0){
          setdatail_filter(servs)
        }
      }else{
        setdatail_filter(data)
      }
    }
  },[data]);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  const begin = (currentPage-1)*24;
  const end = currentPage * 24;
  const [ButtonChecked, setButtonChecked]=useState(false);
  const handleChange=(state)=>{
    setButtonChecked(state);
  }
  console.log(datail_filter)
  return <>{datail_filter.length>0?<div>
    <Navbar afiche={false} detail_services={false}/>
  <div className="container mx-auto mt-[150px]">
    {/* Description */}
      {subcategorie!=null ? <div className="mx-5 space-y-[10px]"><div className="flex space-x-[20px]">
       <a href="/" className="w-[29px] h-[29px] rounded-[50%] p-[7px] hover:bg-gray-200"><img src="/images/home.png" alt="home" className=""/></a>
       <span className="mt-[3px]">/</span>
       <span className="mt-[3px]">{categorie}</span> <span className="mt-[3px]"> & {header}</span>
     </div>
     <div className="space-y-[10px]">
       <h2 className="font-bold text-2xl">{subcategorie}</h2>
       <p>Stand out from the crowd with a logo that fits your brand personality.</p>
     </div>
     </div>:<div className="flex space-x-[20px] ml-[2.5%]">
        <span className="mt-[25px]  text-[1.8rem]">Results {search2=="undefined"?":":"for"} </span>
        <span className="mt-[25px] text-[1.8rem]"> {search2!="undefined"?search2:null}</span>
      </div>}
      {/* {data_filter.length==0 && search2!=null?<div className="text-red-500 ml-[2.5%] text-lg mt-5 ">Im sorry services "{search2}" not found </div>:null} */}
    {/* Filter */}
    <div className=" mt-10 md:flex  ">
      <div className=" flex ">
        <div className="mx-[20px] sm:mx-[30px] z-[5px]">
          <DropDownPrice/>
        </div>
        <div className="mx-[160px] z-[5px]">
          <DropDownTime/>
        </div>
      </div>
      <div className="flex mx-auto px-8 md:mt-[20px] mt-[60px] space-x-[53px] z-0">
          <ToggleButton label={'Local sellers'} event={handleChange}/>
          <ToggleButton label={'Online sellers'} event={handleChange}/>
      </div>
    </div>
  {/* Services */}
  <div className="place-items-center my-3 md:my-10 grid min-[1060px]:grid-cols-4 min-[1060px]:gap:4 min-[810px]:grid-cols-3 min-[810px]:gap-3 min-[540px]:grid-cols-2 min-[540px]:gap:2 grid-cols-1">
    {services.slice(begin,end).map((s,i)=>{return <Service key={i} service={s}/>})}
  </div>
  {/* Pagination */}
  <div className="grid place-items-center my-10">
    <Pagination totalPages={nbrPages} onPageChange={handlePageChange} currentPage={currentPage} />
  </div>
</div>
<Footer/>
</div>:<Loading_func x={datail_filter}/>}</>
}

export default PageServices;