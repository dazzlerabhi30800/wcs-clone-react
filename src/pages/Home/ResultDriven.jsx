import SectionTitle from "../../components/SectionTitle";
import BenefitsWrapper from "./BenefitsWrapper";

export default function ResultDriven(props) {
  return (
    <section className="py-10 px-6 md:p-12 lg:p-20">
      <SectionTitle {...props} />
      <BenefitsWrapper
        data={props.data}
        height={props.height}
        width={props.width}
      />
    </section>
  );
}
