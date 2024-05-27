import AppServiceComp from "../../components/AppServiceComp";
import { BusinessData, ecommerceData } from "../../data/PortfolioData";

export default function AppServicesWrapper() {
  return (
    <div className="my-16 flex flex-col gap-10">
      <AppServiceComp data={BusinessData} />
      <h2 className="text-2xl mt-4 md:text-3xl lg:text-4xl font-bold border-b-2 mx-auto italic">
        e-Commerce Web App
      </h2>
      {ecommerceData.map((item, index) => (
        <AppServiceComp key={index} data={item} />
      ))}
    </div>
  );
}
