import SectionTitle from "../../components/SectionTitle";
import ProcessRoadmap from "./ProcessRoadmap";

export default function DesignProcess() {
  return (
    <section className="p-6 md:p-16 design--section">
      <div className="flex flex-col gap-16 md:flex-row md:justify-center items-center md:items-start md:gap-24">
        <SectionTitle
          title="web app design process"
          subText="Bring Your Business Online in 7 Easy Steps "
        />
        <img
          src="./services-img/DesignProcessIcon.png"
          alt="Design Process"
          className="design--icon"
        />
      </div>
      <ProcessRoadmap />
    </section>
  );
}
