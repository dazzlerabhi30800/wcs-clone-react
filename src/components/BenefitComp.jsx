export default function BenefitComp({
  data: { title, paragraph, img },
  height,
  width,
}) {
  return (
    <div className="benefit-comp flex flex-col md:flex-row md:items-center gap-10 lg:p-6 w-full lg:w-[90%] mx-auto">
      <div className="flex flex-col md:basis-1/2 gap-4 md:pt-2 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 mx-auto italic">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed">{paragraph}</p>
      </div>
      <div className="w-full h-full flex justify-center grow">
        <img
          src={img}
          loading="lazy"
          alt={title}
          style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
          className="object-contain w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
}
