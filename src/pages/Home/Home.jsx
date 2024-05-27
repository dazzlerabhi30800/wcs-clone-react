import HeroSection from "./HeroSection.jsx";
import Services from "./Services.jsx";
import ResultDriven from "./ResultDriven.jsx";
import TechStack from "./TechStack.jsx";
import Accordian from "./Accordian.jsx";
import Form from "../../components/Form.jsx";
import ServicesData from "../../data/ServicesData.jsx";
import BenefitData from "../../data/BenefitData.jsx";

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
        data={ServicesData}
      />
      <ResultDriven
        title="result driven"
        subText="Web Apps Offer A Range Of Benefits For Business For Business Across Various Industries"
        data={BenefitData}
        width={450}
        height={450}
      />
      <TechStack />
      <Accordian />
      <Form />
    </main>
  );
}
