import React from "react";
import navLinks from "../constants";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
function NavBar() {
  return (
    <header>
      <nav className="max-w-[90rem] p-4 mx-auto flex justify-between">
        {/* <i className="ri-apple-fill text-2xl cursor-pointer text-gray-400 hover:text-white transition duration-300 "></i> */}
        <img
          className="cursor-pointer h-8 w-8  hover:brightness-125 transition duration-300"
          src={logo}
          alt=""
        />
        <ul className="hidden  md:flex gap-8 ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className=" hover:text-white transition duration-300"
                href={link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex">
          <button>
            <img
              className="cursor-pointer h-8 w-8 hover:brightness-125 transition duration-300"
              src={search}
              alt=""
            />
            {/* <i className="ri-search-line text-2xl text-gray-400 cursor-pointer hover:text-white transition duration-300"></i> */}
          </button>
          <button>
            <img
              className="cursor-pointer h-8 w-8 hover:brightness-125 transition duration-300"
              src={cart}
              alt=""
            />
            {/* <i className="ri-shopping-bag-4-line text-2xl text-gray-400 cursor-pointer hover:text-white transition duration-300"></i> */}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
