import { useContext, useState } from 'react';
import { multiStepContext } from './StepContext';
import Skills from './skills';
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
                        <td className='lg:w-[60%] md:w-[70%] p-2 ml-[10%] md:ml-0'>
                            <Skills/></td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[20%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Education</td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[10%] md:ml-0'>
                                <Education/>
                            </td>
                    </tr>
                    <tr className='w-full flex justify-between md:flex-row flex-col  md:mb-10 mb-5'>
                        <td className='md:w-[40%] w-[20%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1 '>
                                Certification </td>
                            <td className='lg:w-[60%] md:w-[70%] p-2 ml-[10%] md:ml-0'>
                                <Education/>
                            </td>
                    </tr>

                    
                </table>
            
            </div>
           
        </div>
       
    )
}