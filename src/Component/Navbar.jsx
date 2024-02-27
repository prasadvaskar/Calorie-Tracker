import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='main-navbar'>
            <div className='brand'>
                <h2> <span>Calorie</span> Tracker</h2>
            </div>
            <div className='menu'>
            
                    <ul className="menu-items"> {/* Corrected class name */}
                        <li>Log In</li>
                        <li>Sign Up</li>
                    </ul>
                <RiMenuLine className='navbar-icon'  />
            </div>
        </nav>
    )
}

export default Navbar;
