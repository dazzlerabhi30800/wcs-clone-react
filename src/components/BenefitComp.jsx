export default function BenefitComp({ data: { title, paragraph, img } }) {
  return (
    <div className="benefit-comp flex flex-col md:flex-row md:items-center gap-10 lg:p-6 w-full lg:w-[95%] mx-auto">
      <div className="flex flex-col md:basis-1/2 gap-2 md:pt-2 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="text-sm md:text-base leading-relaxed">{paragraph}</p>
      </div>
      <div className="w-full h-full flex justify-center grow">
        <img
          src={img}
          alt={title}
          className="object-cover w-[100%] h-[100%] max-w-[480px] max-h-[480px]  "
        />
      </div>
    </div>
  );
}
