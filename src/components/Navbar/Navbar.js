import React, { useEffect, useState } from 'react';
import 'animate.css';
import Login from '../login/Login';
import "../../assets/navbar.css"
import {navbar_detailservice,Links,menu} from '../../data';
import { useNavigate,Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar(props){
      let [scrolly, setscrolly] = useState();
        window.addEventListener('scroll',()=>{setscrolly(window.scrollY)})
      let [open, setOpen] = useState(false);
      let [search, setsearch] = useState(" ");
      const [heading, setHeading] = useState("");
      const [navbar_data,setnavbar_data]=useState([]);
      const [data,setdata]=useState();
      const [service_data,setservice_data]=useState();
      const [afficher_effet,setafficher_effet]=useState();
      const [x,setx]=useState(true)
      const [open_prf,setopen_prf]=useState(false)
      const dispatch=useDispatch()
      let {search2}=useParams()
      
      useEffect(()=>{
        const dat=async()=>{
         await fetch(`http://127.0.0.1:8000/api/Categories`).then(rep=>rep.json())
        .then(rep_data=>{dispatch({type:"modify_categorie",categorie:rep_data});setnavbar_data(rep_data)})
        .catch(error=>console.log(error))
        }
        dat();
        fetch(`http://127.0.0.1:8000/api/services`).then(rep=>rep.json())
        .then(rep_data=>{ dispatch({type:"modify_data",data:rep_data});setdata(rep_data)})
        .catch(error=>console.log(error))
        setsearch(search2)
        if(props.afiche){
          setafficher_effet(true)
        }else{
          setafficher_effet(false)
        }
      },[])
      function filter_search(){
        if(search!=""){
          const servs=[]
          data.filter((sd)=>{ 
            if(sd.tags.indexOf(search) >= 0) {
              servs.push(sd) 
              setservice_data(servs)
             }
          });
          dispatch({type:"modify_datafilter",data_filter:servs})
        }
        }

      // function filter_subcategorie(id){
      //   data.filter((fc)=>{
      //     if(fc.sub_categories_id==id){
      //       console.log(fc)
      //     }
      //   })

      // }
      const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
      const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
      const [create, setcreate] = useState(false);
      const openModalCreate = () => {
        setIsModalOpenCreate(true);
        setcreate(true);
        setIsModalOpenLogin(false);
      };
      const openModalLogin = () => {
        setIsModalOpenLogin(true);
        setcreate(false);
        setIsModalOpenCreate(false);
      };
      const closeModal = () => {
        setIsModalOpenCreate(false);
        setIsModalOpenLogin(false);
      };
// console.log(useSelector(df=>df.data_filter))
// console.log(useSelector(df=>df.data))
  return(<>
    <div className={`nav ${!props.detail_services?"fixed z-10":""}`} >
      <div className={`nav_content ${!afficher_effet ?"md:bg-white":scrolly>80?"md:bg-white":""}`}>
        <div className='partie1_nav'>
            {/* logo */}
          <div className='div_logo'>
                  <a href='/'>
                      <img src={`${!afficher_effet?"/images/Bdarija2.png": scrolly>80 | window.innerWidth<=786?"/images/Bdarija2.png":"/images/bdbll.png"}`}/>
                  </a>
          </div>
            {/* Chercher input*/}
          <div className='div_search'>
            <div className={`${open?"max-afficher max-md:w-52 max-md:mx-auto max-md:absolute max-md:top-[125px] duration-500":"max-md:hidden"} `}>
                <div className="relative w-full z-[11]">
                    <input type="search" id="location-search" className={`block p-2.5 w-full max-md:w-[95%] outline-none text-md text-gray-900
                       bg-gray-50 rounded-r-lg border-2  border-[#00B3FF] ${!afficher_effet?"afficher":scrolly>130 ?"afficher":"cacher"}`} 
                        placeholder="Search for any service.."  onChange={(e)=>{setsearch(e.target.value)}}  />
                    <a href={`/services/${search}`}><button type="submit" className={`absolute top-0 right-0 p-2 md:px-3 px-1  text-sm font-medium text-white bg-[#00B3FF]
                         rounded-r-lg border border-[#00B3FF] ${!afficher_effet?"afficher":scrolly>130 ?"afficher":"cacher"}`} 
                         onClick={filter_search}>
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
            {x==false?<ul className={`ul ${open ?'responsive_lien ':'absolute'}`}>
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
                          Sign in</a>
                          <Login isOpen={isModalOpenLogin} setOpen={closeModal} log={create}/>
                      </li>
                </ul> :<ul className={`ul ${open ?'responsive_lien ':'absolute'}`}>
                      <li className={`md:ml-5 md:my-0 my-2 w-fit md:text-[17px] text-md 
                          ${open ?'li_resp' : 'max-md:hidden'}`}>
                            <svg fill="gray" height="800px" width="800px" version="1.1" viewBox="0 0 458 458" className="w-6 h-6  cursor-pointer text-red-50"
                             stroke="gray" >
                              <g>
                                <g>
                                  <path d="M428,41.534H30c-16.569,0-30,13.431-30,30v252c0,16.568,13.432,30,30,30h132.1l43.942,52.243
                                    c5.7,6.777,14.103,10.69,22.959,10.69c8.856,0,17.258-3.912,22.959-10.69l43.942-52.243H428c16.568,0,30-13.432,30-30v-252
                                    C458,54.965,444.568,41.534,428,41.534z M323.916,281.534H82.854c-8.284,0-15-6.716-15-15s6.716-15,15-15h241.062
                                    c8.284,0,15,6.716,15,15S332.2,281.534,323.916,281.534z M67.854,198.755c0-8.284,6.716-15,15-15h185.103c8.284,0,15,6.716,15,15
                                    s-6.716,15-15,15H82.854C74.57,213.755,67.854,207.039,67.854,198.755z M375.146,145.974H82.854c-8.284,0-15-6.716-15-15
                                    s6.716-15,15-15h292.291c8.284,0,15,6.716,15,15C390.146,139.258,383.43,145.974,375.146,145.974z"/>
                                </g>
                              </g>
                            </svg>
                      </li>
                    <li className={`md:ml-5 md:my-0 my-2 w-fit md:text-[17px] text-md 
                          ${open ?'li_resp' : 'max-md:hidden'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6  cursor-pointer"
                          fill="none" viewBox="0 0 24 24" stroke="gray" enableBackground="" >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </li>
                     <li className={`md:ml-5 md:my-0 my-2 w-fit md:text-[17px] text-md 
                          ${open ?'li_resp' : 'max-md:hidden'}`}>
                        <a className={` inline-block w-[150px] whitespace-nowrap overflow-hidden text-ellipsis ${!afficher_effet ?"md:text-[#62646a] cursor-pointer":scrolly>80?"md:text-[#62646a]":"md:text-white"} hover:md:text-gray-400 duration-500 whitespace-nowrap cursor-pointer`}>
                            ayoub oubakkiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</a>
                          <Login isOpen={isModalOpenLogin} setOpen={closeModal} log={create}/>
                      </li>
                </ul>
                }
            </div>
            {/* login et creation compte */}
            <div className='div_signin' >
            {x==false?<a onClick={openModalCreate} className={`signin text-md bg-black text-white ${!afficher_effet ?"md:bg-black md:text-white":scrolly>80?"md:bg-black md:text-white":"md:bg-white md:text-black"}`}>
                  Join
                </a>:<div className=''>
            <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-8 align-middle border-none 
            lg:ml-6 mb-2 max-w-10-px " onClick={()=>{setopen_prf(!open_prf)}}/>
             {open_prf && <ul className='absolute t-[50px] p-4 w-36 shadow-md bg-white'>{menu.map((m)=>{ return <li key={m} 
             className='text-lg cursor-pointer rounded hover:bg-blue-100 px-2'><a href={m.link}>{m.name}</a></li>

            })}<li  className='text-lg cursor-pointer rounded hover:bg-blue-100 px-2' onClick={()=>{console.log("logout")}}>Logout</li>
            </ul>}</div>
         }
                <Login isOpen={isModalOpenCreate} setOpen={closeModal} log={create}/>
            </div>
        </div>
      </div>

      {/* les categories */}
      {navbar_data!=null?<div className={`bg-white hidden md:flex justify-center  lg:px-[5%] md:px-[5%]  border-b
 ${!afficher_effet?"afficher border-t":scrolly>130 ?"afficher  border-t":"cacher duration-500"}`}>
          <ul className={`ul_categories  ${open ?'hidden':'afficher '}`}>
              {navbar_data.map((link,i) => (
              <div className='h-fitt' key={i}>
                  {/* <SwiperSlide key={i} className='md:ml-[0%] '> */}
                <div key={link.label} className={`md:text-[#62646a] group hover:md:text-gray-400 whitespace-nowrap md:py-2  mr-10 md:text-[17px] 
                  text-md hover:border-b-4 hover:border-[#00B3FF] cursor-pointer
   ${open ?'max-md:w-52 max-md:px-5  hover:max-md:bg-white  max-md:py-3 hover hover:max-md:text-[#62646a] max-md:font-semibold text-white max-md:cursor-pointer' : 'max-md:hidden'}`}
                  onClick={()=>{ 
                    heading !== link.label ? setHeading(link.label) : setHeading("") 
                  }}>
                    {link.label}
                    <div className={`absolute top-[9rem]  ${link.id>=6?"right-[15rem]" :""} hidden group-hover:block  hover:block`}>
                      <div className=" py-0 px-5 grid grid-rows-2 grid-flow-col gap-x-5 gap-y-0 bg-white border ">
                        {link.headers.map((mysublinks,i2) => (
                          <div key={i2}  className='h-fit'>
                            <h1 className="text-lg font-semibold text-[#5f5f5f] w-[180px] whitespace-nowrap overflow-hidden text-ellipsis"
                             titre={mysublinks.label_header}>
                              {mysublinks.label_header}
                            </h1>
                            {mysublinks.subcategories.map((slink,i3) => (
                              <li className="text-[1rem] text-[#969696] my-2.5 ml-3 " key={i3} onClick={()=>{dispatch({type:"modify_categorie",categorie:slink.id});}} >
                                <a href={`/services/${link.label}/${mysublinks.label_header}/${slink.label}/${slink.id}`} className="hover:text-primary" >{slink.label} </a>
                              </li>
                            ))}
                        </div>
                        ))}
                      </div>
                    </div>
                </div>        
            </div>
            ))}
          </ul> 
      </div>:null}
       {/* nav detail_services */}
       {props.detail_services?<div className={`${props.detail_services && scrolly>130 ?"div_nav_detail_service1 ":""} nav_detail_service2 
          ${!afficher_effet?"afficher border-t":scrolly>130 ?"afficher border-t":"cacher duration-500"}`}>
          <ul className={`ul_categories  ${open ?'hidden':'afficher '}`}>
              {navbar_detailservice.map((link) => (
                <li key={link.name} className={`md:text-[#797a80] group hover:md:text-gray-400 whitespace-nowrap md:py-2  mr-10 md:text-[17px] text-md cursor-pointer font-semibold
                  ${open ?'max-md:w-52 max-md:px-5  hover:max-md:bg-white  max-md:py-3 hover hover:max-md:text-[#62646a] max-md:font-semibold text-white max-md:cursor-pointer' : 'max-md:hidden'}`}
                  onClick={()=>{heading !== link.name ? setHeading(link.name) : setHeading("") }}><a href={`#${link.lien}`}>  {link.name}</a>
                  </li>
                  ))}
            </ul>
            </div>:null

       }
      

  </div>
  </>
)}