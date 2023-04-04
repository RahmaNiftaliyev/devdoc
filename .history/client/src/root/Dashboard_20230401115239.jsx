// @ts-nocheck
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../features/Main/Home/Home';
import NotFound from './../features/errors/NotFound';

const Dashboard = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/register' element/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
