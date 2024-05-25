import HeroSection from "../../components/HeroSection";
import heroImg from "../../assets/home-img/HomeHeroImage.png";

export default function Home() {
  return (
    <main>
      <HeroSection
        img={heroImg}
        heading="Web Consultancy Services"
        subHeading="Bring your business online"
      />
    </main>
  );
}
