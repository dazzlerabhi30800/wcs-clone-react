import HeroSection from "./HeroSection.jsx";
import Services from "./Services.jsx";
import ResultDriven from "./ResultDriven.jsx";
import TechStack from "./TechStack.jsx";
import Accordian from "./Accordian.jsx";
import Form from "./Form.jsx";

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
      <TechStack />
      <Accordian />
      <Form />
    </main>
  );
}
