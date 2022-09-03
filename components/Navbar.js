import React from "react";
import Image from "next/image";

function Navbar() {

  return (
    <nav className=" sticky top-0">
      <div className="nav-wrapper">
        <div className="banner">
          <p>
            Learn how to build visual and interactive apps using Interface
            Designer
          </p>
        </div>
        <div className="menu">
          <div className="menu-div">
            <a href="index.html">
              <div className="menu-logo">
                <img
                  src="./img/finovistaLogo.png"
                  alt=""
                  className="mobile-logo"
                />
                <img
                  src="./img/finovistaLogo.png"
                  alt=""
                  className="logo"
                />
              </div>
            </a>
            <div className="menu-links">
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <a href="#">Programs</a>
              <a href="#">Events</a>
              <a href="#">Industry</a>
              <a href="#">Resources</a>
            </div>
          </div>
          <div className="bottom">
            <a href="#">Contact Us</a>
            <a href="Day-5/signup.html">Sign up for free</a>
            <a href="Day-5/SignIn.html">Sign In</a>
            <div className="ham" id="ham">
              <img
                src="https://static.thenounproject.com/png/1614628-200.png"
                alt=""
              />
            </div>
            <div className="ham1" id="ham1">
              <img
                src="https://p.kindpng.com/picc/s/67-679368_black-cross-png-transparent-png.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mobileMenu">
          <div>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Programs</a>
            <a href="#">Events</a>
            <a href="#">Industry</a>
            <a href="#">Resources</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
