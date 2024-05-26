import HeroSection from "./HeroSection.jsx";
import Services from "./Services.jsx";
import ResultDriven from "./ResultDriven.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection
        img="./home-img/HomeHeroImage.png"
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
