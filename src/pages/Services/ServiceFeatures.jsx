import { featureData } from "../../data/ServiceFeatureData";

export default function ServiceFeatures() {
  return (
    <section className="flex flex-col gap-10 p-4 md:p-16">
      <h1 className="text-center mx-auto text-3xl md:text-[2.2rem]">
        Features That Will Help Turn Your Visitors Into Clients
      </h1>
      <div className="flex gap-4 flex-wrap p-4 md:p-6 justify-center md:gap-10 lg:gap-20">
        {featureData.map((data, index) => (
          <div key={index} className="flex gap-8 md:gap-10">
            <span className="text-[2.4rem] md:text-[2.8rem] text-pink-500">
              {data.icon}
            </span>
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-lg md:text-xl">{data.title}</h5>
              <p className="text-sm md:text-base text-gray-300 md:max-w-[270px] lg:max-w-[290px]">
                {data.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
