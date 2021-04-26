import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-white py-2 fixed-top'>
            <div className='container' >
                <Link to='/' className="navbar-brand">
                    <img src={Logo} alt='Logo' />
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item active'>
                        <Link to='/' className='nav-link'>
                            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}>
                                <span className='badge bg-light'>5</span>
                            </FontAwesomeIcon>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link'>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
