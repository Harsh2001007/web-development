import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ scrollToPricing }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleNavBar() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  const phoneNumber = "7011615800";
  const emailAddress = "hs5686584@gmail.com";

  const scrollTo100px = () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to={"/"} className="flex items-center flex-shrink-0">
              <img className="h-10 w-10" src={logo} alt="logo img" />
              <span className="text-xl tracking-tight">Digital Seva</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} onClick={scrollTo100px}>
                {item.label}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center ">
            <a
              href={`tel:${phoneNumber}`}
              className="py-2 px-3 border rounded-md"
            >
              Call us
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Contact us
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href={`tel:${phoneNumber}`}
                className="py-2 px-3 border rounded-md"
              >
                Call us
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className=" py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
