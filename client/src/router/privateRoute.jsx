import React from 'react';
import { useSelector } from 'react-redux';
import Profile from '../pages/profile';
import Error404 from '../pages/error404';

const PrivateRoute = () => {
    const isLogged = useSelector((state) => state.user.isLogged);

    if (isLogged) {return <Profile />} else {return <Error404 />}
};

export default PrivateRoute;