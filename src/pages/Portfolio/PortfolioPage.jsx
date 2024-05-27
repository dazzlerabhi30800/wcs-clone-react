import HeroComp from "../../components/HeroComp";
import AppServices from "./AppServices";
import Form from "../../components/Form";

export default function PortfolioPage() {
  return (
    <main>
      <section>
        <HeroComp
          img="./portfolio-img/PortfolioHeroImage.png"
          heading="Our Work"
          subHeading="Partner with Us for Next-Level Web Strategies and Results"
        />
      </section>
      <AppServices />
      <Form />
    </main>
  );
}
