import SectionTitle from "../../components/SectionTitle";
import ServicesComp from "../../components/ServicesComp";
import ServicesData from "../../data/ServicesData";
import ResultDriven from "./ResultDriven";

const Services = (props) => {
  return (
    <section className="p-16 md:p-20">
      <SectionTitle {...props} />
      <div className="flex flex-col gap-40 my-28">
        {ServicesData.map((item, index) => (
          <ServicesComp key={index} item={item} />
        ))}
      </div>
      <ResultDriven />
    </section>
  );
};

export default Services;