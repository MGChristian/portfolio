import { FaJava, FaReact } from "react-icons/fa";
import {
  SiArduino,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiTailwindcss,
} from "react-icons/si";

const technologiesList = [
  {
    ID: "technology-1",
    TechnologyName: "HTML",
    TechnologyIcon: <SiHtml5 size={50} />,
  },
  {
    ID: "technology-2",
    TechnologyName: "CSS",
    TechnologyIcon: <SiCss3 size={50} />,
  },
  {
    ID: "technology-3",
    TechnologyName: "JavaScript",
    TechnologyIcon: <SiJavascript size={50} />,
  },
  {
    ID: "technology-4",
    TechnologyName: "MySQL",
    TechnologyIcon: <SiMysql size={50} />,
  },
  {
    ID: "technology-5",
    TechnologyName: "PHP",
    TechnologyIcon: <SiPhp size={50} />,
  },
  {
    ID: "technology-6",
    TechnologyName: "Java",
    TechnologyIcon: <FaJava size={50} />,
  },
  {
    ID: "technology-7",
    TechnologyName: "Arduino",
    TechnologyIcon: <SiArduino size={50} />,
  },
  {
    ID: "technology-8",
    TechnologyName: "TailwindCSS",
    TechnologyIcon: <SiTailwindcss size={50} />,
  },
  {
    ID: "technology-9",
    TechnologyName: "Bootstrap",
    TechnologyIcon: <SiBootstrap size={50} />,
  },
  {
    ID: "technology-10",
    TechnologyName: "React.js",
    TechnologyIcon: <FaReact size={50} />,
  },
];

export default technologiesList;
