import Service from "./page_components/Service";
import { services } from "./data";
import DropDownPrice from "./page_components/DropDownPrice";
import DropDownTime from "./page_components/DropDownTime";
import ToggleButton from "./page_components/ToggleButton";
import Pagination from './page_components/pagination';
import { useState ,useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../page_visiteur/footer";


function PageServices() {
  const [currentPage, setCurrentPage] = useState();
  const nbrPages = Math.ceil(services.length/24);
  useEffect(() => { setCurrentPage(1); }, []);
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  const begin = (currentPage-1)*24;
  const end = currentPage * 24;

  const [ButtonChecked, setButtonChecked]=useState(false);
  const handleChange=(state)=>{
    setButtonChecked(state);
  }

  return <div>
    <Navbar afiche={false}/>
  <div className="container mx-auto mt-[150px]">
    {/* Description */}
    <div className="mx-5 space-y-[10px]">
      <div className="flex space-x-[20px]">
        <a href="/" className="w-[29px] h-[29px] rounded-[50%] p-[7px] hover:bg-gray-200"><img src="images/home.png" alt="home" className=""/></a>
        <span className="mt-[3px]">/</span>
        <span className="mt-[3px]">Categorie & Categorie</span>
      </div>
      <div className="space-y-[10px]">
        <h2 className="font-bold text-2xl">SubCategorie</h2>
        <p>Stand out from the crowd with a logo that fits your brand personality.</p>
      </div>
    </div>
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
</div>
}

export default PageServices;