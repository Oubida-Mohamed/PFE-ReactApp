import { GoogleLogin ,GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import CryptoJS from 'crypto-js';
import Cookies from 'universal-cookie';
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Googlelogin=()=>{
  
  const cookies = new Cookies();
  const [IsOpen,setIsOpen] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');
    const create = useSelector(e=>e.login); 
    const Navigate = useNavigate();
    
    const closeModal = () => {
      setIsOpen(false);
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
        }).then(res=>res.json()).then(resdata=>cookies.set('jwt', resdata.token));
        // setIsOpen(false);
        return Navigate('/services');
    };

    const login = async (email)=>{
      await fetch('http://localhost:8000/api/loginGoogle', 
        {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          credentials:'include',
          body: JSON.stringify({
              email,
          })
        }
      ).then(res=>res.json()).then(resdata=>cookies.set('jwt', resdata.token));
      return Navigate('/services');
    };
    const hashPassword = (pass) => {
      const hash = CryptoJS.MD5(pass).toString();
      setPass(hash);
    };
    useEffect(()=>{
        function Start(){
          gapi.client.init({
            client_id:clientId,
            scope:"",
          },[]);
        };
        gapi.load('client:auth2', Start);
      });

    const clientId='415454350805-mpi59gh2phak5sftm7fka57dssa5irdb.apps.googleusercontent.com';
    const onSuccess= (res)=>{
        console.log("Login Success", res.profileObj);
        setName(res.profileObj.name);
        setEmail(res.profileObj.email);
        if(create){
          setIsOpen(true);
        }else{
          login(res.profileObj.email);
        }
        
    }
    const onFailure=(res)=>{
        console.log("Login Failed", res)
    }
    
    // const onLogout =()=>{
    //   console.log('Logout with success');
    // }
    
    return <div>
      <Modal isOpen={IsOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal" className="justify-centerw-full h-full bg-[rgba(0,0,0,.65)] pt-[148px] pb-[110px] z-[999]">
        <div className="w-[250px] h-[150px] justify-center animate__animated animate__zoomIn bg-white rounded-lg mx-[600px] my-[100px]">
          <div className="mb-4 mt-6 ">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Password" onChange={(e)=>hashPassword(e.target.value)} />
          </div>
          <div className="flex mt-6">
            <button className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded h-10" type="button" onClick={register}>Submit</button>
          </div> 
        </div>
        
      </Modal>

        <GoogleLogin className='GoogleLogin'
        clientId={clientId}
        buttonText='Continue with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        // cookiePolicy='single_host_origin'
        isSignedIn={false}
        />
        {/* <GoogleLogout clientId={clientId} onLogoutSuccess={onLogout} /> */}
    </div>
}

export default Googlelogin;