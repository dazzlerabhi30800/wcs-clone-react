import HeroSection from "./HeroSection.jsx";
import heroImg from "../../assets/home-img/HomeHeroImage.png";
import Services from "./Services.jsx";
import ResultDriven from "./ResultDriven.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection
        img={heroImg}
        heading="Web Consultancy Services"
        subHeading="Bring your business online"
      />
      <Services
        title="Our Services"
        subText="We Are Specialized In The Following Services"
      />
      <ResultDriven />
    </main>
  );
}
