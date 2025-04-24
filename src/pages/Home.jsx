import Marquee from "react-fast-marquee";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { MdOutlineRocket } from "react-icons/md";
import { TbCircleLetterG } from "react-icons/tb";
import Client from "../assets/client1.png";
import Group from "../assets/group.png";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

import { FaBullseye, FaEye, FaJava, FaReact } from "react-icons/fa";
import {
  SiArduino,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";
import Background from "../components/background";

const technologiesList = [
  {
    ID: "technology-1",
    TechnologyName: "HTML",
    TechnologyIcon: <SiHtml5 size={50} />,
  },
  {
    ID: "technology-2",
    TechnologyName: "CSS",
    TechnologyIcon: <SiCss3 size={50} />,
  },
  {
    ID: "technology-3",
    TechnologyName: "JavaScript",
    TechnologyIcon: <SiJavascript size={50} />,
  },
  {
    ID: "technology-4",
    TechnologyName: "MySQL",
    TechnologyIcon: <SiMysql size={50} />,
  },
  {
    ID: "technology-5",
    TechnologyName: "PHP",
    TechnologyIcon: <SiPhp size={50} />,
  },
  {
    ID: "technology-6",
    TechnologyName: "Java",
    TechnologyIcon: <FaJava size={50} />,
  },
  {
    ID: "technology-7",
    TechnologyName: "Arduino",
    TechnologyIcon: <SiArduino size={50} />,
  },
  {
    ID: "technology-8",
    TechnologyName: "TailwindCSS",
    TechnologyIcon: <SiTailwindcss size={50} />,
  },
  {
    ID: "technology-9",
    TechnologyName: "Bootstrap",
    TechnologyIcon: <SiBootstrap size={50} />,
  },
  {
    ID: "technology-10",
    TechnologyName: "React.js",
    TechnologyIcon: <FaReact size={50} />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8">
        <Background />
        <HeroSection />
        <TeamIntroduction />
        <Technologies />
        <Form />
        <Footer />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex max-h-fit min-h-fit flex-col items-center justify-between gap-8 bg-linear-to-b from-transparent from-40% to-sky-400 px-1 lg:mb-0">
      <div className="mt-10 flex h-fit flex-col items-center justify-center gap-4">
        <p1 className="animate-slide-in satoshireg mb-3 text-lg text-white">
          CREATIVE MINDS, SMART SOLUTIONS
        </p1>

        <h1 className="animate-slide-in unbounded max-w-200 text-center text-5xl leading-none font-normal text-white text-shadow-black text-shadow-lg md:text-6xl">
          WE BUILD,
          <span className="relative inline-block">
            <span
              className="absolute inset-0 -rotate-1 skew-y-2 transform bg-sky-400"
              aria-hidden="true"
            ></span>
            <span className="relative px-1 text-black text-shadow-none">
              DESIGN,
            </span>
          </span>
          AND INNOVATE TOGETHER
        </h1>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-400">
          <IoMegaphoneOutline size={50} className="-rotate-20" />
        </div>
      </div>

      <div className="unbounded absolute bottom-32 w-full overflow-hidden text-9xl font-semibold text-white/80">
        <Marquee className="overflow-hidden" speed={200}>
          <p className="mx-8">Best Team Developer</p>
          <p className="mx-8">Best Team Developer</p>
          <p className="mx-8">Best Team Developer</p>
        </Marquee>
      </div>
      <div className="z-2 min-h-64">
        <img src={Group} className="h-full" />
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <>
      <section
        data-aos="fade-up"
        className="mx-auto mt-[50px] flex w-full max-w-[1300px] flex-col gap-4 px-4 max-md:text-center"
      >
        <div className="animate-slide-in-bottom flex flex-col items-center justify-center gap-4">
          <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
          <h3 className="unbounded text-2xl font-normal text-white md:text-3xl lg:text-4xl">
            Technologies.
          </h3>
        </div>
        <Marquee
          speed={200}
          className="mt-[20px] mb-[50px] rounded-2xl border border-neutral-800"
        >
          {technologiesList.map((technology, index) => {
            return (
              <div
                key={technology.ID}
                className="mx-4 flex h-24 w-52 items-center justify-around rounded-2xl bg-neutral-800/75 px-4 text-white"
              >
                <div>{technology.TechnologyIcon}</div>
                <p className="satoshireg text-2xl font-normal">
                  {technology.TechnologyName}
                </p>
              </div>
            );
          })}
        </Marquee>
      </section>
      <section className="overflow-hidden">
        <div
          className="relative mb-[50px] flex h-[800px] w-full flex-col items-center max-md:h-[200vh] max-md:max-h-[1300px]"
          data-aos="fade-up"
        >
          <div className="absolute z-5 flex flex-wrap pt-4 text-white">
            <div className="mx-auto flex items-center">
              <div className="animate-bubble-animation-reverse-slow flex h-48 w-48 flex-col items-center justify-center rounded-full bg-neutral-400/20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">15+</h2>
                <p>Years of Experience</p>
              </div>
              <div className="animate-bubble-animation-slow flex h-48 w-48 flex-col items-center justify-center rounded-full bg-neutral-400/20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">15+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="mx-auto flex items-center">
              <div className="animate-bubble-animation-reverse flex h-48 w-48 flex-col items-center justify-center rounded-full bg-neutral-400/20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">15+</h2>
                <p>Years of Experience</p>
              </div>
              <div className="animate-bubble-animation flex h-48 w-48 flex-col items-center justify-center rounded-full bg-neutral-400/20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">15+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="absolute z-3 h-full w-full bg-radial from-transparent from-20% to-black"></div>
          <div className="absolute z-2 h-full w-full bg-sky-400/50 brightness-70"></div>
          <img
            src={Client}
            className="b h-full w-full object-cover object-center contrast-150"
          />
          <div className="absolute bottom-8 z-5 flex w-full max-w-[1300px] flex-wrap justify-center gap-4 px-8 text-center md:flex-nowrap lg:justify-between">
            <div className="flex h-60 w-96 max-w-full flex-col items-center justify-around rounded-2xl border py-4 backdrop-blur-2xl max-md:grow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-sky-400 bg-neutral-900 text-sky-400">
                <MdOutlineRocket size={50} />
              </div>
              <div>
                <h4 className="font-bold text-white md:text-2xl lg:text-3xl">
                  Proven Track Record
                </h4>
                <p className="text-gray-400">
                  We have built a reputation as a trusted and reliable partner
                  in achieving business success.
                </p>
              </div>
            </div>
            <div className="flex h-60 w-96 max-w-full flex-col items-center justify-around rounded-2xl border py-4 backdrop-blur-2xl max-md:grow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-sky-400 bg-neutral-900 text-sky-400">
                <MdOutlineRocket size={50} />
              </div>
              <div>
                <h4 className="font-bold text-white md:text-2xl lg:text-3xl">
                  Proven Track Record
                </h4>
                <p className="text-gray-400">
                  We have built a reputation as a trusted and reliable partner
                  in achieving business success.
                </p>
              </div>
            </div>
            <div className="flex h-60 w-96 max-w-full flex-col items-center justify-around rounded-2xl border py-4 backdrop-blur-2xl max-md:grow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-sky-400 bg-neutral-900 text-sky-400">
                <MdOutlineRocket size={50} />
              </div>
              <div>
                <h4 className="font-bold text-white md:text-2xl lg:text-3xl">
                  Proven Track Record
                </h4>
                <p className="text-gray-400">
                  We have built a reputation as a trusted and reliable partner
                  in achieving business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TeamIntroduction() {
  return (
    <>
      <section
        data-aos="fade-up"
        className="mx-auto mt-[80px] flex w-full max-w-[1300px] flex-col px-4 max-md:text-center"
      >
        <div className="animate-slide-in-bottom flex flex-col items-center gap-4 lg:flex-row">
          <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
          <h3 className="unbounded text-2xl font-normal text-white md:text-3xl lg:text-4xl">
            The Minds Behind the Work.
          </h3>
        </div>
        <div className="animate-slide-in-bottom mb-[20px] ml-0 flex flex-col items-center gap-4 lg:ml-[165px] lg:flex-row">
          <p className="text-md md:text-md lg:text-md satoshireg font-thin text-gray-100">
            WHO WE ARE, WHAT WE DO AND OUR PURPOSE
          </p>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="mx-auto w-full max-w-[1300px] px-3"
      >
        <div className="flex flex-wrap w-full gap-y-1 md:gap-y-0">
          <div className="mb-2 w-full px-1 md:w-1/2">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-linear-to-b from-stone-600/20 to-stone-900/25 p-6 text-white shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700/50">
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
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-linear-to-b from-stone-600/20 to-stone-900/25 p-6 pb-12 text-white shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700/50">
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
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-linear-to-b from-stone-600/20 to-stone-900/25 p-6 text-white shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700/50">
                <FaBullseye
                  size={40}
                  className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                />
              </div>
              <h4 className="unbounded text-xl font-normal md:text-2xl">
                Our Mission
              </h4>
              <p className="text-md satoshireg mt-[50px] font-normal">
                Our mission is to collaborate, innovate, and create solutions
                that bring ideas to life. Through teamwork, creativity, and
                technology, we aim to develop impactful projects that solve
                real-world challenges and inspire growth.
              </p>
            </div>
          </div>
          <div className="mb-2 w-full px-1 md:w-1/2">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-700 bg-linear-to-b from-stone-600/20 to-stone-900/25 p-6 text-white shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700/50">
                <FaEye
                  size={40}
                  className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                />
              </div>
              <h4 className="unbounded text-xl font-normal md:text-2xl">
                Our Vision
              </h4>
              <p className="text-md satoshireg mt-[50px] font-normal">
                We envision a future where creativity and technology work hand
                in hand to shape meaningful solutions. Our goal is to
                continuously learn, evolve, and push boundaries, making a
                lasting impact through our work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
