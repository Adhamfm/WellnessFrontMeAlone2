// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importing the CSS file for styling
import "https://kit.fontawesome.com/0e53af926d.js" //TODO: Check if change. This is for logo(fa fa-bag-shopping)

function NavBar() {
    return (
            <div id="header">
                <nav className="header-list-nav">
                    <div className="header-logo">
                        <Link to="/"><img src="src\assets\WellnessLogo.png" height="50px" alt="Wellness-Logo" /></Link>
                    </div>

                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/Signup">Signup</Link></li>
                        <li><Link to="Login">Login</Link></li>
                        <li><Link to="/blog.html">Blog</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact.html">Contact Us</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                    </ul>
                </nav>
                <div className="header-list-icon">
                    <Link to=""><i className="fa fa-bag-shopping"></i></Link>
                </div>
            </div>
    );
}

export default NavBar;
