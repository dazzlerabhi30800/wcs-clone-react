import HeroComp from "../../components/HeroComp";
import ResultDriven from "../Home/ResultDriven";
import data from "../../data/ServicePageData.json";
import ServiceFeatures from "./ServiceFeatures";
import DesignProcess from "./DesignProcess";
import Form from "../../components/Form";

export default function ServicesPage() {
  return (
    <main>
      <section>
        <HeroComp
          img="./services-img/ServicesHeroImage.png"
          heading="Our Services"
          subHeading="What We've Got For You"
        />
      </section>
      <ResultDriven
        title="our services"
        subText="Web App Development"
        data={data.servicePageData}
        width={380}
        height={380}
      />
      <ServiceFeatures />
      <DesignProcess />
      <Form />
    </main>
  );
}
