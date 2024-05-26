import BenefitComp from "../../components/BenefitComp";
import BenefitData from "../../data/BenefitData";

export default function BenefitsWrapper() {
  return (
    <div className="flex flex-col gap-16 lg:gap-8 my-28 items-center">
      {BenefitData.map((data, index) => (
        <BenefitComp key={index} data={data} />
      ))}
    </div>
  );
}
