export default function ServicesComp({
  item: { title, subText, services, img },
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-24 services-comp">
      <div className="flex flex-col gap-2 md:gap-6 md:basis-1/2 text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-[2rem] lg:text-[2.5rem] mx-auto">
          {title}
        </h2>
        <p className="text-lg md:text-xl">{subText}</p>
        {/* Features */}
        <div className="grid grid-cols-1 my-16 md:my-5 md:grid-cols-2 gap-9 md:gap-7">
          {services.map((item) => (
            <span
              key={item}
              className="bg-white text-center py-4 md:py-3 w-fit rounded-md text-black transition duration-400 w-full ease-in hover:bg-blue-800 cursor-pointer hover:text-white font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
        <button className="py-4 w-full md:w-[fit-content] portfolio-btn px-16 rounded-md shadow-md uppercase font-medium">
          portfolio
        </button>
      </div>
      <div className="md:basis-1/2 flex justify-center">
        <img src={img} alt={title} loading="lazy" className="object-cover" />
      </div>
    </div>
  );
}
