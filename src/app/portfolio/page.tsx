import Card from "../components/Card";

export default function page() {
  return (
    <main className="bg-background h-[100dvh] overflow-x-hidden text-main pt-[128px] flex flex-col items-center justify-start gap-[40px] px-[25px] pb-4">
      <h2 className="font-bold text-[28px]">Portfolio</h2>
      <section className="flex flex-col gap-[60px]">
        <Card
          title="Project One"
          tech="Next.js, TailwindCSS, GSAP, Git, Vercel"
          description="An exmaple website for a car garage with built in features such as a price estimator etc."
        />
        <Card
          title="Project One"
          tech="Next.js, TailwindCSS, GSAP, Git, Vercel"
          description="An exmaple website for a car garage with built in features such as a price estimator etc."
        />
      </section>
    </main>
  );
}
