import Navbar from "../components/Navbar";
import Background from "../components/background";
import { useParams } from "react-router-dom";
import projectsData from "../data/projectsData";

export default function Projects() {
  const { projectID } = useParams();
  const project = projectsData.find((p) => p.projectID == projectID);
  return (
    <>
      <Navbar />
      <Background />
      <section className="animate-slide-in flex h-64 flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="unbounded text-3xl font-normal text-white text-shadow-black text-shadow-lg md:text-4xl lg:text-5xl">
          {project.projectName}
        </h1>
        <p className="text-neutral-200">{project.projectDescription}</p>
      </section>

      <section className="animate-slide-in-bottom mx-auto mb-48 flex w-full max-w-[1300px] flex-col justify-center gap-4 rounded-2xl border border-white bg-neutral-800/50 p-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {project.projectLanguages.map((language) => {
            return (
              <div className="flex items-center justify-center gap-2 rounded-2xl border border-white p-2 text-white hover:bg-neutral-400/75">
                <span>{language.languageIcon}</span>
                <p>{language.languageName}</p>
              </div>
            );
          })}
        </div>
        <h3 className="mx-auto text-xl font-bold text-white md:text-2xl lg:text-3xl">
          SCREENSHOTS
        </h3>
        <div className="flex w-full flex-wrap justify-center gap-4">
          {project.projectScreenshots.map((screenshot) => {
            return (
              <img
                src={screenshot.screenshot}
                className="h-60 w-96 rounded-2xl object-cover"
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
