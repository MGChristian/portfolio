import { LanguagesIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Background from "../components/background";
import projectsData from "./data/projectsData";

export default function Projects() {
  return (
    <>
      <Navbar />
      <Background />

      <section className="flex-column flex h-64 items-center justify-center">
        <h1 className="animate-slide-in unbounded text-4xl font-normal text-white text-shadow-black text-shadow-lg md:text-5xl lg:text-6xl">
          Check Our Workss
        </h1>
      </section>
      <section className="mx-auto flex w-full max-w-[1300px] flex-wrap justify-center gap-4 px-4">
        {projectsData.map((project, index) => {
          return (
            <div
              key={project.projectID}
              className="group w-96 cursor-pointer rounded-2xl"
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
                          <p className="text-xs font-bold text-white">
                            {language.languageName}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-800 p-4">
                <p className="text-justify text-white">
                  <span className="font-bold">{project.projectName}: </span>
                  <span>{project.projectDescription}</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
