import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

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
            <a href="/">
              <div className="menu-logo">
                <img
                  src="../img/finovistaLogo.png"
                  alt=""
                  className="mobile-logo"
                />
                <img
                  src="../img/finovistaLogo.png"
                  alt=""
                  className="logo"
                />
              </div>
            </a>
            <div className="menu-links gap-2 xl:gap-8 lg:gap-3 hidden md:flex">
              <a href="#">About Us</a>
              <a href="#">Services</a>
              <Link href="/program">Programs</Link>
              <Link href='/events'> Events</Link>
              <Link href='/blog'>Blog</Link>
              <a href="#">Industry</a>
              <a href="#">Resources</a>
            </div>
          </div>
          <div className="bottom">
            <a href="#" className="hidden xl:block">
              Contact Us
            </a>
            <a href="Day-5/signup.html" className="hidden lg:block">Sign up for free</a>
            <a href="Day-5/SignIn.html" className="hidden lg:flex">Sign In</a>
            <div className="flex lg:hidden">
              <div className={"ham "+ (isOpen ? "hidden" : "block")} onClick={() => setIsOpen(!isOpen)}>
                <img
                  src="https://static.thenounproject.com/png/1614628-200.png"
                  alt=""
                />
              </div>
              <div className={"ham1 " + (isOpen ? "block" : "hidden")} onClick={() => setIsOpen(!isOpen)}>
                <img
                  src="https://p.kindpng.com/picc/s/67-679368_black-cross-png-transparent-png.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"mobileMenu "+(isOpen ? "grid" : "hidden")}>
          <div>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <Link href="/program">Programs</Link>
            <Link href='/events'> Events</Link>
            <Link href='/blog'>Blog</Link>
            <a href="#">Industry</a>
            <a href="#">Resources</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
