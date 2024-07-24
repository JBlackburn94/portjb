import Button from "../components/Button";

export default function page() {
  return (
    <main className="bg-background h-[100dvh] overflow-x-hidden text-main pt-[128px] flex flex-col items-center justify-start gap-[40px]">
      <h2 className="font-bold text-[28px]">Portfolio</h2>
      <section className="flex flex-col gap-[10px]">
        <div className="bg-accent min-w-[380px] min-h-[200px]"></div>
        <h3 className="font-semibold text-[20px]">Card Title</h3>
        <p>Tech Used</p>
        <p>Card Description</p>
        <span className="flex gap-[20px]">
          <Button text="GitHub" href="/" />
          <Button text="Live Site" href="/" />
        </span>
      </section>
    </main>
  );
}
