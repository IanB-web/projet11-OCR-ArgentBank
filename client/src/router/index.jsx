import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from './routes';
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from '../pages/profile';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home/>}></Route>
                <Route path={routes.login} element={<Login />}></Route>
                <Route path={routes.profile} element={<Profile/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;