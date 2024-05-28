export default function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:items-center my-10">
      <div className="flex justify-center items-center">
        <img
          src="./contact-img/ContactFormIcon.png"
          alt="Contact Form"
          className="bg-cover lg:basis-1/2"
        />
      </div>
      <form className="contact--form flex flex-col gap-5 py-6 px-8 rounded-md shadow-md lg:basis-1/2">
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-transparent border border-gray-400 rounded-md p-3 focus:outline-none focus:border-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base" htmlFor="company">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="bg-transparent border border-gray-400 rounded-md p-3 focus:outline-none focus:border-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base" htmlFor="email">
            Company Name
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-gray-400 rounded-md p-3 focus:outline-none focus:border-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base" htmlFor="Phone Number">
            Mobile Number
          </label>
          <input
            type="number"
            id="Phone Number"
            className="bg-transparent border border-gray-400 rounded-md p-3 focus:outline-none focus:border-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm md:text-base" htmlFor="help-message">
            How can we help you
          </label>
          <textarea
            id="help-message"
            className="bg-transparent border border-gray-400 p-3 focus:outline-none focus:border-white"
          />
        </div>
        <button
          className="w-[fit-content] py-3 px-10 my-5 rounded-md shadow-md bg-violet-500"
          onClick={(e) => e.preventDefault()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
