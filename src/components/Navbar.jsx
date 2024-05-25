import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between  bg-indigo-900/40 border-2 border-sky-500 md:items-center fixed top-4 w-[96%] py-4 md:py-3 md:py-4 px-8 rounded-lg -translate-x-[50%] left-1/2 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <a href="/">
          <img
            className="w-48 h-48 md:w-[50px] md:h-[50px] object-cover"
            src="./logo.png"
            alt="Web Consultancy Services"
          />
        </a>
        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="text-white text-2xl md:hidden"
        >
          {showLinks ? <IoCloseSharp /> : <RiMenu3Fill />}
        </button>
      </div>
      <ul
        className={`md:flex flex-col md:flex-row ${
          showLinks ? "flex" : " hidden"
        }  gap-6 md:gap-10 items-center text-base md:text-lg py-3 md:py-0`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
