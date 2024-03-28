import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import routes from "../../../router/routes.js";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to={routes.home}>
          <img
            className="main-nav-logo-image"
            src="src/assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <NavLink  to={routes.login}>
          <p className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </p>
        </NavLink>

      </nav>
    </header>
  );
};

export default Header;
