import '../Styles/Navbar.css';
import { RiMenuLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Reducer/loginSlice';

const Navbar = () => {

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);


    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <nav className='main-navbar'>
            <div className='brand'>
                <Link to={'/'}>  <h2> <span>Calorie</span> Tracker</h2></Link>
            </div>
            <div className='menu'>

                <ul className="menu-items"> {/* Corrected class name */}
                {!isLoggedIn?
                <li><Link to={'/login'}>Log In</Link></li> :
                <li onClick={handleLogout}>Logout</li>
            }
                </ul>
                <RiMenuLine className='navbar-icon' />
            </div>
        </nav>
    )
}

export default Navbar;
