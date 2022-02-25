import React from 'react'
import Navbar from './Navbar';
import HeaderWithSeach from './HeaderWithSeach';
import HeaderSearchMobile from './headerMobileComponent/HeaderSearchMobile'
import '../../grid.css';

function Header() {
    return (

        <div className="header">
            <div className="grid wide"> 
                <Navbar />
                <HeaderWithSeach />
                <HeaderSearchMobile />
                
            </div>
        </div>
    )
}

export default Header
