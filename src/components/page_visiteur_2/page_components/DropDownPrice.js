
import { useState } from "react";
const DropDownPrice=()=>{
    const [Clicked,setClicked]=useState(false);
    return <div className="">
        <button className="w-auto h-[45px] ml-[10px] rounded border-[1px] border-gray-300 flex absolute hover:border-black" onClick={(Clicked===true)?()=>setClicked(false):()=>setClicked(true)}>
            <span className="mt-[7px] md:ml-7 ml-4">Budgets</span> 
            <img src="images/Arrow.png" alt="Arrow" className={`w-[25px] h-[20px] mt-[10px] ml-[10px] md:mr-7 mr-4 ${((Clicked===true)?'duration-100':'rotate-180 duration-100')}`}/>
        </button>
        <div className={`absolute w-auto h-auto bg-gray-50 p-5 rounded border-2 mt-[50px] z-10 ${(Clicked===true)?'':'hidden'}`}>
            <form>
                <div className="inline mx-5">
                    <label htmlFor="min">Min </label>
                    <input type="number" name="min" id="min" placeholder="min" className="w-[100px] h-[35px] border-2 rounded-md px-1"/>
                </div>
                <div className="inline">
                    <label htmlFor="max">Max </label>
                    <input type="number" name="max" id="max" placeholder="max" className="w-[100px] h-[35px] border-2 rounded-md px-1"/>
                </div>
                <div>
                    <button type="reset" className="text-slate-400 px-4 py-2 mx-2 my-5">Clear</button>
                    <button className="border-2 border-custom-blue px-4 py-2 rounded-md mx-2 my-5 text-white bg-custom-blue">Apply</button>
                </div>
            </form>
        </div>
    </div>

}
export default DropDownPrice;