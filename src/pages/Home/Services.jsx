import SectionTitle from "../../components/SectionTitle";
import ServicesComp from "../../components/ServicesComp";
import ServicesData from "../../data/ServicesData";

const Services = (props) => {
  return (
    <section className="p-10 md:p-16">
      <SectionTitle {...props} />
      <div className="flex flex-col gap-28 my-24 md:px-10">
        {ServicesData.map((item, index) => (
          <ServicesComp key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
