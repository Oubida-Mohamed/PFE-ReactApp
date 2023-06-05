
const ToggleButton=(props)=>{
    const handleChanged=(e)=>{
        props.event(e.target.checked);
    }
    // console.log(ButtonChecked);
    return <div className="">
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" className="sr-only peer" onChange={(e)=>handleChanged(e)}/>
                <div className="w-9 h-5 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute md:after:top-[1.5px] after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                <span className="ml-3 text-sm font-medium text-state-200 dark:text-gray-700">{props.label}</span>
            </label>
        </div>
}
export default ToggleButton;