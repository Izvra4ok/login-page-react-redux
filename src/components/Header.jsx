import React from 'react';
import {useSelector} from "react-redux";
import {isAuthSelector} from "../Redux/selectors/authSelectors";

const Header = () => {

    const isAuth = useSelector(isAuthSelector);
    console.log(isAuth)

    return (
        <div className={"header"}>
            <h1>Test react-redux login</h1>
            <hr/>
        </div>
    );
};

export default Header;