import BenefitComp from "../../components/BenefitComp";

export default function BenefitsWrapper({ data, height, width }) {
  return (
    <div className="flex flex-col gap-16 lg:gap-8 mt-28 mb-6 items-center">
      {data.map((data, index) => (
        <BenefitComp key={index} data={data} height={height} width={width} />
      ))}
    </div>
  );
}
