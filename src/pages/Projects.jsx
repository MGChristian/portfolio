import Navbar from "../components/Navbar";
import Background from "../components/background";

export default function Projects() {
  return (
    <>
      <Navbar />
      <Background />
      <div className="mb-15 w-full max-w-[1300px] mx-auto px-4">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:min-h-fit">
          <div className="flex-column flex h-64 items-center justify-center lg:h-30">
            <h1 className="animate-slide-in unbounded text-4xl font-normal text-center text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-5xl">
              Check Our Works
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
