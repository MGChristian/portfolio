import TeamPicture from "../assets/team.png";
import Developer from "../assets/develper.png";
import Navbar from "../components/Navbar";
import { FaPlus } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const members = [
  {
    ID: 1,
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Front End",
  },
  {
    ID: 2,
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Front End",
  },
  {
    ID: 3,
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Front End",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="p-4 lg:p-0">
        <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:h-[calc(100vh-80px)] lg:max-h-[900px]">
          <div className="fixed -z-1 h-72 w-full bg-gradient-to-b from-neutral-950 from-10% via-neutral-900 via-50% to-neutral-950 to-90%"></div>
          <div className="h-full w-full p-0 lg:p-6">
            <div className="animate-slide-in-bottom relative flex h-full flex-col items-center gap-12 rounded-3xl shadow-2xl">
              <img
                src={TeamPicture}
                className="block h-full w-full rounded-2xl bg-linear-to-b from-transparent to-neutral-900 object-cover object-top"
              />
              <div className="absolute h-full w-full rounded-2xl bg-linear-to-b from-transparent to-black"></div>
              <h1 className="absolute bottom-8 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                <span className="text-white">Hey There! Welcome to</span>
                <br />
                <span className="text-sky-400">Synergy!</span>
              </h1>
            </div>
          </div>
        </section>
        <section className="relative flex h-fit w-full items-center justify-center lg:h-[100vh] lg:max-h-[1920px]">
          <h1 className="text-[27vw] leading-none text-white">VALUES</h1>
          <div className="md:80 absolute h-60 w-60 translate-y-8 rounded-full border border-black backdrop-blur-sm md:h-80 lg:h-96 lg:w-96"></div>
        </section>
        <section className="mx-auto mt-26 mb-24 flex max-w-[1300px] flex-col items-center justify-center gap-4">
          <hr className="h-6 w-36 rounded-2xl border-12 text-sky-400" />
          <h3 className="text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Say Hello to Our <br />
            Squard
          </h3>
          <p className="text-center text-xl text-neutral-300">
            Get ready to meet the faces behind the magic, the dreamers, the
            <br />
            doers, and the unstoppable force driving our success.
          </p>
        </section>
        <section className="mx-auto mb-48 flex max-w-[1300px] flex-wrap items-center justify-center gap-4">
          <Members />
        </section>
      </div>
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
    <>
      {members.map((member) => {
        return (
          <>
            <div
              key={member.ID}
              className="group relative flex h-fit max-w-[350px] grow flex-col items-center overflow-hidden rounded-2xl bg-linear-to-b from-neutral-200/10 to-neutral-900/25 pt-4 backdrop-blur-sm"
            >
              <h2
                className={`absolute left-0 z-3 text-center text-3xl font-bold text-sky-400 transition-all duration-500 ease-in-out group-hover:-translate-y-4 md:text-4xl lg:text-5xl ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
              >
                {member.memberRoleName}
              </h2>
              <p
                className={`absolute top-16 right-0 z-3 text-2xl text-white transition-all duration-500 ease-in-out group-hover:-translate-y-4 ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
              >
                {member.memberRole}
              </p>
              <img
                src={Developer}
                className={`z-2 mt-16 h-96 transition-all duration-500 ease-in-out group-hover:translate-y-4 ${clickedMembers.indexOf(member.ID) === -1 ? "grayscale" : "translate-y-4"}`}
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
          </>
        );
      })}
    </>
  );
}
