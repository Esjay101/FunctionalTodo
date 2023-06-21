import React, {useState, useContext} from "react";
import loginRequest from "../api/loginRequest";
import {useNavigate} from "react-router-dom";
import {TokenContext} from "../App";

export const LoginPage = (props) => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
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
            </form>
        </div>
    )
}