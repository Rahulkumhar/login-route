import React, { useContext } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../App';

const PrivateRoute = () => {
    const { isLogin } = useContext(UserContext)
    return isLogin ? <Outlet /> : <Navigate to="/login" />


};

export default PrivateRoute;