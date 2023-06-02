import { useContext, useEffect, useState } from 'react';
import { multiStepContext } from './StepContext'
export default function Skills(){
    const { step,setstep, setvendData,vendData,setfinalData } = useContext(multiStepContext)
    const [skill,setskill]=useState("");
    const [level,setlevel]=useState("");
    const [data,setdata]=useState([]);
    const [data_update,setdata_update]=useState({titre:"",level:""});
    const [afiche,setafiche]=useState(true);
    const [updt,setupdt]=useState(false);

    const addskils=()=>{
        if(skill!="" && level!=""){
            const trv=data.find((dt)=>{return dt.titre==skill && dt.level==level})
            if(trv==undefined){
                const obj={"titre":skill,"level":level}
            vendData.profesonel_info.skills.push(obj)
            setdata(vendData.profesonel_info.skills)
            setdata_update()
            setafiche(!afiche)

            }
            
        }
    }
    const updtskils=()=>{
        // const dt_upd=data.find((dt)=>{return dt.titre==skill && dt.level==level})
        data.map((dt)=>{if(dt.titre==data_update.titre && dt.level==data_update.level){
            dt.titre=data_update.titre
            dt.level=data_update.level
            setdata_update()
            setafiche(!afiche)

        }

        })
        

    }
    console.log(data_update);
    return(<>{afiche==true ? updt==false?
                    <div className='flex justify-around '>
                <div className=" h-12 w-[400px] bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" Add your Skill..." onChange={(e)=>{setskill(e.target.value)}}                                    />
                </div>
                <select className="w-[200px] border border-gray-300 text-lg bg-gray-50 text-black outline-none cursor-pointer rounded-md"
                onChange={(e)=>{setlevel(e.target.value)}}>
                    <option selected disabled>Experience Level ...</option>
                    <option  defaultValue="Beginner">Beginner</option>
                    <option  defaultValue="intermediate">Intermediate</option>
                    <option  defaultValue="expert">Expert</option>
                </select>
                <button className='bg-[#41d049]  focus:outline-none shadow
                text-white  w-[100px] text-lg font-bold' onClick={()=>{addskils()}}>Add</button>
            </div>:
            <div className='flex justify-around '>
                <div className=" h-12 w-[400px] bg-gray-50">
                        <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                        bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                        transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                        placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" Add your Skill..." defaultValue={data_update.titre} onChange={(e)=>{setskill(e.target.value)}}                                    />
                </div>
                {/* <input type='text' defaultValue={"jjj"}/> */}
                <select className="w-[200px] border border-gray-300 text-lg bg-gray-50 text-black outline-none cursor-pointer rounded-md"
                onChange={(e)=>{setlevel(e.target.value)}} defaultValue={data_update.level} >
                    <option selected disabled>Experience Level ...</option>
                    <option  defaultValue="Beginner">Beginner</option>
                    <option  defaultValue="intermediate">Intermediate</option>
                    <option  defaultValue="expert">Expert</option>
                </select>
                <button className='bg-[#41d049]  focus:outline-none shadow
                text-white  w-[100px] text-lg font-bold' onClick={()=>{updtskils()}}>update</button>
            </div>:null}
                {data.length>0?
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">SKill</th><th scope="col" className="px-6 py-3"> Level</th>
                            <th scope="col" className="px-6 py-3 text-[#41d049] cursor-pointer " onClick={()=>{setafiche(true) ;setupdt(false)}}>Add New</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((sk,e)=>{
                            return (<tr className="border-b bg-white" key={e}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                            {sk.titre}
                            </th>
                            <td className="px-6 py-4 text-gray-500 font-medium">
                            {sk.level}
                            </td>
                            <td className="px-2 py-4">
                                <button className='bg-[#41d049] w-[90px] text-white  text-md font-bold py-1 rounded-md mx-2' 
                                    onClick={()=>{setdata(data.filter((d)=>{return d.titre!=sk.titre}))}}>delete</button>
                                    <button className='bg-[#41d049] w-[90px] text-white  text-md font-bold py-1 rounded-md' 
                                    onClick={()=>{setdata_update(data.find((d)=>{return d.titre==sk.titre}));setupdt(true); setafiche(true)}}>edite</button>
                            </td>
                        </tr>)

                        })}
                    </tbody>
                </table>
                </div>:null}
                </> 
        
    )
}