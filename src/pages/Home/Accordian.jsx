import AccordianWrapper from "../../components/AccordianWrapper";
import SectionTitle from "../../components/SectionTitle";

export default function Accordian() {
  return (
    <section className="p-10 md:p-16">
      <SectionTitle title="frequent questions" subText="F.A.Q" />
      <div className="flex flex-col lg:flex-row my-10 gap-10 lg:items-center">
        <AccordianWrapper />
        <div className="flex justify-center items-center md:basis-1/2">
          <img
            src="./home-img/AccordionIcon.png"
            alt="Accoridian Icon"
            className=" "
          />
        </div>
      </div>
    </section>
  );
}
