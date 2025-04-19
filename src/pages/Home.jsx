import { LuSquareMenu } from "react-icons/lu";
import { TbCircleLetterG } from "react-icons/tb";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  return( 
    <>
      <Navbar />
      <div className="p-4 lg:p-0">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:h-[calc(100vh-80px)]">
          <div className="fixed -z-1 h-72 w-full bg-gradient-to-b from-neutral-950 from-10% via-neutral-900 via-50% to-neutral-950 to-90% text-white"></div>
          <div className="flex flex-col h-64 items-center justify-center mt-25">
            <p1 className="animate-slide-in text-lg text-white satoshireg mb-3">
              CREATIVE MINDS, SMART SOLUTIONS
            </p1>

            <h1 className="animate-slide-in text-5xl md:text-6xl font-normal leading-none text-center text-white unbounded max-w-200 text-shadow-black text-shadow-lg">
              WE BUILD,{" "}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 bg-sky-400 skew-y-2 transform -rotate-1"
                  aria-hidden="true"
                ></span>
                <span className="relative px-1 text-black text-shadow-none">DESIGN, </span>
              </span>
              {" "}AND INNOVATE TOGETHER
            </h1>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-[1300px]">
          <div className="animate-slide-in-bottom flex items-center gap-4">
            <hr className="w-36 h-6 rounded-2xl border-12 text-sky-400" />
            <h3 className="text-2xl font-normal text-white md:text-3xl lg:text-4xl unbounded">
              The Minds Behind the Work.
            </h3>
          </div>
          <div className="animate-slide-in-bottom flex items-center gap-4 ml-[165px]">
            <p className="text-md font-thin text-gray-100 md:text-md lg:text-md satoshireg">
              WHO WE ARE, WHAT WE DO AND OUR PURPOSE
            </p>
          </div>
        </section>

        <section className="px-2 py-10 max-w-[1300px] mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-1 mb-2">
              <div className="h-full flex flex-col gap-4 rounded-3xl bg-stone-900 p-6 shadow-2xl text-white border border-stone-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-700 border border-neutral-500">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="text-xl font-normal md:text-2xl unbounded">
                  Who We Are
                </h4>
                <p className="text-md font-normal satoshireg mt-[50px]">
                  We are a dynamic team of passionate individuals, united by our love for creativity, technology, and problem-solving. 
                  With diverse skills and a shared vision, we collaborate to bring innovative ideas to life.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-1 mb-2">
              <div className="h-full flex flex-col gap-4 rounded-3xl bg-stone-900 p-6 pb-12 shadow-2xl text-white border border-stone-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-700 border border-neutral-500">
                  <LuSquareMenu
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="text-xl font-normal md:text-2xl unbounded">
                  What We Do
                </h4>
                <p className="text-md font-normal satoshireg mt-[50px]">
                  Our team specializes in designing and developing projects that blend creativity with functionality. 
                  Whether it’s building solutions, crafting unique experiences, or solving real-world challenges, we work together to achieve excellence.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-1 mb-2">
              <div className="h-full flex flex-col gap-4 rounded-3xl bg-stone-900 p-6 shadow-2xl text-white border border-stone-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-700 border border-neutral-500">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="text-xl font-normal md:text-2xl unbounded">
                  Our Purpose
                </h4>
                <p className="text-md font-normal satoshireg mt-[50px]">
                We believe in the power of teamwork, innovation, and continuous learning. 
                Our commitment to quality, efficiency, and impactful solutions drives us to push boundaries and turn ideas into reality.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-1 mb-2">
              <div className="h-full flex flex-col gap-4 rounded-3xl bg-stone-900 p-6 shadow-2xl text-white border border-stone-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-700 border border-neutral-500">
                  <TbCircleLetterG
                    size={50}
                    className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                  />
                </div>
                <h4 className="text-xl font-normal md:text-2xl unbounded">
                  Social Media Marketing
                </h4>
                <p className="text-md font-normal satoshireg mt-[50px]">
                Engage and expand your audience across social media platforms with our tailored marketing strategies. 
                From content creation to ad campaigns, we help you connect with your target demographic.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  )
}
