import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuSquareMenu } from "react-icons/lu";
import { TbCircleLetterG } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Background from "../components/background";

const accordionData = [
  {
    key: "accordion1",
    title: "01. Web Developer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    key: "accordion2",
    title: "02. Web Developer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    key: "accordion3",
    title: "03. Web Developer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    key: "accordion4",
    title: "04. Web Developer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    key: "accordion5",
    title: "05. Web Developer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <Background />
      <section className="mb-16 flex flex-col gap-12 p-4 lg:mb-0 lg:h-[calc(100vh-80px)] lg:max-h-[900px]">
        <div className="flex-column flex h-64 items-center justify-center">
          <h1 className="animate-slide-in unbounded text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-6xl">
            About Synergy
          </h1>
        </div>
        <div className="animate-slide-in-bottom flex min-h-fit max-w-full flex-wrap items-center justify-center gap-2 lg:h-96 lg:flex-nowrap lg:px-8">
          <div className="flex h-full max-w-[710px] flex-col gap-12 rounded-3xl border border-stone-700 bg-stone-900 p-6 shadow-2xl lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                <TbCircleLetterG
                  size={50}
                  className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                />
              </div>
              <h4 className="unbounded text-xl font-normal text-white md:text-2xl">
                Our Purpose
              </h4>
            </div>
            <p className="text-md satoshireg font-normal text-white">
            We believe in the power of teamwork, innovation, and continuous learning.
            Our commitment to quality, efficiency, and impactful solutions drives us to push boundaries and turn ideas into reality.
            </p>
          </div>
          <div className="flex h-full max-w-[710px] flex-col gap-12 rounded-3xl border border-stone-700 bg-stone-900 p-6 pb-12 shadow-2xl lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-500 bg-neutral-700">
                <LuSquareMenu
                  size={50}
                  className="text-sky-400 drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
                />
              </div>
              <h4 className="unbounded text-xl font-normal text-white md:text-2xl">
                Our Commitment
              </h4>
            </div>
            <p className="text-md satoshireg font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, ullam blanditiis? Laboriosam quas officiis excepturi
              molestiae et architecto dolore possimus doloribus officia? Magni
              tenetur reprehenderit, veniam a quasi debitis nostrum! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sed, provident facere
              amet numquam nisi eaque, et cupiditate, excepturi quam voluptatem
              ipsa voluptatibus. Id totam saepe aliquam! Mollitia illum quo
              debitis.
            </p>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="mx-auto mt-26 mb-15 w-full max-w-[1300px] px-4"
      >
        <div className="animate-slide-in-bottom mb-16 flex items-center gap-4">
          <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
          <h3 className="unbounded text-2xl font-normal text-white md:text-3xl lg:text-4xl">
            Our Experties.
          </h3>
        </div>
        <div className="unbounded mx-auto grid gap-2 lg:grid-cols-2">
          <Accordion />
        </div>
      </section>
    </>
  );
}

function Accordion() {
  const [selected, setSelected] = useState([]);

  function handleSelection(selectedAccordion) {
    let copySelected = [...selected];
    const findIndexOfCurrentId = copySelected.indexOf(selectedAccordion);

    if (findIndexOfCurrentId === -1) {
      copySelected.push(selectedAccordion);
    } else {
      copySelected.splice(findIndexOfCurrentId, 1);
    }

    setSelected(copySelected);
  }

  return (
    <>
      {accordionData.length != 0
        ? accordionData.map((item, index) => {
            return (
              <div
                className={`group self-start rounded-3xl border hover:cursor-pointer lg:w-full ${selected.indexOf(item.key) !== -1 ? "border-neutral-900 bg-[rgba(23,23,23,0.5)]" : "border-neutral-600 bg-neutral-800"} ${index === accordionData.length - 1 && index % 2 == 0 ? "lg:col-span-2" : ""}`}
                key={item.key}
                // onClick={handleToggleAccordion}
                onClick={() => handleSelection(item.key)}
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between p-4 text-white">
                    <p
                      className={`font-light transition-all duration-300 ease-in-out ${selected.indexOf(item.key) !== -1 ? "text-sky-400" : "group-hover:translate-x-4 group-hover:text-sky-400"}`}
                    >
                      {item.title}
                    </p>
                    <div className="rounded-xl bg-neutral-700 p-2 transition-all duration-300 ease-in-out group-hover:bg-sky-400 group-hover:text-black">
                      <FaPlus />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out ${selected.indexOf(item.key) !== -1 ? "h-fit p-4" : "h-0 p-0"} text-white`}
                  >
                    <p
                      className={`${index === accordionData.length - 1 ? "m-auto max-w-6/8 text-justify" : ""} ${selected.indexOf(item.key) === -1 && "hidden"} text-md satoshireg font-normal text-white`}
                    >
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quos, qui culpa obcaecati consectetur blanditiis libero
                      impedit facere distinctio reiciendis reprehenderit quod
                      praesentium debitis nihil corporis asperiores suscipit sed
                      maiores adipisci. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Laboriosam architecto quia blanditiis
                      cupiditate voluptates expedita consequatur dolorem!
                      Voluptatum eligendi quos.
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}
