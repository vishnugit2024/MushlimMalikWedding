import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import websitelogo from "../../Assets/Websitelogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container-fluid nav-bg">
        <nav className="navbar">
          <div className="nav-left-data">
            <Link to="/">
              <img src={websitelogo} alt="Muslim Malik Risthe Logo" />
            </Link>
          </div>

          <div className={`nav-center-data ${menuOpen ? "menu-open" : ""}`}>
            <ul className="nav-links-container">
              <li className="nav-links">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  HOME
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/profilePage" onClick={() => setMenuOpen(false)}>
                  PROFILES
                </Link>
              </li>

              <li className="nav-links">
                <Link to="/member" onClick={() => setMenuOpen(false)}>
                  MEMBERSHIP
                </Link>
              </li>

              <li className="nav-links">
                <Link to="/ourstory" onClick={() => setMenuOpen(false)}>
                  OUR STORY
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                  GALLERY
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/contactUs" onClick={() => setMenuOpen(false)}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-right-data">
            <div className="nav-login-btn">
              <div className="login-icon">
                <Link to="/userProfile">
                  <i class="bi bi-person-lines-fill"></i>{" "}
                </Link>
              </div>
              <div className="login-name">
                <h5>
                  <Link to="/userProfile">MY PROFILE</Link>
                </h5>
              </div>
            </div>
            <div className="nav-login-btn">
              <div className="login-icon">
                <Link to="/login">
                  <i className="bi bi-person-circle"></i>
                </Link>
              </div>
              <div className="login-name">
                <h5>
                  <Link to="/login">LOGIN</Link>
                </h5>
              </div>
            </div>

            <div className="nav-login-btn">
              <div className="login-icon">
                <Link to="/signup">
                  <i className="bi bi-person-add"></i>
                </Link>
              </div>
              <div className="login-name">
                <h5>
                  <Link to="/signup">SIGN UP</Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            {menuOpen ? (
              <i className="bi bi-x-lg"></i> // Cross Icon
            ) : (
              <i className="bi bi-list"></i> // Hamburger Icon
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
