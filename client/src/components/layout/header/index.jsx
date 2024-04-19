import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import routes from "../../../router/routes.js";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to={routes.home}>
          <img
            className="main-nav-logo-image"
            src="src/assets/img/argentBankLogo.jpg"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        
        <Navbar/>

      </nav>
    </header>
  );
};

export default Header;
