import React, {useState} from 'react';
import "../App.css"
import {useDispatch} from "react-redux";
import {getLogin} from "../Redux/auth-reducer";

const LoginPage = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.currentTarget.value)
    }
    const handlePassword = (event) => {
        setPassword(event.currentTarget.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
            dispatch(getLogin(email, password))
        setPassword("")
        setEmail("")
    }
    return (
        <div className={"login"}>
            <form onSubmit={handleSumbit} action="" className={"form"}>
                <label htmlFor="email">Email</label>
                <input onChange={handleEmail} value={email} type="email" placeholder={"Your email"} minLength={5}/>
                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} value={password} type="password" placeholder={"Your password"}
                       minLength={5}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;