import { useState } from "react";
import Marquee from "react-fast-marquee";

const valuesList = [
  {
    ID: "value-1",
    value: "Customer Support",
  },
  {
    ID: "value-2",
    value: "Passion",
  },
  {
    ID: "value-3",
    value: "Positive Experience",
  },
  {
    ID: "value-4",
    value: "Trustworthiness",
  },
  {
    ID: "value-5",
    value: "Long-Term Relationships",
  },
  {
    ID: "value-6",
    value: "Customer Focus",
  },
  {
    ID: "value-7",
    value: "Innovation",
  },
  {
    ID: "value-8",
    value: "Collaboration",
  },
  {
    ID: "value-9",
    value: "Personalization",
  },
  {
    ID: "value-10",
    value: "Reliability",
  },
  {
    ID: "value-11",
    value: "Quality",
  },
];

export default function Values() {
  const [currentValue, setCurrentValue] = useState(null);
  function handleCurrentValue(value) {
    setCurrentValue(value);
  }
  return (
    <>
      <Marquee
        autoFill
        speed={50}
        className="rounded-2xl border border-neutral-800"
      >
        {valuesList.map((value) => {
          return (
            <div
              key={value.ID}
              onMouseEnter={() => handleCurrentValue(value)}
              className={`mx-4 flex h-20 w-52 items-center justify-around rounded-2xl bg-neutral-800/50 px-4 select-none ${currentValue !== null && currentValue.ID === value.ID ? "bg-sky-400 text-black" : "text-white"}`}
            >
              <p className="satoshireg text-2xl font-normal">{value.value}</p>
            </div>
          );
        })}
      </Marquee>

      <div className="flex min-h-[300px] items-center justify-center">
        <h1 className="unbounded text-[7vw] leading-none font-normal text-white">
          {currentValue !== null && currentValue.value
            ? currentValue.value
            : "VALUES"}
        </h1>
      </div>

      <Marquee
        autoFill
        speed={50}
        direction="right"
        className="rounded-2xl border border-neutral-800"
      >
        {valuesList.map((value) => {
          return (
            <div
              key={value.ID}
              onMouseEnter={() => handleCurrentValue(value)}
              className={`mx-4 flex h-20 w-52 items-center justify-around rounded-2xl bg-neutral-800/75 px-4 select-none ${currentValue !== null && currentValue.ID === value.ID ? "bg-sky-400 text-black" : "text-white"}`}
            >
              <p className="satoshireg text-2xl font-normal">{value.value}</p>
            </div>
          );
        })}
      </Marquee>
    </>
  );
}

// import Matter from "matter-js";
// import { useEffect } from "react";

// export default function Values() {
//   useEffect(() => {
//     //Module aliases
//     const Engine = Matter.Engine,
//       World = Matter.World,
//       Render = Matter.Render,
//       Runner = Matter.Runner,
//       Bodies = Matter.Bodies,
//       Composite = Matter.Composite;

//     //Create Engine
//     const engine = Engine.create();

//     // create a renderer
//     const render = Render.create({
//       element: document.getElementById("hello"),
//       engine: engine,
//       options: {
//         width: 440,
//         height: 440,
//         wireframeBackground: "transparent",
//         showAngleIndicator: true,
//       },
//     });

//     // create two boxes and a ground
//     const circle = Bodies.circle(200, 0, 50);
//     const circle2 = Bodies.circle(200, 0, 50);
//     const circle3 = Bodies.circle(200, 0, 50);
//     const circle4 = Bodies.circle(200, 0, 50);
//     const circle5 = Bodies.circle(200, 0, 50);
//     const left = Bodies.rectangle(-50, 220, 100, 440, { isStatic: true });
//     const circleBG = Bodies.circle(25, 405, 50, { isStatic: true });
//     const circleBG2 = Bodies.circle(415, 405, 50, { isStatic: true });
//     const right = Bodies.rectangle(490, 220, 100, 440, { isStatic: true });
//     const ground = Bodies.rectangle(220, 470, 440, 60, { isStatic: true });

//     // add all of the bodies to the world
//     Composite.add(engine.world, [
//       circle,
//       circle2,
//       circle3,
//       circle4,
//       circle5,
//       circleBG,
//       circleBG2,
//       ground,
//       left,
//       right,
//     ]);

//     // run the renderer
//     Render.run(render);

//     // create runner
//     const runner = Runner.create();

//     // run the engine
//     Runner.run(runner, engine);
//   }, []);

//   return (
//     <>
//       <div
//         id="hello"
//         className="md:80 absolute h-95 w-95 translate-y-63 overflow-hidden rounded-full border border-stone-500 backdrop-blur-sm md:h-80 md:w-80 lg:h-110 lg:w-110 lg:translate-y-8"
//       ></div>
//     </>
//   );
// }
