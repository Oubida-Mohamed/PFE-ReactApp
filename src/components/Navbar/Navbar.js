import React, { useEffect, useState } from 'react';
import 'animate.css';
import Login from '../login/Login';
import "../../assets/navbar.css"
import { Links2 } from '../../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Navbar(props){
  let Links = [
      { name: "Home", link: "/" },
      { name: "Become a Seller", link: "/seller" }];

      let [scrolly, setscrolly] = useState();
      window.addEventListener('scroll',()=>{setscrolly(window.scrollY)})
      let [open, setOpen] = useState(false);
      let [search, setsearch] = useState("");
      const [heading, setHeading] = useState("");
      const [afficher_effet,setafficher_effet]=useState()
      // const [nbr_afiche_lien_nav,setnbr_afiche_lien_nav]=useState()
      // const [nbr_afiche_categoris,setnbr_afiche_categoris]=useState()
      useEffect(()=>{
        if(props.afiche){
          setafficher_effet(true)
          // setnbr_afiche_lien_nav(80)
          // setnbr_afiche_categoris(130)
        }else{
          setafficher_effet(false)
          // setnbr_afiche_lien_nav(-100)
          // setnbr_afiche_categoris(-100)
          // setscrolly(0)
        }
      })

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [create, setcreate] = useState(false);

      const openModalCreate = () => {
        setIsModalOpen(true);
        setcreate(true);
      };
      const openModalLogin = () => {
        setIsModalOpen(true);
        setcreate(false);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return(<>
    <div className={`nav relative`} >
      <div className={`nav_content ${!afficher_effet ?"md:bg-white":scrolly>80?"md:bg-white":""}`}>
        <div className='partie1_nav'>
            {/* logo */}
          <div className='div_logo'>
                  <a href='/'>
                      <img src={`${!afficher_effet?"./images/Bdarija2.png": scrolly>80 | window.innerWidth<=786?"./images/Bdarija2.png":"./images/bdbll.png"}`}/>
                  </a>
          </div>
            {/* Chercher input*/}
          <div className='div_search'>
            <div className={`${open?"max-afficher max-md:w-52 max-md:mx-auto max-md:absolute max-md:top-[125px] duration-500":"max-md:hidden"} `}>
                <div className="relative w-full z-[11]">
                    <input type="search" id="location-search" className={`block p-2.5 w-full max-md:w-[95%] outline-none text-md text-gray-900
                       bg-gray-50 rounded-r-lg border-2  border-[#00B3FF] ${!afficher_effet?"afficher":scrolly>130 ?"afficher":"cacher"}`} 
                        placeholder="Search for any service.."  onChange={(e)=>{setsearch(e.target.value)}} />
                    <a href="/services"><button type="submit" className={`absolute top-0 right-0 p-2 md:px-3 px-1  text-sm font-medium text-white bg-[#00B3FF]
                         rounded-r-lg border border-[#00B3FF] ${!afficher_effet?"afficher":scrolly>130 ?"afficher":"cacher"}`}>
                        <svg aria-hidden="true" className="w-6 h-7 text-white"   fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                    </button></a>
                </div>
            </div>
          </div>
        </div>
        
         <div className="partie2_nav" onClick={() => setOpen(!open)}>
            <div className='slider_resp_nav' >
                <ion-icon name={open ? 'close' : 'menu'} ></ion-icon>
            </div>
            {/* les liens */}
            <div className="flex md:items-center h-[45px]">
                <ul className={`ul ${open ?'responsive_lien ':'absolute'}`}>
                    {Links.map((link) => (
                      <li key={link.name} className={`md:ml-5 md:my-0 my-2 w-fit md:text-[17px] text-md 
                          ${open ?'li_resp' : 'max-md:hidden'}`}>
                          <a href={link.link} className={`${!afficher_effet ?"md:text-[#62646a]":scrolly>80?"md:text-[#62646a]":"md:text-white"} hover:md:text-gray-400 duration-500 whitespace-nowrap`}>
                          {link.name}</a>
                      </li> ))
                    }
                     <li className={`md:ml-5 md:my-0 my-2 w-fit md:text-[17px] text-md 
                          ${open ?'li_resp' : 'max-md:hidden'}`}>
                          <a onClick={openModalLogin} className={`${!afficher_effet ?"md:text-[#62646a] cursor-pointer":scrolly>80?"md:text-[#62646a]":"md:text-white"} hover:md:text-gray-400 duration-500 whitespace-nowrap cursor-pointer`}>
                          Sign in</a><Login isOpen={isModalOpen} setOpen={closeModal} log={create}/>
                      </li>
                </ul> 
            </div>
            {/* login et creation compte */}
            <div className='div_signin' >
                <a onClick={openModalCreate} className={`signin text-md bg-black text-white ${!afficher_effet ?"md:bg-black md:text-white":scrolly>80?"md:bg-black md:text-white":"md:bg-white md:text-black"}`}>
                  Join
                </a>
                <Login isOpen={isModalOpen} setOpen={closeModal} log={create}/>
            </div>
        </div>
      </div>

      {/* les categories */}
      <div className={`div_categories bg-white hidden md:flex justify-center  lg:pl-[15%] lg:pr-[12%] md:px-[5%]  border-b
 ${!afficher_effet?"afficher border-t":scrolly>130 ?"afficher  border-t":"cacher duration-500"}`}>
          <ul className={`ul_categories  ${open ?'hidden':'afficher '}`}>
              {Links2.map((link) => (
              <div>
                  {/* <SwiperSlide key={i} className='md:ml-[0%] '> */}
                <li key={link.name} className={`md:text-[#62646a] group hover:md:text-gray-400  whitespace-nowrap md:py-2  mr-10 md:text-[17px] 
                  text-md hover:border-b-4 hover:border-[#00B3FF] cursor-pointer
   ${open ?'max-md:w-52 max-md:px-5  hover:max-md:bg-white  max-md:py-3 hover hover:max-md:text-[#62646a] max-md:font-semibold text-white max-md:cursor-pointer' : 'max-md:hidden'}`}
                  onClick={()=>{
                    heading !== link.name ? setHeading(link.name) : setHeading("") 
                  }}>
                    {link.name}
                    <div className='absolute top-[9rem] hidden group-hover:block  hover:block'>
                      <div className="bg-white py-5 px-5 grid grid-rows-2 grid-flow-col gap-x-20 gap-y-5 ">
                        {link.sublinks.map((mysublinks,i2) => (
                          <div key={i2}>
                            <h1 className="text-lg font-semibold text-[#5f5f5f]">
                              {mysublinks.Head}
                            </h1>
                            {mysublinks.sublink.map((slink,i3) => (
                              <li className="text-[1rem] text-[#969696] my-2.5 ml-3 " key={i3} >
                                <a href={slink.link} className="hover:text-primary">{slink.name} </a>
                              </li>
                            ))}
                        </div>
                        ))}
                      </div>
                    </div>
                </li>        
            </div>
            ))}
          </ul> 
      </div>
  </div>
  </>
)}