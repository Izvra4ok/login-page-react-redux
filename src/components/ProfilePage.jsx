import React, {useState} from 'react';
import "../App.css";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector} from "../Redux/selectors/authSelectors";
import {getLogout} from "../Redux/auth-reducer";


const ProfilePage = () => {

    const isAuth = useSelector(isAuthSelector);
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(isAuth)

    if (!isAuth) {
        return <Navigate to={"/login"}/>
    }

    const logout = () => {
        dispatch(getLogout(setAuth(false)))
    }
    return (
        <div className={"profile"}>
            <h2>Your profile</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default ProfilePage;