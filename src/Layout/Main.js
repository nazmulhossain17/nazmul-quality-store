import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header/> 
            <Outlet/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
};

export default Main;