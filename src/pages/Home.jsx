import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LuSquareMenu } from "react-icons/lu";
import { TbCircleLetterG } from "react-icons/tb";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 50,
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 lg:p-0">
        <section className="mb-16 flex flex-col gap-12 px-1 lg:mb-0 lg:h-[calc(100vh-80px)] lg:max-h-[900px]">
          <div className="fixed -z-1 h-72 w-full bg-gradient-to-b from-neutral-950 from-10% via-neutral-900 via-50% to-neutral-950 to-90% text-white"></div>
          <div className="mt-25 flex h-64 flex-col items-center justify-center">
            <p1 className="animate-slide-in satoshireg mb-3 text-lg text-white">
              CREATIVE MINDS, SMART SOLUTIONS
            </p1>

            <h1 className="animate-slide-in unbounded max-w-200 text-center text-5xl leading-none font-normal text-white text-shadow-black text-shadow-lg md:text-6xl">
              WE BUILD,{" "}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 -rotate-1 skew-y-2 transform bg-sky-400"
                  aria-hidden="true"
                ></span>
                <span className="relative px-1 text-black text-shadow-none">
                  DESIGN,{" "}
                </span>
              </span>{" "}
              AND INNOVATE TOGETHER
            </h1>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="mx-auto mb-10 flex max-w-[1300px] flex-col"
        >
          <div className="animate-slide-in-bottom flex flex-col items-center gap-4 lg:flex-row">
            <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
            <h3 className="unbounded text-2xl font-normal text-white md:text-3xl lg:text-4xl">
              The Minds Behind the Work.
            </h3>
          </div>
          <div className="animate-slide-in-bottom ml-0 flex flex-col items-center gap-4 lg:ml-[165px] lg:flex-row">
            <p className="text-md md:text-md lg:text-md satoshireg font-thin text-gray-100">
              WHO WE ARE, WHAT WE DO AND OUR PURPOSE
            </p>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="mx-auto max-w-[1300px] px-2 py-10"
        >
          <div className="-mx-2 flex flex-wrap">
            <div className="mb-2 w-full px-1 md:w-1/2">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-stone-900 p-6 text-white shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="unbounded text-xl font-normal md:text-2xl">
                  Who We Are
                </h4>
                <p className="text-md satoshireg mt-[50px] font-normal">
                  We are a dynamic team of passionate individuals, united by our
                  love for creativity, technology, and problem-solving. With
                  diverse skills and a shared vision, we collaborate to bring
                  innovative ideas to life.
                </p>
              </div>
            </div>
            <div className="mb-2 w-full px-1 md:w-1/2">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-stone-900 p-6 pb-12 text-white shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                  <LuSquareMenu
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="unbounded text-xl font-normal md:text-2xl">
                  What We Do
                </h4>
                <p className="text-md satoshireg mt-[50px] font-normal">
                  Our team specializes in designing and developing projects that
                  blend creativity with functionality. Whether it’s building
                  solutions, crafting unique experiences, or solving real-world
                  challenges, we work together to achieve excellence.
                </p>
              </div>
            </div>
            <div className="mb-2 w-full px-1 md:w-1/2">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-stone-900 p-6 text-white shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="unbounded text-xl font-normal md:text-2xl">
                  Our Mission
                </h4>
                <p className="text-md satoshireg mt-[50px] font-normal">
                Our mission is to collaborate, innovate, and create solutions that bring ideas to life. 
                Through teamwork, creativity, and technology, we aim to develop impactful projects that solve real-world challenges and inspire growth.
                </p>
              </div>
            </div>
            <div className="mb-2 w-full px-1 md:w-1/2">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-stone-900 p-6 text-white shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="unbounded text-xl font-normal md:text-2xl">
                  Our Vision
                </h4>
                <p className="text-md satoshireg mt-[50px] font-normal">
                We envision a future where creativity and technology work hand in hand to shape meaningful solutions. 
                Our goal is to continuously learn, evolve, and push boundaries, making a lasting impact through our work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  );
}
