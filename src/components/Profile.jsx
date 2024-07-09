import './Profile.css'
import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react';
import Home from './Home';

const Profile =()=>{
    return(
        <div className="grid-container">
            <Header/>
            <Sidebar />
            <Home />
        </div>

    )
}
export default Profile;