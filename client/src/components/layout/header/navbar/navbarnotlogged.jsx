import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from "../../../../router/routes.js";

const NavbarNotLogged = () => {
    return (
        <NavLink to ={routes.login}>
            <p className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </p>
        </NavLink>
    );
};

export default NavbarNotLogged;