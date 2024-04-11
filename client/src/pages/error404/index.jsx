import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

//style
import "./error404.scss";


const Error404 = () => {
    return (
        <>
        <Header />

        <div className='error-page__content'>
            <h1>404</h1>
            <h2>This page doesn't exist.</h2>
            <Link to="/">Back to Home</Link>
        </div>

        <Footer />
        </>
    );
};

export default Error404;