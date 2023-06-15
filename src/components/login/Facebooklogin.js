import FacebookLogin from 'react-facebook-login';
import "./login.css";

const Facebooklogin=()=>{
    const app_id="3454279754812391";
    const responseFacebook=(res)=>{
        console.log("login result", res );
    }

    return <div>
        <FacebookLogin 
        
        appId={app_id}
        autoLoad={false}
        fields="name,email"
        callback={responseFacebook}
        cssClass="FacebookLogin"
        textButton="Continue with Facebook"
        
        />
    </div>
}
export default Facebooklogin;