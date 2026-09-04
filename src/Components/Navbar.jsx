import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");

    window.location.href = "/";
  };
  return (
    <nav className="relative z-50 bg-black text-white">
      {/* Navbar */}
      <div className="flex h-20 items-center justify-between px-5 sm:px-8 md:px-12">
        {/* Mobile Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 md:hidden"
        >
          <img
            src={logo}
            alt="Emirates Classic"
            className="h-10 w-10 object-contain"
          />

          <span className="whitespace-nowrap text-base font-bold tracking-wide sm:text-lg ">
            EMIRATES CLASSIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link className="font-light" to="/">
            Home
          </Link>

          <Link className="font-light" to="/services">
            Services
          </Link>

          <Link className="font-light" to="/about">
            About
          </Link>

          <Link className="font-light" to="/insights">
            Insights
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden items-center md:flex">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="w-110 rounded-full bg-white px-4 py-3 pr-12 text-sm text-black outline-none"
            />

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-white bg-black rounded-full p-3 "
            />
          </div>
          {!token ? (
            <div>
              <Link
                to="/login"
                className="
                whitespace-nowrap
                rounded-lg
                border
                border-[#c99b4a]
                px-3
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#c99b4a]
                hover:text-black
                lg:px-5 m-3
              "
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="
                whitespace-nowrap
                rounded-lg
                bg-[#c99b4a]
                px-3
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                duration-300
                hover:scale-105
                hover:bg-white
                lg:px-5
              "
              >
                Register
              </Link>
            </div>
          )
          :
           (
            <button
              onClick={handleLogout}
              className="
      whitespace-nowrap
      rounded-lg
      border
      border-red-500
      px-4
      m-2
      py-2.5
      text-sm
      font-semibold
      text-red-400
      transition
      duration-300
      hover:bg-red-500
      hover:text-white
    "
            >
              Logout
            </button>
          )}
          
        </div>
        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" left-0 top-full  z-[100] w-full bg-black px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-base"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-base"
            >
              Services
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-base"
            >
              About
            </Link>

            <Link
              to="/insights"
              onClick={() => setMenuOpen(false)}
              className="text-base"
            >
              Insights
            </Link>

            {/* Mobile Search */}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full px-4 py-3 pr-12 text-sm text-black bg-white outline-none"
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="
              whitespace-nowrap
              rounded-lg
              border
              border-[#c99b4a]
              px-3
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-[#c99b4a]
              hover:text-black
              lg:px-5
            "
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="
              whitespace-nowrap
              rounded-lg
              bg-[#c99b4a]
              px-3
              py-2.5
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
              hover:bg-white
              lg:px-5
            "
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
