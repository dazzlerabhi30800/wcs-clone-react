import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">Services</a>
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
