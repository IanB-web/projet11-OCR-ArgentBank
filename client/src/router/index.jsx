import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getUserProfile } from "../features/thunks/userThunks";
import { getStorage } from "../components/hooks/getStorage";

import routes from "./routes";
import Home from "../pages/home";
import Login from "../pages/login";
import Error404 from "../pages/error404";
import PrivateRoute from "./privateRoute";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = getStorage();
    if (storage.length > 0 ) {
      const token = storage.getItem("token");
      dispatch(getUserProfile(token));
    }
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.login} element={<Login />}></Route>
        <Route path={routes.profile} element={<PrivateRoute />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
