import Form from "../../components/Form";
import HeroComp from "../../components/HeroComp";
export default function BlogPage() {
  return (
    <main>
      <section>
        <HeroComp
          img="./blog-img/BlogHeroImage.png"
          heading="Blog"
          subHeading="What We've Got For you"
        />
      </section>
      <h2 className="text-2xl my-10 md:text-3xl lg:text-4xl font-bold border-b-2 mx-auto italic text-center w-[fit-content]">
        e-Commerce Web App
      </h2>
      <Form />
    </main>
  );
}
