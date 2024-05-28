import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  return (
    <div className="footer--wrapper mt-16 pt-1 animate-movingBg">
      <footer className="p-5 md:p-10 flex flex-col gap-10">
        <div className="flex flex-wrap justify-between md:items-center gap-12 md:gap-0">
          {/* Company Tagline */}
          <div className="flex flex-col gap-1">
            <img
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              src="./logo.png"
              alt="Web Consultancy Services"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4">
              Web Consultancy Services
            </h1>
            <p className="mt-2">Your path to Digital Excellence Starts here.</p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center justify-between gap-12 text-4xl md:text-3xl  mx-auto md:mx-0 social--icon">
            <span className="text-red-500">
              <FaYoutube />
            </span>
            <span className="text-blue-500">
              <FaFacebook />
            </span>
            <span className="text-rose-500">
              <FaInstagram />
            </span>
          </div>
        </div>
        {/* Links & Timings */}
        <div className="flex flex-wrap gap-10 md:gap-0 justify-between">
          {/*  Quick Links  */}
          <div>
            <h4>Quick Links</h4>
            <ul>
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
          </div>
          {/* Timings */}
          <div>
            <h4>Hours of Operation</h4>
            <div className="timing--container">
              <p>Monday to Friday</p>
              <p>10:00AM - 7:00PM</p>
            </div>
            <div className="timing--container">
              <p>Saturday to Sunday</p>
              <p>10:00AM - 7:00PM</p>
            </div>
          </div>
          {/* Address & Email */}
          <div>
            <h4>Contact</h4>
            <p className="mt-2">+91-7845491244</p>
            <p className="mt-2">testingemail@gmail.com</p>
            <p className="mt-2">City, State.</p>
          </div>
        </div>
        <hr className="border-gray-400" />
        <small className="text-center text-sm md:text-base">
          &copy; 2024 Web Consultacy Services. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}
