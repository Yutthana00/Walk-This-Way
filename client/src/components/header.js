import React from "react";
import "../header.css"

const Header = () => {
  return(
    <div className="navBar">
    <a href="/home">Posts</a>
    <a href="/about">About Us</a>
    <a href="/dashboard">Account</a>
    </div>
    
  ); 
};

export default Header;
