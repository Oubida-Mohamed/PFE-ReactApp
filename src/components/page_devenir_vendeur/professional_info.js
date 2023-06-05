import { useContext, useState } from 'react';
import { multiStepContext } from './StepContext';
import Skills from './skills';
import Certification from './certification'
import Education from './education'
export default function Professional_info(){
    const { step,setstep, setvendData,vendData,setfinalData } = useContext(multiStepContext)

    return(<div className='lg:mx-[4%] xl:mx-[12%] mx-[1%] '>
            <div className='py-8 border-b-2'> 
                <h1 className='text-[2rem] font-bold text-[#747474]'>Professional Info</h1>
                <p className='text-[#969696] font-semibold mt-3'>This is your time to shine. 
                Let potential buyers know what you do <br/> best and how you gained your skills, certifications and<br/> experience.</p>
            </div>
            
            <div className='mx-[1%] md:mt-5'>
                <table className='w-full'>
                    <tr className='w-full flex justify-between  md:flex-row flex-col md:mb-10 mb-5 mt-5 md:mt-0'>
                        <td className=' w-[20%]  md:w-[40%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1'>
                        skills<span className='text-red-500'>*</span></td>
                        <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                            <Skills/></td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Education</td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                                <Education/>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Certification </td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                                <Certification/>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5 '>
                        <td className='md:w-[40%] w-[100%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                            Personal Website </td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[5%] md:ml-0'>
                            <div className=" h-12 md:w-full bg-gray-50">
                                <input className="peer h-full w-full rounded-[7px] border border-gray-300  text-md
                                bg-transparent px-2 py-2.5 font-sans  font-semibold text-blue-gray-700 outline outline-0 
                                transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 
                                focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" Provide a link to your own professional website..." />
                            </div>
                            </td>
                    </tr>
                    <tr className='md:mb-10 mb-5  block'>
                        <td></td>
                        <td className=" flex justify-end">
                            <button className="bg-[#41d049] hover:bg-[#41d049] text-white  text-lg font-bold py-2 px-10 border border-[#41d049] rounded  "
                            >
                                Continue
                            </button>
                        </td>
                    </tr>

                    
                </table>
            
            </div>
           
        </div>
       
    )
}