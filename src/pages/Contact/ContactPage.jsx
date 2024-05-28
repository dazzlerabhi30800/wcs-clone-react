import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1611001897293-561e0c30f938?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
            ")",
        }}
        className="flex items-center h-[40vh] md:h-[50vh] lg:h-[60vh] bg-[length:100%_250px] sm:bg-[length:100%_300px] md:bg-cover bg-no-repeat"
      >
        <h1 className="m-5 font-bold text-xl md:text-3xl py-1 border-b-2">Contact Us</h1>
      </section>
      <section className="p-10 md:p-16 flex flex-col gap-10">
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-medium">
          Complete the form below to tell us about your business. We will get in
          touch with you as soon as possible
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
