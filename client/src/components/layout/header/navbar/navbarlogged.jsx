import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from "../../../../router/routes.js";
import { getStorage } from '../../../hooks/getStorage.js';
import { logout } from '../../../../features/userSlice.js';


const NavbarLogged = () => {
    const state = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        const storage = getStorage();
        storage.removeItem("token");
        dispatch(logout());
    };

    return (
        <>
        <NavLink className="main-nav-item" to={routes.profile}>
            {state.userInfo.userName}
        <i class="fa fa-user-circle"></i> 
        </NavLink>

        <NavLink className="main-nav-item" to >
            <i className='fa fa-gear'></i>
        </NavLink>
        
        <NavLink className="main-nav-item" to={routes.home} onClick={handleLogout}>
            <i className='fa fa-power-off'></i>
        </NavLink>
        
        </>
    );
};

export default NavbarLogged;