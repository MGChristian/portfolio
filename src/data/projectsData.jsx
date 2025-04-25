import { FaBullseye, FaEye, FaJava, FaReact } from "react-icons/fa";
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
import Team from "../assets/team.png";

// BARANGAY MANAGEMENT SYSTEM SCREENSHOTS
import BMS1 from "../assets/BMS1.png";
import BMS2 from "../assets/BMS2.png";
import BMS3 from "../assets/BMS3.png";
import BMS4 from "../assets/BMS4.jpg";
import BMS5 from "../assets/BMS5.png";
import BMS6 from "../assets/BMS6.png";
import BMS7 from "../assets/BMS7.jpg";
import BMS8 from "../assets/BMS8.png";
import BMS9 from "../assets/BMS9.png";

// ONLINE ENTRANCE EXAM MANAGEMENT SYSTEM SCREENSHOTS
import OEMS1 from "../assets/OEMS1.png";
import OEMS2 from "../assets/OEMS2.png";
import OEMS3 from "../assets/OEMS3.png";
import OEMS4 from "../assets/OEMS4.png";
import OEMS5 from "../assets/OEMS5.png";
import OEMS6 from "../assets/OEMS6.png";
import OEMS7 from "../assets/OEMS7.png";
import OEMS8 from "../assets/OEMS8.png";
import OEMS9 from "../assets/OEMS9.png";
import OEMS10 from "../assets/OEMS10.png";

// BINGO JAVA GAME SCREENSHOTS
import BINGO1 from "../assets/BINGO1.png";
import BINGO2 from "../assets/BINGO2.png";
import BINGO3 from "../assets/BINGO3.png";
import BINGO4 from "../assets/BINGO4.png";
import BINGO5 from "../assets/BINGO5.png";
import BINGO6 from "../assets/BINGO6.png";
import BINGO7 from "../assets/BINGO7.png";
import BINGO8 from "../assets/BINGO8.png";
import BINGO9 from "../assets/BINGO9.png";

// WORD SCRAMBLES GAME SCREENSHOTS
import WordGame1 from "../assets/WordGame1.png";
import WordGame2 from "../assets/WordGame2.png";
import WordGame3 from "../assets/WordGame3.png";
import WordGame4 from "../assets/WordGame4.png";
import WordGame5 from "../assets/WordGame5.png";
import WordGame6 from "../assets/WordGame6.png";
import WordGame7 from "../assets/WordGame7.png";
import WordGame8 from "../assets/WordGame8.png";
import WordGame9 from "../assets/WordGame9.png";

// FILE MANAGEMENT SYSTEM
import FMS1 from "../assets/FMS1.jpg";

// ONLINE ORDERING SYSTEM SCREENSHOTS
import OOS1 from "../assets/OOS1.png";
import OOS2 from "../assets/OOS2.png";

const projectsData = [
  {
    projectID: "project-1",
    projectName: "Barangay Management System",
    projectDescription:
      "A static portal designed to showcase barangay services, announcements, and community information—built purely with HTML5 and CSS3",
    projectPicture: BMS1,
    projectLanguages: [
      {
        languageIcon: <SiHtml5 size={15} />,
        languageName: "HTML",
      },
      {
        languageIcon: <SiCss3 size={15} />,
        languageName: "CSS",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: BMS1,
      },
      {
        screenshotID: "screenshot-2",
        screenshot: BMS2,
      },
      {
        screenshotID: "screenshot-3",
        screenshot: BMS3,
      },
      {
        screenshotID: "screenshot-4",
        screenshot: BMS4,
      },
      {
        screenshotID: "screenshot-5",
        screenshot: BMS5,
      },
      {
        screenshotID: "screenshot-6",
        screenshot: BMS6,
      },
      {
        screenshotID: "screenshot-7",
        screenshot: BMS7,
      },
      {
        screenshotID: "screenshot-8",
        screenshot: BMS8,
      },
      {
        screenshotID: "screenshot-9",
        screenshot: BMS9,
      },
    ],
  },
  {
    projectID: "project-2",
    projectName: "UrbanLooks: Online Ordering System",
    projectDescription:
      "A system built with HTML, CSS and Javascript where you can browse different types of clothing, see what's available, and place orders easily.",
    projectPicture: OOS1,
    projectLanguages: [
      {
        languageIcon: <SiHtml5 size={15} />,
        languageName: "HTML",
      },
      {
        languageIcon: <SiCss3 size={15} />,
        languageName: "CSS",
      },
      {
        languageIcon: <SiJavascript size={15} />,
        languageName: "JavaScript",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: OOS1,
      },
      {
        screenshotID: "screenshot-2",
        screenshot: OOS2,
      },
    ],
  },
  {
    projectID: "project-3",
    projectName: "Bingo Game",
    projectDescription:
      "A classic Bingo game built entirely with Java and Java Swing, offering a fun, lightweight, and interactive gaming experience using Arrays to store scores and players.",
    projectPicture: BINGO3,
    projectLanguages: [
      {
        languageIcon: <FaJava size={15} />,
        languageName: "JAVA",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: BINGO1,
      },
      {
        screenshotID: "screenshot-2",
        screenshot: BINGO2,
      },
      {
        screenshotID: "screenshot-3",
        screenshot: BINGO3,
      },
      {
        screenshotID: "screenshot-4",
        screenshot: BINGO4,
      },
      {
        screenshotID: "screenshot-5",
        screenshot: BINGO5,
      },
      {
        screenshotID: "screenshot-6",
        screenshot: BINGO6,
      },
      {
        screenshotID: "screenshot-7",
        screenshot: BINGO7,
      },
      {
        screenshotID: "screenshot-8",
        screenshot: BINGO8,
      },
      {
        screenshotID: "screenshot-9",
        screenshot: BINGO9,
      },
    ],
  },
  {
    projectID: "project-4",
    projectName: "Wrod Scrmable",
    projectDescription:
      "A simple and fun word puzzle game built using Java Swing GUI. The game features a clean interface, score tracking, and supports multiple levels of difficulty",
    projectPicture: WordGame1,
    projectLanguages: [
      {
        languageIcon: <FaJava size={15} />,
        languageName: "JAVA",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: WordGame1,
      },
      {
        screenshotID: "screenshot-2",
        screenshot: WordGame2,
      },
      {
        screenshotID: "screenshot-3",
        screenshot: WordGame3,
      },
      {
        screenshotID: "screenshot-4",
        screenshot: WordGame4,
      },
      {
        screenshotID: "screenshot-5",
        screenshot: WordGame5,
      },
      {
        screenshotID: "screenshot-6",
        screenshot: WordGame6,
      },
      {
        screenshotID: "screenshot-7",
        screenshot: WordGame7,
      },
      {
        screenshotID: "screenshot-8",
        screenshot: WordGame8,
      },
      {
        screenshotID: "screenshot-9",
        screenshot: WordGame9,
      },
    ],
  },
  {
    projectID: "project-5",
    projectName: "RoomCloud: File Management System",
    projectDescription:
      "a web-based platform designed to automate and streamline the administration of entrance examinations.",
    projectPicture: FMS1,
    projectLanguages: [
      {
        languageIcon: <SiHtml5 size={15} />,
        languageName: "HTML",
      },
      {
        languageIcon: <SiCss3 size={15} />,
        languageName: "CSS",
      },
      {
        languageIcon: <SiJavascript size={15} />,
        languageName: "JavaScript",
      },
      {
        languageIcon: <SiBootstrap size={15} />,
        languageName: "Bootstrap",
      },
      {
        languageIcon: <SiPhp size={15} />,
        languageName: "PHP",
      },
      {
        languageIcon: <SiMysql size={15} />,
        languageName: "MySQL",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: FMS1,
      },
    ],
  },
  {
    projectID: "project-6",
    projectName: "Online Entrance Exam Management System",
    projectDescription:
      "a web-based platform designed to automate and streamline the administration of entrance examinations.",
    projectPicture: OEMS10,
    projectLanguages: [
      {
        languageIcon: <SiHtml5 size={15} />,
        languageName: "HTML",
      },
      {
        languageIcon: <SiCss3 size={15} />,
        languageName: "CSS",
      },
      {
        languageIcon: <SiJavascript size={15} />,
        languageName: "JavaScript",
      },
      {
        languageIcon: <SiBootstrap size={15} />,
        languageName: "Bootstrap",
      },
      {
        languageIcon: <SiPhp size={15} />,
        languageName: "PHP",
      },
      {
        languageIcon: <SiMysql size={15} />,
        languageName: "MySQL",
      },
    ],
    projectScreenshots: [
      {
        screenshotID: "screenshot-1",
        screenshot: OEMS1,
      },
      {
        screenshotID: "screenshot-2",
        screenshot: OEMS2,
      },
      {
        screenshotID: "screenshot-3",
        screenshot: OEMS3,
      },
      {
        screenshotID: "screenshot-4",
        screenshot: OEMS4,
      },
      {
        screenshotID: "screenshot-5",
        screenshot: OEMS5,
      },
      {
        screenshotID: "screenshot-6",
        screenshot: OEMS6,
      },
      {
        screenshotID: "screenshot-7",
        screenshot: OEMS7,
      },
      {
        screenshotID: "screenshot-8",
        screenshot: OEMS8,
      },
      {
        screenshotID: "screenshot-9",
        screenshot: OEMS9,
      },
    ],
  },
];

export default projectsData;
