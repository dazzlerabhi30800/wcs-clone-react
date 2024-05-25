const SectionTitle = ({ title, subText }) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <p className="md:text-xl uppercase">{title}</p>
      <h2 className="font-bold text-3xl md:text-[2rem] lg:text-[2.5rem]">{subText}</h2>
    </div>
  );
};

export default SectionTitle;
