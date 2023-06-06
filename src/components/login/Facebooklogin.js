import FacebookLogin from 'react-facebook-login';
import "./login.css";

const Facebooklogin=()=>{
    // const componentClicked=()=>{}
    const responseFacebook=(res)=>{
        console.log("login result", res );
    }
    return <div>
        <FacebookLogin 
        
        appId="3454279754812391"
        autoLoad={false}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
        // render={(renderProps) => (
        //     <button
        //       className="p-10"
        //       onClick={renderProps.onClick}
        //     >
        //       Sign in with Facebook
        //     </button>)} 
        cssClass="FacebookLogin"
        textButton="Continue with Facebook"
        
        />
    </div>
}
export default Facebooklogin;