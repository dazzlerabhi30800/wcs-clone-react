export default function Form() {
  return (
    <section className="form--section w-[93%] md:w-[90%] mx-auto flex flex-col md:flex-row py-10 gap-5 md:gap-0">
      <div className="flex flex-col gap-3 text-center justify-center items-center  md:basis-1/2 px-3">
        <img
          src="./logo.png"
          className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
          alt="Web Consultancy Services"
        />
        <p className="mt-1">Reach Out</p>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Ready to build Something Great ?
        </h1>
        <p className="mt-1">
          Partner with us to develop technology to grow your business.
        </p>
      </div>
      <form className="flex flex-col gap-8 p-6 grow">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="company name" placeholder="Company Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="phone number" placeholder="Mobile Number" />
        <textarea
          name="message"
          id="contact message"
          placeholder="How can we help you ?"
        />
        <button onClick={(e) => e.preventDefault()}>Send</button>
      </form>
    </section>
  );
}
