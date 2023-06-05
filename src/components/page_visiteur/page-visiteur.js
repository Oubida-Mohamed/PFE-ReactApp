import React, { useRef, useState } from "react";
// css
import "../../assets/page1.css" 
// components
import Navbar from "../Navbar/Navbar";
import Avantage_fiver from "./avantage_fver";
import SubCategorie from "./SubCategorie";
import Footer from "./footer";
// data
import {populaire_serv,avancer_entreprise,avntg} from "../../data"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Page_visiteur(){
    // swiper temps 
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;}

    return(<>
            {/* nav de la page */}
            <Navbar afiche={true}/>
            {/* image accueil */}
            <div className="slide"><img src="images/img2.jpeg" className="img_slider" /></div>  
            {/* section services populaires */}
            <section  className="2xl:mx-[12%] xl:mx-[5%] lg:mx-[2%] mt-10">
                <h1 className="md:text-[30px] text-[30px] lg:text-[32px] font-bold text-center ">Populaire Services</h1>
                <div className="flex mt-8 ">
                <Swiper  slidesPerView={4} spaceBetween={35} freeMode={true} 
                    autoplay={{delay: 4000,disableOnInteraction: false}}  navigation={false} modules={[Autoplay, Pagination, Navigation]}
                    pagination={{clickable: true}} 
                    breakpoints={{
                        0: {slidesPerView: 1, spaceBetween: 10,},480: {slidesPerView: 2, spaceBetween: 15},
                        768: {slidesPerView: 3,spaceBetween: 20},1024: { slidesPerView: 3,spaceBetween: 15},
                      1100: { slidesPerView: 3,spaceBetween: 10,},1280: {slidesPerView: 4, spaceBetween: 20,},
                      }}
                    className="mySwiper">
                    {populaire_serv.map((popserv,i1)=>{return(
                            <SwiperSlide key={i1}><SubCategorie  service={popserv}/></SwiperSlide>)
                        })
                    }
                   
                </Swiper>
                </div>
            </section>
             {/* section avantages de notre site */}
            <section  className="bg-[#ffffffb1] lg:mx-[4%] xl:mx-[12%] max-[981px]:mx-[3%] max-md:mx-[1%] mt-10">
                <h1 className="md:text-[30px] text-[20px] lg:text-[32px] font-bold text-center ">How do we guarantee your rights and the quality of your business ?</h1>
                <div className="border-2 border-[#00B3FF]  h-auto py-5  grid min-[981px]:grid-cols-3 
                    md:gap-6 gap-0 grid-cols-2 place-items-center mt-8	">
                    {avntg.map((avnt,i2)=>{return(
                        <Avantage_fiver key={i2} avantage={avnt}/>)
                        })
                    }
                </div>
            </section>
            {/* section Comment notre site vous aide à faire avancer votre entreprise */}
            <section  className="bg-[#ffffffb1] 2xl:mx-[12%] xl:mx-[5%] lg:mx-[2%] mt-10">
                <h1 className="md:text-[30px] text-[20px] lg:text-[32px] font-bold text-center">How our site helps you get your work done</h1>
                {/* <div className="grid xl:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-5 mt-8 place-items-center">
                    {avancer_entreprise.map((popserv,i)=>{return(
                            <SubCategorie key={i} service={popserv}/>)
                            })
                    }
                </div> */}
                <div className="mt-8">
                <Swiper  slidesPerView={4} spaceBetween={35} freeMode={true} 
                    autoplay={{delay: 4000,disableOnInteraction: false}}  navigation={false} modules={[Autoplay,Pagination, Navigation]}
                    pagination={{clickable: true}} 
                    breakpoints={{
                        0: {slidesPerView: 1, spaceBetween: 10,},480: {slidesPerView: 2, spaceBetween: 15},
                        768: {slidesPerView: 3,spaceBetween: 20},1024: { slidesPerView: 3,spaceBetween: 15},
                      1100: { slidesPerView: 3,spaceBetween: 10,},1280: {slidesPerView: 4, spaceBetween: 20,},
                      }}
                    className="mySwiper">
                    {avancer_entreprise.map((popserv,i3)=>{return(
                            <SwiperSlide key={i3}><SubCategorie key={i3} service={popserv}/></SwiperSlide>)
                            })
                    }
                    </Swiper>
                </div>
            </section>
             {/* Footer */}
            <Footer/>
    </>
    )
}