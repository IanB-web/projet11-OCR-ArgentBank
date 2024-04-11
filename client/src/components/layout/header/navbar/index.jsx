import React from 'react';
import { useSelector } from 'react-redux';
import NavbarNotLogged from './navbarnotlogged';
import NavbarLogged from './navbarlogged';

const NavBar = () => {
    const state = useSelector((state) => state.user)

    return (
        <div>
            {state.isLogged ? <NavbarLogged /> : <NavbarNotLogged/>}
        </div>
    );
};

export default NavBar;