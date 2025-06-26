import Login from "./Login";
import Signup from "./Signup";
import './Tag.css';
function LoginSignupPannel(){
    const handleClick =(e)=>{
        
    }
    return(
        <div className="Main-container">
        <div className="container">
            <div className="tagbar" >
                <div className="tag active" onClick={}>Login</div>
                <div className="tag" onClick={}>SignUp</div>
            </div>
            <div className="Pannel"></div>
        </div>
        </div>
    );
}
export default LoginSignupPannel;