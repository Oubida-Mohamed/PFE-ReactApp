import { useState } from "react";
const DropDownTime =()=>{
    const [Clicked,setClicked]=useState(false);
    const [Checked,setChecked]=useState();
    // console.log(Checked);
    return <div className="">
        <button className="w-auto md:h-[45px] h-[45px] rounded border-[1px] border-gray-300 flex absolute hover:border-black" onClick={(Clicked===true)?()=>setClicked(false):()=>setClicked(true)}>
            <span className="mt-[7px] md:ml-7 ml-4">Delevery time</span> 
            <img src="/images/Arrow.png" alt="Arrow" className={`w-[25px] h-[20px] mt-[10px] ml-[10px] mr-4 md:mr-7 ${((Clicked===true)?'duration-100':'rotate-180 duration-100')}`}/>
        </button>
        <div className={`absolute md:w-[190px] w-[165px] h-auto bg-gray-50 p-5 rounded border-2 mt-[50px] z-10 ${(Clicked===true)?'':'hidden'}`}>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><input type="radio" value='24h' name="delevery_time" id="24h" onClick={(e)=>setChecked(e.target.value)}/></td>
                            <td><label htmlFor="24h" className="">Express 24H</label></td>
                        </tr>
                        <tr>
                            <td><input type="radio" value='3d' name="delevery_time" id="3d" onClick={(e)=>setChecked(e.target.value)}/></td>
                            <td><label htmlFor="3d">Up to 3 days</label></td>
                        </tr>
                        <tr>
                            <td><input type="radio" value='7d' name="delevery_time" id="7d" onClick={(e)=>setChecked(e.target.value)}/></td>
                            <td><label htmlFor="7d">Up to 7 days</label></td>
                        </tr>
                        <tr>
                            <td><input type="radio" value='anytime' name="delevery_time" id="anytime" onChange={(e)=>setChecked(e.target.value)} defaultChecked={true}/></td>
                            <td><label htmlFor="anytime">Anytime</label></td>
                        </tr>
                    </tbody>
                </table>
                
                <div>
                    <button className="border-2 border-custom-blue px-4 py-2 rounded-md mx-2 my-5 text-white bg-custom-blue">Apply</button>
                </div>
            </form>
        </div>
    </div>
}
export default DropDownTime;