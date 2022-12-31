import React from 'react';
import {useSelector} from "react-redux";
import {emailSelector, passwordSelector} from "../Redux/selectors/authSelectors";


const Header = () => {

    const email = useSelector(emailSelector)
    const password = useSelector(passwordSelector)
    return (
        <div className={"header"}>
            <h1>Test react-redux login</h1>
            Login:{email}


        </div>
    );
};

export default Header;