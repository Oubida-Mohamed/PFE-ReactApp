import React, { useState, useEffect,useContext } from 'react';
import { multiStepContext } from './StepContext'
export default function Certification(){
    const { step,setstep, setvendData,vendData,setfinalData } = useContext(multiStepContext)
    const [affiche,setaffiche]=useState(true)
    const [certificat,setcertificat]=useState("")
    const [from_certified,setfrom_certified]=useState("")
    const [year, setyear] = useState("");
    const [data,setdata]=useState([]);

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
    const addcertificat=()=>{
        if(certificat!="" && from_certified!=""&& year!=""){
            const trv=data.find((dt)=>{return dt.certificat==certificat && dt.from_certified==from_certified && dt.year==year })
            if(trv==undefined){
                const obj={"certificat":certificat,"from_certified":from_certified,"year":year}
                vendData.profesonel_info.certification.push(obj)
                setdata(vendData.profesonel_info.certification)
                setaffiche(false)
            } 
        }
    }
    const delete_func=(data_delete)=>{
        if (data.length==1){
            setaffiche(true)
        }
        console.log(data.length)

        const datarest=vendData.profesonel_info.certification.filter((dt)=>{return dt.certificat!=data_delete.certificat && 
            dt.from_certified!=data_delete.from_certified && dt.year!=data_delete.year})
        vendData.profesonel_info.certification=datarest
        setdata(vendData.profesonel_info.certification)

    }
    
    return(<>
        {affiche==true?<div className='border-2 p-2.5'>
          <div className='flex  justify-around mb-2  '>
                <div className=" h-12 md:w-[200px] lg:w-[200px] xl:w-[300px]  bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Certificate ..." onChange={(e)=>{setcertificat(e.target.value)}}/>
                </div>
                <div className=" h-12 md:w-[200px] lg:w-[200px] xl:w-[300px] bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder="Certified From ..."  onChange={(e)=>{setfrom_certified(e.target.value)}} />
                </div>
                <select className="w-[80px] border border-gray-300 text-lg bg-gray-50 text-black outline-none cursor-pointer rounded-md"
                    onChange={(e)=>{setyear(e.target.value)}}>
                  <option selected disabled>Year..</option>
                  {yearOptions} 
                </select>
                
            </div>
            <div className='flex justify-end mx-5'>
                <button className='bg-[#41d049]  focus:outline-none shadow
                text-white w-[80px] text-lg font-bold rounded-md py-2.5' onClick={()=>{addcertificat()}}>Add</button>
            </div>
        </div>:null}
            {data.length>0?
                <div className="relative overflow-x-auto shadow-md  my-2 border-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr className=''>
                            <th scope="col" className="pr-20 pl-4 py-3"> certificat</th>
                            <th scope="col" className="pr-10  py-3">Year</th>
                            <th scope="col" className="px-6 py-3 text-[#41d049] cursor-pointer  text-end  onClick={()=>{setaffiche(true)}} " onClick={()=>{setaffiche(true)}}>Add New</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {data.map((dt,e)=>{
                            return (<tr className="border-b bg-white group    hover:-translate-x-1 duration-300  delay-150 transition ease-in-out " key={e}>
                               <th scope="row" className="px-6 py-4 font-medium text-gray-500  ">
                                <p className='w-[400px] whitespace-nowrap overflow-hidden text-ellipsis' title= {dt.certificat}> {dt.certificat}</p>
                              </th>
                               <td className="px-1 py-3 text-gray-500 font-medium ">
                                {dt.year}
                              </td>
                              <td className=" py-2  text-end">
                              <button className="bg-[#41d049] w-[70px] text-white text-md font-bold py-1 rounded-md mx-2 invisible group-hover:visible "
                              onClick={()=>{delete_func(dt);}}>
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

