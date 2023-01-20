import React, {useState} from 'react';
import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../Redux/auth-reducer";
import {emailSelector, isAuthSelector, passwordSelector} from "../Redux/selectors/authSelectors";
import {Navigate} from "react-router-dom";

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

    const isAuth = useSelector(isAuthSelector);
    if (isAuth) {

        return <Navigate to={"/profile"}/>
    }
    return (
        <div className={"login"}>
            <form onSubmit={handleSumbit} action="" className={"form"}>
                <label htmlFor="email">Email</label>
                <input onChange={handleEmail} value={email} type="email" name="email" placeholder={"Your email"}
                       minLength={5}/>
                <label htmlFor="password">Password</label>
                <input onChange={handlePassword} value={password} type="password" name="password" autoComplete="true"
                       placeholder={"Your password"}
                       minLength={5}/>
                <button
                    // disabled={!(email === "12345@1" && password === "123456")}
                >Login</button>
            </form>
        </div>
    );
};

export default LoginPage;