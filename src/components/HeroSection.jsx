const HeroSection = ({ img, heading, subHeading }) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="flex flex-col gap-5 justify-center items-start h-[70vh]  bg-cover bg-center px-6 md:px-12"
    >
      <h1 className="text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-bold">{heading}</h1>
      <p className="md:text-lg lg:text-xl xl:mt-3 xl:text-2xl font-medium">{subHeading}</p>
      <button className="bg-white py-2 px-4 md:py-3 md:px-6 rounded-sm uppercase shadow-sm mt-8 text-purple-900 lg:text-lg font-medium transition duration-200 linear hover:bg-sky-500 hover:text-white">Contact Us</button>
    </section>
  );
};

export default HeroSection;
