import React from "react";
import Link from "next/link";

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" sticky top-0 z-10" >
      <div className="nav-wrapper">
        <div className="banner">
          <p>
            Learn how to build visual and interactive apps using Interface
            Designer
          </p>
        </div>
        <div className="menu">
          <div className="menu-div">
            <a href="/" className="ml-6 sm:ml-0">
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
          </div>
          <div className="menu-div gap-8">
            <div className="menu-links gap-2 xl:gap-8 lg:gap-3 hidden md:flex">
              <Link href="/about">About Us</Link>
              <Link href="/service">Services</Link>
              <Link href="/program">Programs</Link>
              <Link href='/events'> Events</Link>
              <Link href='/blog'>Blog</Link>
              <Link href="/industry">Industry</Link>
              {/* <a href="#">Resources</a> */}
            </div>
            <div className="bottom mt-2">
              <a href="/contacts" className="hidden xl:block">
                Contact Us
              </a>
              {/* <a href="Day-5/SignIn.html" className="hidden lg:flex">Sign In</a>
            <a href="/contact" className="hidden lg:block">Contact Us</a> */}
              <div className="flex lg:hidden">
                <div className={"ham " + (isOpen ? "hidden" : "block")} onClick={() => setIsOpen(!isOpen)}>
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

        </div>
        <div className={"mobileMenu " + (isOpen ? "grid" : "hidden")}>
          <div>
            <Link href="/about">About Us</Link>
            <Link href="/service">Services</Link>
            <Link href="/program">Programs</Link>
            <Link href='/events'> Events</Link>
            <Link href='/blog'>Blog</Link>
            <Link href="/industry">Industry</Link>
            <Link href="/privacy-policy">Privacy</Link>
            {/* <a href="#">Resources</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
