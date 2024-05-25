// import subHeroImg from "./src/assets/subHeroImg1.png";
const HeroSection = ({ img, heading, subHeading }) => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="flex flex-col gap-5 justify-center items-start h-[60vh] md:h-[70vh]  bg-cover bg-center px-6 md:px-12"
      >
        <h1 className="text-3xl md:text-4xl mt-7 lg:text-[3rem] xl:text-[3.5rem] font-bold">
          {heading}
        </h1>
        <p className="md:text-lg lg:text-xl xl:mt-3 xl:text-2xl font-medium">
          {subHeading}
        </p>
        <button className="bg-white py-2 px-4 md:py-3 md:px-6 rounded-sm uppercase shadow-sm mt-8 text-sky-900 lg:text-lg font-semibold transition duration-200 linear hover:bg-sky-500 hover:text-white">
          Contact Us
        </button>
      </div>
      {/* Sub Hero Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left p-16 md:p-24 xl:p-36 items-center justify-center">
        <div className="flex flex-col gap-10 md:basis-1/2">
          <h2 className="font-bold text-4xl lg:w-[20ch] md:text-[2.3rem] lg:text-[3rem] lg:leading-[60px]">
            Your path to Digital Success Starts Here.
          </h2>
          <p className="md:text-lg">
            We provide guidance, expertise and solutions for consultancy &
            e-commerce business.
          </p>
        </div>
        <div className="flex justify-center items-center grow md:grow-0 md:basis-1/2 bg-[url('./src/assets/home-img/subHeroImage2.png')] bg-no-repeat bg-contain md:bg-fill bg-center">
          <img
            className="object-cover w-[100%] max-h-[400px] max-w-[400px]"
            src="./src/assets/home-img/subHeroImg1.png"
            alt="Digital Success"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
