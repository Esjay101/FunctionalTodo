import React, {useState, useContext} from "react";
import loginRequest from "../api/loginRequest";
import {useNavigate} from "react-router-dom";
import {TokenContext} from "../App";

export const LoginPage = (props) => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
    const [isOpen,setIsOpen] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const [token, setToken] = useContext(TokenContext);

    const handleLogin = (e) => {
        e.preventDefault()
        loginRequest(password)
        .then(({token})=> {
            setToken(token);
            props.setUsername(username);
            navigate('/');
        }).catch(err=>{
            setError(err.message);
        })
    }
    return(
        <div>
            <h1>Login</h1>
            {isOpen &&
            <div style={{border: "3px solid black", backgroundColor: "beige", color:"black"}}>
                <h2>Important Message</h2>
                <p>This program, in its current state, maintains minimal security and account regulation.<br></br>
                The username is the only id which links the user to their account, and the password remains the same for everybody. Please do not post sensitive or private information to this website, as it is not secure and can be accessed by anyone who inputs the appropriate username.</p>
                <button 
                    style={{border:"2px dotted red", margin: "5px"}}
                    onClick={()=>{
                        setIsOpen(false)
                }}
                >Close Window</button>

            </div>}
            <div style={{color: "red"}}>{error}</div>
            <form onSubmit = {handleLogin}>
                <p>Username</p>
                <input type="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <p>Password</p>
                <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br></br>
                <br></br>
                <button>Login</button>
                <p style={{verticalAlign:"bottom",borderRadius:"5px",border:"1px solid white", position: "fixed",bottom:"0",left:"0", right: "0"}}>Current password to access site: "Foundation"</p>
                
            </form>
        </div>
    )
}