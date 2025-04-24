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
      <div className="lg:px-6">
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
                className={`mx-4 flex h-20 w-52 items-center justify-around rounded-2xl bg-neutral-800/50 px-4 ${currentValue !== null && currentValue.ID === value.ID ? "bg-sky-400 text-black" : "text-white"}`}
              >
                <p className="satoshireg text-2xl font-normal">{value.value}</p>
              </div>
            );
          })}
        </Marquee>

        <div className="flex min-h-[250px] lg:min-h-[300px] items-center justify-center">
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
                className={`mx-4 flex h-20 w-52 items-center justify-around rounded-2xl bg-neutral-800/75 px-4 ${currentValue !== null && currentValue.ID === value.ID ? "bg-sky-400 text-black" : "text-white"}`}
              >
                <p className="satoshireg text-2xl font-normal">{value.value}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
}
