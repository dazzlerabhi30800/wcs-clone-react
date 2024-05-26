import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between  bg-black/50 border-2 border-indigo-400 md:items-center fixed top-4 w-[96%] py-[10px] px-4 md:px-6 rounded-lg -translate-x-[50%] left-1/2 backdrop-blur-2xl">
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
        className={`md:flex md:scale-1 flex-col md:flex-row ${
          showLinks ? "flex" : "hidden"
        }  gap-6 md:gap-10 items-center transition duration-300 ease-in-out text-base md:text-lg py-3 md:py-0`}
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
