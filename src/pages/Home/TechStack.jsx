import SectionTitle from "../../components/SectionTitle";

export default function TechStack() {
  return (
    <section className="p-10 md:p-16">
      <SectionTitle
        title="our tech stack"
        subText="Modern Technologies To Drive You Forward"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-16 mb-8 gap-10 px-4 md:px-16">
        <img
          src="./home-img/techIcon01.png"
          alt="Our Tech Stack"
          loading="lazy"
        />
        <img src="./home-img/techImg.png" alt="Tech Stack" loading="lazy" />
      </div>
    </section>
  );
}
