import '../assets/layout.scss';
import { Link } from "react-router-dom";
import React, { useState } from 'react'

function Header() {
    return (
        <div className="header margin-b">
            <div className="bg-dark text-center text-lg-start fixed-top">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                {}
                            </a>
                            <div class="navbar-header">
                                <a className="navbar-brand" href="#">Student Welfare</a>
                            </div>
                            <div className="collapse navbar-collapse infolink" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li><Link to="/" className='navlink'>Home</Link></li>
                                    <li><Link to="/about" className='navlink'>About</Link></li>
                                </ul>
                            </div>
                            <div className='entrylink'>
                                <ul className='d-flex'>
                                    <li><Link to="./viewproperty" className='navlink'>View Property</Link></li>
                                    <li><Link to="./postproperty" className='navlink'>Post your PG rooms</Link></li>
                                    <li><Link to="./login" className='navlink'>Login</Link></li>
                                    <li><Link to='/signup' className='navlink'>Sign Up</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>
            </div>
        </div>

    );
}

export default Header;

