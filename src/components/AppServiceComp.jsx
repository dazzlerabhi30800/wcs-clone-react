export default function AppServiceComp({ data }) {
  return (
    <div className="app--service--comp text-center flex flex-col gap-10 rounded-md pt-6 mt-10">
      <h1 className="mx-auto text-xl md:text-3xl">{data.heading}</h1>
      <div className="flex overflow overflow-x-auto p-3 gap-10 scroll-smooth app--service--wrapper">
        {data.services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 text-center min-w-[150px] p-6"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover w-[130px] h-[70px]"
            />
            <p className="text-sm w-[fit-content] mx-auto">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
