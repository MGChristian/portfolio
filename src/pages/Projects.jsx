import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/background";
import projectsData from "../data/projectsData";

export default function Projects() {
  return (
    <>
      <Navbar />
      <Background />
      <section className="flex-column flex h-64 items-center justify-center">
        <h1 className="animate-slide-in unbounded text-center text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-6xl">
          Check Our Works
        </h1>
      </section>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <section className="mx-auto mb-48 flex w-full max-w-[1300px] flex-wrap justify-center gap-4 px-4 overflow-hidden">
=======
      <section className="mx-auto mb-48 flex w-full max-w-[1300px] flex-wrap justify-center gap-4">
>>>>>>> Stashed changes
=======
      <section className="mx-auto mb-48 flex w-full max-w-[1300px] flex-wrap justify-center gap-4">
>>>>>>> Stashed changes
        {projectsData.map((project, index) => {
          return (
            <Link to={`/projects/${project.projectID}`}>
              <div
                key={project.projectID}
                className="group w-96 max-w-full rounded-2xl p-4"
              >
                <div className="relative mb-4 h-80 overflow-hidden rounded-2xl">
                  <img
                    src={project.projectPicture}
                    className="h-full w-full rounded-2xl object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:grayscale-100"
                  />
                  <div className="absolute bottom-0 flex flex-wrap gap-1 p-4">
                    {project.projectLanguages.map((language, index) => {
                      return (
                        <>
                          <div className="flex gap-2 rounded-2xl border border-white bg-neutral-700/75 px-2 py-1">
                            <span className="text-sky-400">
                              {language.languageIcon}
                            </span>
                            <p className="text-xs font-normal text-white satoshireg">
                              {language.languageName}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-800/75 p-4">
                  <p className="text-justify text-white">
                    <span className="font-semibold satoshireg">{project.projectName}: </span>
                    <span className="font-normal satoshireg">{project.projectDescription}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
