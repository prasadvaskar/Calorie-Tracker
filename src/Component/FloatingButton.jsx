import React, { useState } from 'react'
import '../Styles/FloatingButton.css'
import MenuOptions from './MenuOptions';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        console.log("Clicked ", option);
    }

    return (
        <div className="floating-button-container">
            <div className={`floating-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {/* Icon for the main floating button */}
                <span>&#43;</span>
            </div>
            {isOpen && (
                <div className="options-container">

                    <Link to={'/searchpage'}> <MenuOptions className='menu-options' onClick={() => handleOptionClick("Option 1")}>Add Exercise</MenuOptions></Link>
                    <Link to={'/searchpage'}><MenuOptions className='menu-options' onClick={() => handleOptionClick("Option 2")}>Add Food</MenuOptions></Link>

                </div>
            )}
        </div>
    )
}

export default FloatingButton