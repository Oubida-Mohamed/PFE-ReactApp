import "./Service.css";
import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useSelector } from "react-redux";
import Login from "../../login/Login";

const Service =(props) =>{
    const cookies = new Cookies();
    const service = props.service;
    const [dore,setdore] = useState(false);
    const cookieValue = cookies.get('jwt');
    const create = useSelector(e=>e.log);
    const [IsOpen, setIsOpen] = useState(false); 
    // console.log(cookieValue);
    const closeModal = () => {
        setIsOpen(false);
      };


    return <div className="w-[250px] h-[300px] xl:w-[300px] relative bg-white shadow-xl hover:shadow-2xl mx-1 rounded-lg my-3">
               <Login isOpen={IsOpen} setOpen={closeModal} log={create}/>
                <a href={`Services/${service.id}`} >
                    <img src="/images/Test3.jpg" alt="Service" className="w-[100%] h-[150px] rounded-t-lg" />
                </a>
                
                <div className="info_service px-4 w-[100%]">
                    <a href="/">
                        <div className="profil flex mt-[5px]">
                            <img src="/images/profil.jpeg" alt="eroor" className="w-[30px] h-[30px] rounded-full"/>
                            <span className="mt-[6px] mx-[10px]">{service.nomSeller}</span>
                        </div>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-[25px] h-[25px] left-[88%] top-[88%]" onClick={() => {(cookieValue !== undefined)?setdore(!dore):setIsOpen(true)}}
                        fill={dore ? "red" : "none"} viewBox="0 0 24 24" stroke={dore ? "red" : "gray"} enableBackground="" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                    <a href="/">
                        <p className="w-full mt-[5px]">{service.description}</p>
                        <div className="mt-[5px] flex">
                            <img src="/images/star.png" alt="error" className="w-[20px] h-[20px]"/> <span className="mt-[px] mx-[3px]"><span className="font-bold text-yellow-400">{service.AvgStars} </span>({service.nbOrders})</span>
                        </div>
                        <div className="font-bold">
                            <p>From <span>{service.from}</span> <span>{service.price}$</span></p>
                        </div>
                    </a>
                    
                </div>  
                
                
            </div>
}

export default Service;