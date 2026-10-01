import {
  faAws,
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightArrowLeft,
  faArrowsRotate,
  faChartColumn,
  faCircleNodes,
  faCloud,
  faCode,
  faCubes,
  faDatabase,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faFilter,
  faHardDrive,
  faLeaf,
  faMicrochip,
  faPuzzlePiece,
  faShuffle,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

// Technology name → Font Awesome icon (generic icons where no brand icon exists)
export const ICONS = {
  // Programming languages
  "C++": faCode,
  C: faCode,
  Java: faJava,
  Python: faPython,
  // Data & office
  "Power BI": faChartColumn,
  "Power Query": faFilter,
  Excel: faFileExcel,
  SQL: faDatabase,
  VBA: faCode,
  Word: faFileWord,
  PowerPoint: faFilePowerpoint,
  // Cloud & distributed systems
  AWS: faAws,
  OpenStack: faCloud,
  MapReduce: faShuffle,
  "Distributed File System": faHardDrive,
  "Coordination Service": faCircleNodes,
  // Web
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJs,
  TypeScript: faCode,
  "Node.js": faNodeJs,
  WebSockets: faArrowRightArrowLeft,
  WebAssembly: faMicrochip,
  MongoDB: faLeaf,
  // CS fundamentals
  "Data Structures & Algorithms": faSitemap,
  OOP: faCubes,
  "Design Patterns": faPuzzlePiece,
  "Agile (Scrum)": faArrowsRotate,
  "SQL & NoSQL Databases": faDatabase,
};

export const FALLBACK_ICON = faCode;
