const SectionTitle = ({ title, subText }) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      <p className="text-lg md:text-xl uppercase w-[fit-content] mx-auto font-medium border-2 rounded-sm py-3 px-10">
        {title}
      </p>
      <h2 className="font-bold text-[1.45rem] md:text-[1.8rem] lg:text-[2.1rem] mx-auto">
        {subText}
      </h2>
    </div>
  );
};

export default SectionTitle;
