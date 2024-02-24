import React from 'react';
import '../Styles/Navbar.css';
import { RiMenuLine } from "react-icons/ri";


const Navbar = () => {
return (
    <nav className='main-navbar'>
        <div className='brand'>
            <h2>Calorie Tracker</h2>
        </div>
        <div className='menu'>
            <ul>
                <li>Log In</li>
                <li>Sign Up</li>
            </ul>
            <RiMenuLine className='navbar-icon'></RiMenuLine>
        </div>
    </nav>
    )
}

export default Navbar;