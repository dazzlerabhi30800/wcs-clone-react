const SectionTitle = ({ title, subText }) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="text-lg md:text-xl uppercase font-medium">{title}</p>
      <h2 className="font-bold text-3xl md:text-[1.8rem] lg:text-[2.1rem]">
        {subText}
      </h2>
    </div>
  );
};

export default SectionTitle;
