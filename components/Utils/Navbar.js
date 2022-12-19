import React from "react";
import Link from "next/link";

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" sticky top-0 z-50" >
      <div className="nav-wrapper">
        <div className="banner">
          {/* <p>
            We Helped Over 25 Programs And Supported Over 300 Startups & Entrepreneurs.
          </p> */}
        </div>
        <div className="menu">
          <div className="menu-div">
            <Link href="/" className="ml-6 sm:ml-0">
              <div className="menu-logo cursor-pointer">
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
            </Link>
          </div>
          <div className="menu-div gap-8">
            <div className="menu-links gap-2 xl:gap-8 lg:gap-3 hidden md:flex">
              {/* Create dropdown menu for about */}
              <div className="dropdown">
                <button className="dropbtn">
                  <Link href="/about">About</Link>
                </button>
                <div className="dropdown-content">
                  <Link href="/about">About Us</Link>
                  <Link href="/partners">Our Partners</Link>
                </div>
              </div>
              <Link href="/service">Services</Link>
              <Link href="/program">Programs</Link>
              <div className="dropdown">
                <button className="dropbtn">
                <Link href='/events'>Events</Link>
                </button>
                <div className="dropdown-content">
                  <Link href="/events">Events</Link>
                  <Link href="/talk-series">Talk Series</Link>
                </div>
              </div>
              <Link href='/blog'>Blog</Link>
              <Link href="/industry">Industry</Link>
              <Link href="/whats-new"><div className="z-[2] cursor-pointer">What's <div className="absolute mt-[-38px] text-[10px] rotate-12 ml-9 bg-blue-600 text-white px-2 rounded-full z-[-1]">New</div></div></Link>
              {/* <a href="#">Resources</a> */}
            </div>
            <div className="bottom mt-2">
              <a href="/contact" className="hidden xl:block">
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
