import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleStatusMessage } from "../../features/userSlice";
import {
  fetchUserByEmail,
  getUserProfile,
} from "../../features/thunks/userThunks";

import { getStorage } from "../../components/hooks/getStorage";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

import "./login.scss";

const Login = () => {
  // gestion des états des inputs
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // constantes pour le log
  const navigate = useNavigate();
  const statusMessage = useSelector((state) => state.user.statusMessage);
  const isLogged = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      const storage = getStorage();
      const token = storage.getItem("token");
      dispatch(getUserProfile(token));
      navigate("/profile");
    }
  }, [isLogged, dispatch, navigate]);

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        dispatch(handleStatusMessage());
      }, 2000);
    }
  }, [dispatch, statusMessage]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchUserByEmail(userInfo));
  };

  return (
    <>
      <Header />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={submitForm}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>

            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                onChange={() =>
                  setUserInfo({ ...userInfo, rememberMe: !userInfo.rememberMe })
                }
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
            <span className="status-message">{statusMessage}</span>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
