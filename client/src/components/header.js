import React from "react";
import "../header.css"

const Header = () => {
  return(
    <nav className="navBar">
    <a href="/home">Posts</a>
    <a href="/about">About Us</a>
    <a href="/dashboard">Account</a>
    </nav>
    
  ); 
};

export default Header;
