import HeroComp from "../../components/HeroComp";

export default function AboutHeroSection() {
  return (
    <section>
      <HeroComp
        img="./about-img/AboutHeroImage.png"
        heading="About Us"
        subHeading="Your Trusted Web Consultancy Partner"
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left p-16 md:p-24 xl:p-36 items-center justify-center">
        <div className="flex flex-col gap-4 md:basis-1/2">
          <h1 className="font-bold text-4xl lg:w-[20ch] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.9rem] lg:leading-[60px]">
            Welcome to Web Consultancy Services
          </h1>
          <p className="md:text-base">
            your premier destination for comprehensive and innovative web
            consultancy services. With a passion for technology and a commitment
            to excellence, we are here to transform your digital presence and
            empower your online success.
          </p>
        </div>
        <div className="flex justify-center items-center grow md:grow-0 md:basis-1/2">
          <img
            className="object-cover w-[100%]  max-h-[450px] max-w-[430px]"
            loading="lazy"
            src="./about-img/AboutHeroImg02.png"
            alt="Digital Success"
          />
        </div>
      </div>
    </section>
  );
}
