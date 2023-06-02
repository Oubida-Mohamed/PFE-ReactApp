import { useContext, useState } from 'react';
import { multiStepContext } from './StepContext';
import Skills from './skills';
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
                    <tr className='w-full md:flex block md:mb-10 mb-5'><td className='w-[50%] text-lg md:text-xl text-gray-600 md:font-semibold md:mb-0 mb-1'>
                        skills<span className='text-red-500'>*</span></td>
                    <td className='w-[60%] border-2 p-2'>
                        <Skills/>
                        
            </td>
            </tr>
                    
                </table>
            
            </div>
           
        </div>
       
    )
}