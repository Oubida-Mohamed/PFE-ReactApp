import React ,{useState} from "react"
import App from '../../App'
export const multiStepContext=React.createContext()
export default function StepContext(){
    const [step,setstep]=useState(1);
    const [vendData,setvendData]=useState({personnel_info:{fullname:"",description:"",picture:""},profesionel_info:{},
        profesonel_info:{skills:[],education:[{contry:"",universirty:"",title:"",speciality:"",year:""}]},
        certification:[{titre:"",year:""}]
    });
    const [finalData,setfinalData]=useState([]);
    return(
        <div>
        <multiStepContext.Provider value={{step,setstep,vendData,setvendData,finalData,setfinalData}}>
            <App/>
        </multiStepContext.Provider>
    </div> 
    )
}