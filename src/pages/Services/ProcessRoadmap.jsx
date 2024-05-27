import { RoadmapData } from "../../data/ServiceFeatureData";

export default function ProcessRoadmap() {
  return (
    <div className="flex flex-col lg:w-[75%] xl:w-[65%] mx-auto mt-32 mb-20">
      {RoadmapData.map((data, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between">
            {/* First Section */}
            <div className="flex gap-4 md:gap-10">
              <div className="flex flex-col items-center">
                <h1 className="flex justify-center items-center h-[50px] md:h-[90px] md:w-[90px] px-[20px] font-bold text-lg md:text-3xl  rounded-[50%] bg-white text-black">
                  {index + 1}
                </h1>
                {index + 1 < RoadmapData.length && (
                  <span className="h-[170px] md:h-[150px] w-[3px] bg-white vertical--line"></span>
                )}
              </div>
              <div className="flex flex-col gap-1 md:mt-4">
                <h4>{data.title}</h4>
                <span className="max-w-[210px] md:max-w-[600px] text-[12px] sm:text-sm">
                  {data.info}
                </span>
              </div>
            </div>
            <div className="rounded-[50%] flex justify-center items-center bg-gray-500 h-[60px] sm:h-[70px] md:h-[85px] w-[60px] sm:w-[70px] md:w-[85px] p-2 md:p-3 border-4 border-indigo-500">
              <img
                className="object-contain w-[100%] h-[100%] "
                src={data.img}
                alt={data.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
