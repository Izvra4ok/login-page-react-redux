import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <ul>
                <li>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;