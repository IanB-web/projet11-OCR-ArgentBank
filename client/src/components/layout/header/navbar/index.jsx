import React from 'react';
import { useSelector } from 'react-redux';
import NavbarNotLogged from './navbarnotlogged';
import NavbarLogged from './navbarlogged';
import "./navbar.scss";

const NavBar = () => {
    const state = useSelector((state) => state.user)

    return (
        <>
            {state.isLogged ? <NavbarLogged /> : <NavbarNotLogged/>}
        </>
    );
};

export default NavBar;