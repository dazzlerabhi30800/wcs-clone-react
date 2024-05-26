import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import AccordianData from "../data/AccordianData";

export default function AccordianWrapper() {
  const [accordianData, setAccordianData] = useState(AccordianData);
  const handleAccordian = (id) => {
    setAccordianData(
      accordianData.map((item) => {
        if (item.id === id) {
          return { ...item, show: !item.show };
        }
        return { ...item, show: false };
      })
    );
  };
  return (
    <div className="flex flex-col gap-10 my-10 md:basis-1/2">
      {/*  Accordian Comp */}
      {accordianData.map((data, index) => (
        <div
          key={index}
          className="bg-gray-900 flex flex-col gap-0 rounded-md shadow-md border-2 border-indigo-300 cursor-pointer"
        >
          <div
            className={`flex ${
              data.show
                ? "bg-black rounded-tl-md rounded-tr-md"
                : "bg-transparent"
            } justify-between items-center p-2 px-4`}
            onClick={() => handleAccordian(data.id)}
          >
            <h3 className="font-bold text-base md:text-lg lg:text-xl">
              {data.question}
            </h3>
            <button
              className={` ${
                data.show && "text-teal-600"
              } text-violet-200 hover:text-indigo-500 text-xl`}
            >
              {data.show ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <p
            className={`text-sm ${
              data.show
                ? "min-h-[75px] scale-y-1 p-3 visible"
                : "h-[0px] scale-y-0 p-0 opacity-0 invisible"
            } md:text-base transition duration-300 linear`}
          >
            {data.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
