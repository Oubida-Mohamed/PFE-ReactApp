import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import "./login.css";

const Googlelogin=()=>{
    useEffect(()=>{
        function Start(){
          gapi.client.init({
            client_id:clientId,
            scope:""
          })
        };
        gapi.load('client:auth2', Start);
      });
    const clientId='415454350805-mpi59gh2phak5sftm7fka57dssa5irdb.apps.googleusercontent.com';
    const onSuccess=(res)=>{
        console.log("Login Success", res.profileObj)
    }
    const onFailure=(res)=>{
        console.log("Login Failed", res)
    }
    return <div>
        <GoogleLogin className='GoogleLogin'
        clientId={clientId}
        buttonText='Continue with Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy='single_host_origin'
        isSignedIn={true}
        />
    </div>
}

export default Googlelogin;