import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faGrip } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="relative z-50 bg-[#183247] text-white">
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
        <div className="hidden  md:flex gap-14 px-10">
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
          <div className="relative me-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-110 rounded-full bg-white px-4 py-3 pr-12 text-sm text-black outline-none"
            />

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-white bg-[#183247] rounded-full p-3 "
            />
          </div>
          <div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#f1eee9]">
              <FontAwesomeIcon
                icon={faGrip}
                className="text-xs text-[#183247] "
              />
            </button>
          </div>
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
            <div className="flex justify-center items-center w-100">
              <div className="relative mt-2 w-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-80  rounded-full px-4 py-3 pr-12 text-sm text-black bg-white outline-none"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
                />
              </div>
              <div className="flex h-11 w-12 items-center justify-center rounded-full bg-white me-2">
                <FontAwesomeIcon icon={faGrip} className="text-xl text-black" />
              </div>
            </div>
            <div></div>
            <div className="flex flex-col gap-3"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
