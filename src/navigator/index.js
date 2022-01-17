import React, { } from 'react';
import { Routes, Route, BrowserRouter,Navigate } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../component/Home';
import Login from '../component/Login';
import PrivateRoute from './privateRoute';

const Navigator = () => {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route exact path='/' element={<PrivateRoute />}>
                    <Route exact path='/' element={<Home />} />
                </Route>
                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>

        </BrowserRouter>
    );
}

export default Navigator;