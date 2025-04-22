import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Developer from "../assets/develper.png";
import TeamPicture from "../assets/team.png";
import Navbar from "../components/Navbar";
import Background from "../components/background";

const members = [
  {
    ID: "member-1",
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Front End",
  },
  {
    ID: "member-2",
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Front End",
  },
  {
    ID: "member-3",
    memberName: "Christian Gutierrez",
    memberRole: "Manager",
    memberRoleName: "Project",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <Background />
      <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:h-[calc(100vh-80px)] lg:max-h-[900px]">
        <div className="h-full w-full p-0 lg:p-6">
          <div className="animate-slide-in-bottom relative flex h-full flex-col items-center gap-12 rounded-3xl shadow-2xl">
            <img
              src={TeamPicture}
              className="block h-full w-full rounded-4xl bg-linear-to-b from-transparent to-neutral-900 object-cover object-top"
            />
            <div className="absolute h-full w-full rounded-4xl bg-linear-to-b from-transparent to-black"></div>
            <h1 className="unbounded absolute bottom-6 text-center text-3xl font-normal md:text-5xl lg:bottom-8 lg:text-6xl">
              <span className="text-white">Hey There! Welcome to</span>
              <br />
              <span className="text-sky-400">Synergy!</span>
            </h1>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="relative flex h-fit w-full items-center justify-center lg:h-[100vh] lg:max-h-[1920px]"
      >
        <h1 className="unbounded mt-10 text-[18vw] leading-none font-normal text-white lg:text-[20vw]">
          VALUES
        </h1>
        <div className="md:80 absolute h-95 w-95 translate-y-63 rounded-full border border-stone-500 backdrop-blur-sm md:h-80 md:w-80 lg:h-110 lg:w-110 lg:translate-y-8"></div>
      </section>
      <section
        data-aos="fade-up"
        className="mx-auto mt-130 mb-24 flex max-w-[1300px] flex-col items-center justify-center gap-4 lg:mt-20"
      >
        <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
        <h3 className="unbounded flex flex-row text-center text-3xl font-normal text-white md:text-3xl lg:text-5xl">
          Say Hello to Our <br className="hidden md:block" />
          Squad
        </h3>
        <p className="satoshireg text-center text-lg text-neutral-300 lg:text-xl">
          Get ready to meet the faces behind the magic, the dreamers, the
          <br className="hidden md:block" /> doers, and the unstoppable force
          driving our success.
        </p>
      </section>
      <Members />
    </>
  );
}

function Members() {
  const [clickedMembers, setClickedMembers] = useState([]);

  function handleClickMember(memberID) {
    const clickedMembersCopy = [...clickedMembers];
    const findClickedMemberIndex = clickedMembersCopy.indexOf(memberID);
    if (findClickedMemberIndex === -1) {
      clickedMembersCopy.push(memberID);
    } else {
      clickedMembersCopy.splice(findClickedMemberIndex, 1);
    }
    setClickedMembers(clickedMembersCopy);
    console.log(memberID);
  }

  return (
    <section
      data-aos="fade-up"
      className="mx-auto mb-48 flex max-w-[1300px] flex-wrap items-center justify-center gap-3"
    >
      {members.map((member) => {
        return (
          <div
            key={member.ID}
            className="group relative z-5 flex h-fit max-w-[400px] grow flex-col items-center overflow-hidden rounded-4xl bg-linear-to-b from-neutral-200/10 to-neutral-900/25 pt-4 backdrop-blur-sm"
          >
            <h2
              className={`unbounded absolute left-0 z-3 text-center text-3xl font-semibold text-sky-400 transition-all duration-500 ease-in-out group-hover:-translate-y-4 md:text-4xl lg:text-5xl ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
            >
              {member.memberRoleName}
            </h2>
            <p
              className={`unbounded absolute top-16 right-0 z-3 text-2xl text-white uppercase transition-all duration-500 ease-in-out group-hover:-translate-y-4 ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
            >
              {member.memberRole}
            </p>
            <img
              src={Developer}
              className={`z-2 mx-auto mt-16 h-100 w-[70%] transition-all duration-500 ease-in-out ${clickedMembers.indexOf(member.ID) === -1 ? "grayscale group-hover:translate-y-4" : ""}`}
            />
            <div className="absolute bottom-4 z-3 flex w-full justify-center gap-4">
              <div
                className="bottom-0 z-2 rounded-xl bg-white p-2"
                onClick={() => handleClickMember(member.ID)}
              >
                <FaPlus className="text-black" size={30} />
              </div>
              <div
                className={`bottom-0 rounded-xl bg-white p-2 ${clickedMembers.indexOf(member.ID) === -1 ? "absolute" : ""}`}
              >
                <FaLinkedin className="text-black" size={30} />
              </div>
              <div
                className={`bottom-0 rounded-xl bg-white p-2 ${clickedMembers.indexOf(member.ID) === -1 ? "absolute" : ""}`}
              >
                <FaFacebookSquare className="text-black" size={30} />
              </div>
              <div
                className={`bottom-0 rounded-xl bg-white p-2 ${clickedMembers.indexOf(member.ID) === -1 ? "absolute" : ""}`}
              >
                <FaTwitterSquare className="text-black" size={30} />
              </div>
            </div>
            <div
              className={`absolute top-20 rotate-180 rounded-full transition-all duration-300 ease-in-out ${clickedMembers.indexOf(member.ID) === -1 ? "h-0 w-0" : "h-[500px] w-[500px] bg-sky-400"}`}
            ></div>
          </div>
        );
      })}
    </section>
  );
}
