import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
export default function ScrollTop() {
  const [scroll, setScroll] = useState(window.scrollY);
  function handleScroll() {
    setScroll(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`${
        scroll > 180 ? "translate-y-0 opacity-1" : "-translate-y-10 opacity-0"
      } p-3 rounded-sm bg-rose-500 text-2xl md:text-3xl fixed bottom-8 left-6 transition duration-300 ease-in-out`}
    >
      <IoIosArrowUp />
    </button>
  );
}
