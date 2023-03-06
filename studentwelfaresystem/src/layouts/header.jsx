import '../assets/Layout.scss'
import { Link } from "react-router-dom";
import React ,{ useState } from 'react';


function Header() {
return (
        <div className="headeer">
            <div className="col-md-12">
                <header>
                     <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                {/* <img src={logo}/> */}
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className='navlink'>Home</Link></li>
                                    <li className="nav-item">
                                        <Link to="/about" className='navlink'>About</Link></li>
                                </ul>
                            </div>
                            <div className='logincde'>
 
                                <ul className='d-flex'>
                                    <li><Link to ="./viewproperty" className='navlink'>View Property</Link></li>
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

