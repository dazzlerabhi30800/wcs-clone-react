import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[url('./contact-img/ContactHeroImage.png')] h-[40vh] bg-cover bg-no-repeat">
        Contact
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
