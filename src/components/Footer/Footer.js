import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='bg-dark py-3'>
            <div className='container'>
                <div className='row footer-top py-5'>
                    <div className='col-md-6 mb-5'>
                        <img src={Logo} alt='...' />
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/about'>About Red Onion Restaurant</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Read Our Blog</Link>
                            </li>
                            <li>
                                <Link to='/login'>Sign up today</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/help'>Get Help</Link>
                            </li>
                            <li>
                                <Link to='/faq'>Read FAQ</Link>
                            </li>
                            <li>
                                <Link to='/cities'>View All Cities</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom d-flex justify-content-between align-items-center'>
                    <small className='text-secondary'>Copyright &copy; 2021 Red Onion Restaurant </small>
                    <ul className='list-inline'>
                        <li className='list-inline-item ml-3'>
                            <a href='#'>Privacy Policy.</a>
                        </li>
                        <li className='list-inline-item  ml-3'>
                            <a href='#'>Terms of Use</a>
                        </li>
                        <li className='list-inline-item  ml-3'>
                            <a href='#'>Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
