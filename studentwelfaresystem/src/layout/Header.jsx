import '../assets/layout.scss';
import { Link } from "react-router-dom";
import React, { useState } from 'react'

function Header() {
  return (
    <div className="header">
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold fs-4" to="/">
                {
                  <img
                    src={logo}
                    alt=""
                    width="35"
                    height="35"
                    class="d-inline-block align-text-top"
                  />
                }{" "}
                Student Welfare
              </Link>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/about" className="navlink btn btn-outline-info">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="logincde">
                <ul className="d-flex">
                  <li>
                    <Link
                      to="./postproperty"
                      className="navlink btn btn-secondary"
                    >
                      Post your PG rooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./login"
                      className="navlink btn btn-outline-primary"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="navlink btn btn-outline-primary"
                    >
                      Sign Up
                    </Link>
                  </li>
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
