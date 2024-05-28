import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowLinks(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between  bg-black/50 border-2 border-indigo-400 md:items-center fixed top-4 w-[96%] py-[10px] px-4 md:px-6 rounded-lg -translate-x-[50%] left-1/2 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            className="w-48 h-48 md:w-[50px] md:h-[50px] object-cover"
            src="./logo.png"
            alt="Web Consultancy Services"
          />
        </Link>
        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="text-white text-2xl md:hidden"
        >
          {showLinks ? <IoCloseSharp /> : <RiMenu3Fill />}
        </button>
      </div>
      <ul
        className={`md:flex md:scale-1 flex-col md:flex-row ${
          showLinks ? "flex" : "hidden"
        }  gap-6 md:gap-10 items-center transition duration-300 ease-in-out text-base md:text-lg py-3 md:py-0`}
      >
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/services"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/portfolio"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/blog"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/about"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`py-1 border-b ${
              location.pathname === "/contact"
                ? "font-bold text-cyan-400 border-sky-500"
                : "border-transparent font-normal"
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
