import React from 'react';
import '../Styles/Navbar.css';

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
        </div>
    </nav>
  )
}

export default Navbar;