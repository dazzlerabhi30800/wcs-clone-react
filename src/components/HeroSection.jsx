import HeroComp from "./HeroComp";
import subHeroImg1 from "../assets/home-img/subHeroImg1.png";
import subHeroImg2 from "../assets/home-img/subHeroImage2.png";

const HeroSection = (props) => {
  return (
    <section>
      <HeroComp {...props} />
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
        <div
          className="flex justify-center items-center grow md:grow-0 md:basis-1/2 bg-no-repeat bg-contain md:bg-fill bg-center"
          style={{ backgroundImage: `url(${subHeroImg2})` }}
        >
          <img
            className="object-cover w-[100%] max-h-[400px] max-w-[400px]"
            src={subHeroImg1}
            alt="Digital Success"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
