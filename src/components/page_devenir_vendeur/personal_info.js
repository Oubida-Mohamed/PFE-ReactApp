import { useContext, useState } from 'react';
import { multiStepContext } from './StepContext'

export default function Personal_info(){
    const { step,setstep, setvendData,vendData,setfinalData,finalData} = useContext(multiStepContext)
    const [description,setdescription]=useState("")
    const [fullname,setfullname]=useState("")
    const [picture,setpicture]=useState("")

    function Personal_data(){
        if(description.length>150 && fullname!=""){
            vendData.personnel_info.fullname=fullname;
            vendData.personnel_info.description=description
            vendData.personnel_info.picture=picture
            setstep(step+1)

        }
    }

    return(<div className='lg:mx-[4%] xl:mx-[12%] mx-[1%]'>
            <div className='py-8 border-b-2'> 
                <h1 className='text-[2rem] font-bold text-[#747474]'>Personal info</h1>
                <p className='text-[#969696] font-semibold mt-3'>Tell us a bit about yourself. This information will appear on your <br/>
                public profile, so that potential buyers can get to know you better.</p>
            </div>
        <div className='mx-[1%] md:mt-5'>
            <table  className='w-full md:my-10 my-5 '>
                {/* full Name */}
                <tr className='md:flex block md:mb-10 mb-5 w-full'><td className='w-40% block md:mr-[10%] lg:mr-[20%] xl:mr-[30%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1'> Full Name<span className='text-red-500'>*</span></td>
                    <td className='w-60%'>
                        <div className="relative h-12 w-full min-w-[400px]">
                            <input className="peer h-full w-full rounded-[7px] border border-gray-300
                            bg-transparent px-5 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
                            transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                            placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                            focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            onChange={(e)=>{setfullname(e.target.value)}}
                            />
                            <label className="text-gray-400  before:content[' '] after:content[' '] pointer-events-none absolute left-0 
                            -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 
                            transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block
                            before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200
                            before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block 
                            after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
                            after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] 
                            peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent 
                            peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight
                            peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 
                            peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent 
                            peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Full Name
                            </label>

                        </div>
                        
                    </td>
                </tr>
                {/* profile picture */}
                <tr className='min-[650px]:flex block  md:mb-10 mb-5'><td className='block md:mr-[10%] lg:mr-[20%] xl:mr-[28%] text-lg md:text-xl md:font-semibold text-gray-600 md:mb-0 mb-1'>Profil Picture<span className='text-red-500'>*</span>
                {/* <p className='text-[#969696] text-[10px]  mt-3 '>Add a profile picture of yourself so customers <br/> will know exactly who they’ll be working with..</p>*/}</td> 
                    <td><div className="flex items-center justify-center w-full ">
                        <label className="flex flex-col items-center justify-center w-[150px] h-[9rem] border-gray-300   rounded-[60%] cursor-pointer
                            bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-200 dark:border-gray-600  photo">
                            <input id="dropzone-file" type="file" className="hidden"  onChange={(e)=>{setpicture(e.target.value)}}/>
                        </label>
                    </div></td>
                </tr>
                {/* description */}
                <tr className=' md:mb-10 mb-5 md:flex block'><td className='block  md:mr-[10%] lg:mr-[20%] xl:mr-[29%]  text-lg md:text-xl md:font-semibold text-gray-600 md:mb-0 mb-1'> Description <span className='text-red-500'>*</span></td>
                    <td><div className="">
                        <div className="relative w-full min-w-[580px] lg:min-w-[700px] ">
                            <textarea 
                            className="peer h-full min-h-[140px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-gray-300 bg-transparent px-3 py-2.5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline "
                            placeholder=" Share a bit about your work experience"
                            onChange={(e)=>{setdescription(e.target.value)}}
                             maxLength={600}></textarea>
                        </div>
                        </div><div className='flex justify-between text-gray-400'>
                            {description.length==""?<label >min 150 characters</label>:description.length<150?
                            <label className='text-red-500'>Please enter at least 150 characters</label>:
                            <label></label>}
                            <label><span>{description.length} </span>/600</label></div>
                        </td>
                    </tr>
                    <tr className='md:mb-10 mb-5  block'>
                        <td></td>
                        <td className=" flex justify-center md:justify-end">
                            <button className="bg-[#41d049] hover:bg-[#41d049] text-white  text-lg font-bold py-2 px-10 border border-[#41d049] rounded  "
                            onClick={()=>{Personal_data()}}>
                                Continue
                            </button>
                        </td>
                    </tr>
            </table>
            
            
        </div>
           
        </div>

    )
}