import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

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
      <div>
        <section className="flex flex-col gap-12 lg:h-[calc(100vh-80px)]">
          <div className="flex h-64 items-center justify-center bg-gradient-to-b from-black from-10% via-gray-950 via-50% to-black to-90%">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About Synergy
            </h1>
          </div>
          <div className="flex max-w-full flex-wrap items-center justify-center gap-2 lg:flex-nowrap lg:px-8">
            <div className="flex h-96 max-w-[710px] flex-col gap-12 rounded-3xl bg-gray-700 p-6 pb-12 shadow-2xl">
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gray-400"></div>
                <h4 className="text-xl font-semibold text-white md:text-2xl">
                  Creating High Quality Digital Solutions
                </h4>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, ullam blanditiis? Laboriosam quas officiis excepturi
                molestiae et architecto dolore possimus doloribus officia? Magni
                tenetur reprehenderit, veniam a quasi debitis nostrum! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                sapiente debitis adipisci voluptate amet! Ipsa perspiciatis
                impedit, facilis eius unde sint exercitationem recusandae
                excepturi. Expedita labore beatae blanditiis unde optio!
              </p>
            </div>
            <div className="flex h-96 max-w-[710px] flex-col gap-12 rounded-3xl bg-gray-700 p-6 pb-12 shadow-2xl">
              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gray-400"></div>
                <h4 className="text-xl font-semibold text-white md:text-2xl">
                  Our Commitment
                </h4>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, ullam blanditiis? Laboriosam quas officiis excepturi
                molestiae et architecto dolore possimus doloribus officia? Magni
                tenetur reprehenderit, veniam a quasi debitis nostrum! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sed,
                provident facere amet numquam nisi eaque, et cupiditate,
                excepturi quam voluptatem ipsa voluptatibus. Id totam saepe
                aliquam! Mollitia illum quo debitis.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-48 max-w-[1200px]">
          <div className="mb-16 flex items-center gap-4">
            <hr className="w-36 rounded-2xl border-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              Our Experties.
            </h3>
          </div>
          <div className="mx-auto grid gap-2 lg:grid-cols-2">
            <Accordion />
          </div>
        </section>
      </div>
    </>
  );
}

function Accordion() {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  function handleToggleAccordion() {
    setToggleAccordion((t) => !t);
  }

  return (
    <>
      {accordionData.map((item, index) => {
        return (
          <div
            className={`group rounded-3xl bg-gray-700 hover:cursor-pointer lg:w-full ${index === accordionData.length - 1 && index % 2 == 0 ? "lg:col-span-2" : ""}`}
            key={item.key}
            onClick={handleToggleAccordion}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between p-4 text-white">
                <p className="transition-all duration-300 ease-in-out group-hover:translate-x-4 group-hover:text-blue-400">
                  {item.title}
                </p>
                <div className="rounded-sm bg-gray-400 p-2 transition-all duration-300 ease-in-out group-hover:bg-blue-400 group-hover:text-black">
                  <FaPlus />
                </div>
              </div>
              <div
                className={`transition-all duration-300 ${toggleAccordion == true ? "h-fit p-4" : "h-0 p-0"} text-white`}
              >
                <p
                  className={`${index === accordionData.length - 1 ? "m-auto max-w-6/8 text-justify" : ""} ${toggleAccordion == true ? "" : "hidden"} text-white`}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quos, qui culpa obcaecati consectetur blanditiis libero
                  impedit facere distinctio reiciendis reprehenderit quod
                  praesentium debitis nihil corporis asperiores suscipit sed
                  maiores adipisci. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam architecto quia blanditiis
                  cupiditate voluptates expedita consequatur dolorem! Voluptatum
                  eligendi quos.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
