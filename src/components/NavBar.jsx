import React from "react";
import navLinks from "../constants";
function NavBar() {
  return (
    <header>
      <nav className="max-w-[90rem] p-4 mx-auto flex justify-between">
        <i className="ri-apple-fill text-2xl cursor-pointer text-gray-400 hover:text-white transition duration-300 "></i>
        <ul className="hidden  md:flex gap-8 ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-gray-400 hover:text-white transition duration-300"
                href={link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button>
            <i className="ri-search-line text-2xl text-gray-400 cursor-pointer hover:text-white transition duration-300"></i>
          </button>
          <button>
            <i className="ri-shopping-bag-4-line text-2xl text-gray-400 cursor-pointer hover:text-white transition duration-300"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
