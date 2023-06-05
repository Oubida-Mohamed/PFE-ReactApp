import React, { useState, useEffect,useContext } from 'react';
import { multiStepContext } from './StepContext'
export default function Education(){
  const { step,setstep, setvendData,vendData,setfinalData } = useContext(multiStepContext)
    const [pays_data, setpays_data] = useState([]);
    const [title, settitle] = useState("");
    const [speciality, setspeciality] = useState("");
    const [year, setyear] = useState("");
    const [university, setuniversity] = useState("");
    const [country_universty, setcountry_universty] = useState("");
    const [data,setdata]=useState([]);
    const [afiche,setafiche]=useState(true);
    // years data
    const startYear = 1900;
    const endYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
      yearOptions.push(
        <option value={year} key={year}>
          {year}
        </option>
      );
    }
    // get api country
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setpays_data(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const addeducation=()=>{
    if(title!="" && speciality!=""&& year!=""&& university!=""&& country_universty!=""){
        const trv=data.find((dt)=>{return dt.title==title && dt.speciality==speciality && dt.year==year && 
          dt.university==university && dt.country_universty==country_universty})
        if(trv==undefined){
            const obj={"title":title,"speciality":speciality,"year":year,"university":university,"title":title,
            "country_universty":country_universty}
        vendData.profesonel_info.education.push(obj)
        setdata(vendData.profesonel_info.education)
        setafiche(false)
        } 
    }
}
const delete_func=(data_delete)=>{
  if (data.length==1){
    setafiche(true)
}
  const datarest=vendData.profesonel_info.education.filter((dt)=>{return dt.title!=data_delete.title && 
    dt.speciality!=data_delete.speciality && dt.year!=data_delete.year
     && dt.university!=data_delete.university && dt.country_universty!=data_delete.country_universty})
  vendData.profesonel_info.education=datarest
  setdata(vendData.profesonel_info.education)
}
    return(<>
        {afiche==true?<div className='border-2 p-2.5'>
          <div className='flex  justify-around mb-3   '>
                <div className=" h-12 md:w-[200px] lg:w-[200px] xl:w-[300px]  bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Title..." onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className=" h-12 md:w-[200px] lg:w-[200px] xl:w-[300px] bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Speciality ..." onChange={(e)=>{setspeciality(e.target.value)}} />
                </div>
                <select className=" w-[80px] border border-gray-300 text-lg bg-gray-50 text-black outline-none cursor-pointer rounded-md"
                  onChange={(e)=>{setyear(e.target.value)}}  >
                  <option selected disabled>Year..</option>
                  {yearOptions} 
                </select>
            </div>
            <div className='flex justify-around'>
                <div className="h-12 md:w-[200px] lg:w-[200px] xl:w-[300px] bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Universirty Name..." onChange={(e)=>{setuniversity(e.target.value)}}  />
                </div>
                <select className="w-[180px] md:w-[200px] lg:w-[200px] xl:w-[300px] border border-gray-300 text-lg bg-gray-50 text-black outline-none
                 cursor-pointer rounded-md" onChange={(e)=>{setcountry_universty(e.target.value)}}  >
                    <option selected disabled className='max-md:text-md'>Countries of Universirty...</option>
                    {pays_data.map((pay) => (
                        <option key={pay.cca3} value={pay.name.common}>
                        {pay.name.common}
                        </option>
                    ))}
                </select>
                <button className='bg-[#41d049]  focus:outline-none shadow
                text-white  w-[80px] text-lg font-bold rounded-md' onClick={()=>{addeducation()}}>Add</button>
            </div>
        </div>:null}
            {data.length>0?
                <div className="relative overflow-x-auto shadow-md  my-2 border-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr className=''>
                            <th scope="col" className="pr-20 pl-4 py-3"> Speciality</th>
                            <th scope="col" className="pr-10  py-3">Year</th>
                            <th scope="col" className="px-6 py-3 text-[#41d049] cursor-pointer  text-end " onClick={()=>{setafiche(true)}}>Add New</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dt,e)=>{
                            return (<tr className="border-b bg-white group    hover:-translate-x-1 duration-300  delay-150 transition ease-in-out " key={e}>
                               <th scope="row" className="px-6 py-4 font-medium text-gray-500  ">
                                <p className='w-[400px] whitespace-nowrap overflow-hidden text-ellipsis' title= {dt.speciality}> {dt.speciality}</p>
                              </th>
                               <td className="px-1 py-3 text-gray-500 font-medium ">
                                {dt.year}
                              </td>
                              <td className=" py-2  text-end">
                              <button className="bg-[#41d049] w-[70px] text-white text-md font-bold py-1 rounded-md mx-2 invisible group-hover:visible "
                              onClick={()=>{delete_func(dt)}}>
                                delete
                              </button>
                            </td>
                        </tr>)

                        })}
                    </tbody>

                </table>
                </div>:null}
               
                
                
                
           
            </>
    )
}