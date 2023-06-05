import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import Facebooklogin from './Facebooklogin';
import Googlelogin from './GoogleLogin';

Modal.setAppElement('#root');
const Login=(props)=>{
    const Tab_SignIn = ["Sign in to your account", "Don't have an account?", "Join here", "Sign in"];
    const Tab_Join = ["Create a new account", "Already have an account?", "Sign in", "Create"];

    const [IsOpen,setIsOpen] = useState(false);
    const [create,setcreate] = useState(props.log);
    
    useEffect(()=>{
        setIsOpen(props.isOpen);
    },[props.isOpen]);
    const closeModal = () => {
        props.setOpen(false);
    };
    
    return <div>
        
    
        <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-black/75 py-20" >
        <div className="flex justify-center animate__animated animate__zoomIn">
        <div className="min-[870px]:flex hidden w-[400px] h-[550px]">
            <img src="images/login1.jpg" alt="login" className="w-full h-full rounded-l-lg"/>
        </div>
        <div className="min-[550px]:w-[450px] w-full h-[550px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white">
            <button onClick={closeModal} className='text-black'>
            <img src='images/croix.png' alt='coix icons' className='w-5 h-5 ml-[420px] mt-[5px]'/>
            </button>
            <form className="">
            <h1 className="mx-[50px] text-2xl font-bold">{!create?Tab_SignIn[0]:Tab_Join[0]}</h1>
            <p className="mx-[50px]">{!create?Tab_SignIn[1]:Tab_Join[1]} <a className='cursor-pointer' onClick={()=>{setcreate(!create)}}>{!create?Tab_SignIn[2]:Tab_Join[2]}</a> </p>

            <div className="w-full px-8">
                <div className="mb-4 mt-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="text" placeholder="Your email address"/>
                </div>
                <div className="mb-6 mt-6">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                    <input className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Your password"/>
                    <a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800" href="/">Forgot Password?</a>
                </div>
                <div className="flex w-full mt-8">
                    <button className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="button">{!create?Tab_SignIn[3]:Tab_Join[3]}</button>
                </div>
                </div>

                <div className="my-2 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">Or</div>
                </div>

                <div className="mt-2 grid space-y-4 flex justify-center items-center" >
                    <Googlelogin/>
                    <div className="relative flex items-center space-x-4 justify-center">
                        <Facebooklogin/>    
                        <img src="images/facebook.png" className="absolute left-9 w-5 mr-[100px]" alt="Facebook logo"/>
                    </div>
                </div>

            </form>
        </div>
        </div>
        
        </Modal>
    </div>
}

export default Login;