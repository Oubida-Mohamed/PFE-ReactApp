import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from 'react-redux';
import Facebooklogin from './Facebooklogin';
import Googlelogin from './GoogleLogin';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root');


const Login=(props)=>{
    const Navigate = useNavigate();
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const Tab_SignIn = ["Sign in to your account", "Don't have an account?", "Join here", "Sign in"];
    const Tab_Join = ["Create a new account", "Already have an account?", "Sign in", "Create"];
    const [IsOpen,setIsOpen] = useState(false);
    const create = useSelector(e=>e.login); 
    useEffect(()=>{
        setIsOpen(props.isOpen);
    },[props.isOpen]);
    const closeModal = () => {
        props.setOpen(false);
    };

    //UseStates
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    // const [Data, setData] = useState();

    const hashPassword = (pass) => {
      const hash = CryptoJS.MD5(pass).toString();
      setPass(hash); 
    };
    
    const user = async ()=>{
        await fetch('http://localhost:8000/api/user').then(res=>res.json()).then(data=>console.log(data));
    }
    
      
    const register = async ()=>{
        await fetch('http://localhost:8000/api/register', 
          {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include',
            body: JSON.stringify({
                name,
                email,
                password
            })
          }
        ).then(res=>res.json())
        .then(resdata=>cookies.set('jwt', resdata.token));
        return Navigate('/');
      }
      const login = async ()=>{
        await fetch('http://localhost:8000/api/login', 
          {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include',
            body: JSON.stringify({
                email,
                password
            })
          }
        ).then(res=>res.json())
        .then(resdata=>cookies.set('jwt', resdata.token));
        return Navigate('/services');
        
      }
    //   const cookieValue = cookies.get('jwt');

    return <div>
        <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="w-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]" >
        <div className="flex justify-center animate__animated animate__zoomIn">
        <div className="min-[870px]:flex hidden w-[400px] h-[560px]">
            <img src="/images/login1.jpg" alt="login" className="w-full h-full rounded-l-lg"/>
        </div>
        <div className="min-[550px]:w-[450px] w-full h-[560px] min-[870px]:rounded-r-lg max-[870px]:rounded-lg bg-white">
            <button onClick={closeModal} className='w-5 h-5 ml-[420px] mt-[5px]'>
                <img src='/images/croix.png' alt='coix icons' className='w-full h-full'/>
            </button>
            <form className="">
            <h1 className="mx-[50px] text-2xl font-bold">{!create?Tab_SignIn[0]:Tab_Join[0]}</h1>
            <p className="mx-[50px]">{!create?Tab_SignIn[1]:Tab_Join[1]} <a className='cursor-pointer' onClick={()=>{dispatch({type:'login',log:!create});}}>{!create?Tab_SignIn[2]:Tab_Join[2]}</a> </p>

            <div className="w-full px-8">
                {create?<div className={`${create?'mb-1 mt-2':'mb-4 mt-6'}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Name</label>
                    <input className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="name" type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
                </div>:''}
                <div className={`${create?'mb-1 mt-2':'mb-4 mt-6'}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="email" placeholder="Your email address" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className={`${create?'mb-1 mt-2':'mb-4 mt-6'}`}>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                    <input className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Your password" onChange={(e)=>hashPassword(e.target.value)} />
                    {!create?<a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800" href="/">Forgot Password?</a>:''}
                </div>
                <div className="flex w-full mt-6">
                    <button className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="button" onClick={create?register:login}>{!create?Tab_SignIn[3]:Tab_Join[3]}</button>
                </div>
                </div>

                <div className="my-2 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">Or</div>
                </div>

                <div className="mt-2 grid space-y-4 flex justify-center items-center" >
                    <Googlelogin />
                    <div className="relative flex items-center space-x-4 justify-center font-semibold">
                        <Facebooklogin />    
                        <img src="/images/facebook.png" className="absolute left-9 w-5 mr-[100px]" alt="Facebook logo" />
                    </div>
                </div>
            </form>
        </div>
        </div>
        
        </Modal>
    </div>
}

export default Login;