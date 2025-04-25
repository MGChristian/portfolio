import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Jeremy from "..//assets/Jeremy.png";
import Asuncion from "../assets/Asuncion.png";
import Christian from "../assets/Christian.png";
import Cuevas from "../assets/Cuevas.png";
import Nica from "../assets/Nica.png";
import TeamPicture from "../assets/team.png";
import Background from "../components/background";
import Navbar from "../components/Navbar";
import Values from "../components/Values";

const members = [
  {
    ID: "member-1",
    memberName: "Christian Gutierrez",
    memberRole: "Developer",
    memberRoleName: "Back End",
    memberSkill:
      "Specializes in server-side programming using Java and PHP, manages data with MySQL.",
    memberPic: Christian,
  },
  {
    ID: "member-2",
    memberName: "Jericho Vincent Cuevas",
    memberRole: "Developer",
    memberRoleName: "Front End",
    memberSkill:
      "Focuses on building the user interface and ensuring responsive design.",
    memberPic: Cuevas,
  },
  {
    ID: "member-3",
    memberName: "Luis Angelo Asuncion",
    memberRole: "Manager",
    memberRoleName: "Project",
    memberSkill:
      "Oversees task distribution, progress tracking and manages timelines.",
    memberPic: Asuncion,
  },
  {
    ID: "member-4",
    memberName: "Nica Ilang-Ilang",
    memberRole: "Design",
    memberRoleName: "UI/UX",
    memberSkill:
      "Creates wireframes, prototypes, and visual designs using tools like Figma or Framer, and ensures a smooth user experience.",
    memberPic: Nica,
  },
  {
    ID: "member-5",
    memberName: "Jeremy Reyes",
    memberRole: "Assurance",
    memberRoleName: "Quality",
    memberSkill:
      "Conducts testing (unit, integration, UI), bug tracking, and deploys the project.",
    memberPic: Jeremy,
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <Background />
      <section className="mb-16 flex flex-col gap-12 lg:mb-0 lg:h-[calc(100vh-80px)] lg:max-h-[900px]">
        <div className="mx-auto h-full w-full max-w-[1300px] px-4 lg:p-4">
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
        className="relative mx-auto flex w-full flex-col justify-around px-4 text-center max-md:min-h-96 max-md:justify-between lg:h-[100vh] lg:max-h-[900px]"
      >
        <Values />
      </section>
      <section
        data-aos="fade-up"
        className="mx-auto mt-16 mb-24 flex w-full max-w-[1300px] flex-col items-center justify-center gap-4 px-4"
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
      className="mx-auto mb-48 flex w-full max-w-[1300px] flex-wrap items-center justify-center gap-3"
    >
      {members.map((member) => {
        return (
          <div
            key={member.ID}
            className="flex w-full flex-col items-center px-4 lg:max-w-[400px] lg:px-0"
          >
            <div className="group relative z-5 flex h-fit w-full grow flex-col items-center overflow-hidden rounded-4xl bg-linear-to-b from-neutral-200/10 to-neutral-900/25 pt-4 backdrop-blur-sm">
              <h2
                className={`unbounded absolute left-0 z-3 text-center text-3xl font-semibold text-sky-400 transition-all duration-500 ease-in-out group-hover:-translate-y-4 md:text-4xl lg:text-5xl ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
              >
                {member.memberRoleName}
              </h2>
              <p
                className={`unbounded absolute top-16 right-0 z-3 text-xl text-white uppercase transition-all duration-500 ease-in-out group-hover:-translate-y-4 ${clickedMembers.indexOf(member.ID) === -1 ? "" : "-translate-y-4"}`}
              >
                {member.memberRole}
              </p>
              <img
                src={member.memberPic}
                className={`z-2 mx-auto mt-10 h-100 w-full object-cover transition-all duration-500 ease-in-out ${clickedMembers.indexOf(member.ID) === -1 ? "grayscale group-hover:translate-y-4" : ""}`}
              />
              <div className="absolute bottom-4 z-3 flex w-full justify-center gap-4">
                <div
                  className="bottom-0 z-2 cursor-pointer rounded-xl bg-white p-2"
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
                className={`absolute top-25 rotate-180 rounded-full transition-all duration-300 ease-in-out lg:top-20 ${clickedMembers.indexOf(member.ID) === -1 ? "h-0 w-0" : "h-[500px] w-[500px] bg-sky-400"}`}
              ></div>
            </div>
            <div className="mt-0 min-h-[130px] w-full rounded-3xl bg-stone-700/50 px-4 py-2 text-white">
              <p className={`unbounded mb-2 text-center text-lg text-sky-400`}>
                {member.memberName}
              </p>
              <p
                className={`satoshireg text-md text-justify font-light text-white`}
              >
                {member.memberSkill}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
