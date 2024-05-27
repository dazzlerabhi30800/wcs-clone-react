import { chooseData, missionData } from "../../data/AboutData";
import Founder from "./Founder";

export default function Mission() {
  return (
    <section className="p-10 md:p-16">
      <div className="flex flex-col md:flex-row gap-10">
        {missionData.map((data, index) => (
          <div
            className="py-8 px-5 flex flex-col gap-4 mission--comp rounded-lg shadow-lg md:basis-1/2"
            key={index}
          >
            <h4 className="text-lg md:text-xl">{data.title}</h4>
            <p>{data.subText}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl my-20 md:text-3xl lg:text-4xl font-bold border-b-2 mx-auto italic text-center w-[fit-content]">
        Why Choose Us
      </h2>
      {/* Choose Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {chooseData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h5 className="font-bold text-xl">{item.title}</h5>
            <p className="text-gray-300 text-sm md:text-base">{item.para}</p>
          </div>
        ))}
      </div>
      <Founder />
    </section>
  );
}
