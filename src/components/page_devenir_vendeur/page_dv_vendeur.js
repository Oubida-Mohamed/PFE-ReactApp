import { useContext, useState } from 'react';
import { multiStepContext } from './StepContext'

import {Stepper,StepLabel,Step} from '@material-ui/core'
import "../../assets/page_dv_vend.css" 

import Personal_info from './personal_info';
import Professional_info from './professional_info'
import Linked_accounts from './linked_accounts'
import Accounts_security from './accounts-security'

export default function Page_dv_Vendeur(){

  const {step, setvendData,setfinalData } = useContext(multiStepContext)
  let [scrolly, setscrolly] = useState();
  window.addEventListener('scroll',()=>{setscrolly(window.scrollY)})
  function showStep(step){
    switch(step){
      case 1:
        return <Personal_info />
      case 2:
        return   <Professional_info/> 
      case 3:
        return <Linked_accounts />
      case 4:
        return <Accounts_security />
    }
  }
    return(
        <>
        <div className={`w-full top-0 left-0 border-b-2 lg:px-[4%] xl:px-[12%] md:bg-white`} >
              {/* logo */}
              <div className='md:w-[17%] md:ml-[2%] lg:ml-0 xl:w-[13%] xl:h-[100px] w-[150px] md:m-0 m-auto'>
                      <a href='/' className='cursor-pointer '>
                          <img src="./images/Bdarija2.png"/>
                      </a>
              </div>
          </div>
          <div>
          

        <Stepper orientation='horizontal' activeStep={step-1} className=' steper lg:mx-[4%] xl:mx-[12%] border-b-2 '>
        <Step >
          <StepLabel >Personal Info</StepLabel>
        </Step>
        <Step>
          <StepLabel> Professional Info</StepLabel>
        </Step>
        <Step>
          <StepLabel> Linked Accounts</StepLabel>
        </Step>
        <Step>
          <StepLabel>  Accounts Security</StepLabel>
        </Step>
      </Stepper>
      <div className='progressbar  visible md:hidden'>
          <div style={{ width: step - 1 == 0 ? "25%" : step - 1 == 1 ? "50%" : step - 1 == 2 ? "75%" : "100" }}></div>
        </div>
      </div>
      {showStep(step) }
    
        </>
    )
}