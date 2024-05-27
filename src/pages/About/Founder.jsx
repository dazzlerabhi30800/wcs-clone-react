export default function Founder() {
  return (
    <div className="flex gap-10 items-center md:gap-20 mt-20 mb-12 justify-center">
      <div className="flex flex-col gap-8 items-center h-full justify-between">
        <h4 className="text-xl md:text-2xl">Founder</h4>
        <img
          src="./about-img/ProfileImg01.png"
          className="object-cover border border-gray-500"
          alt="Aniket Shahare"
          style={{ width: "100%", maxWidth: "300px" }}
        />
        <h5 className="text-lg md:text-xl">Aniket Shahare</h5>
      </div>
      <div className="flex flex-col gap-8 items-center h-full justify-between">
        <h4 className="text-xl md:text-2xl">Co-Founder</h4>
        <img
          src="./about-img/ProfileImg02.png"
          className="object-cover border border-gray-500"
          style={{ width: "100%", maxWidth: "300px" }}
          alt="Aniket Shahare"
        />
        <h5 className="text-lg md:text-xl">Ankita Bandre</h5>
      </div>
    </div>
  );
}
