import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightArrowLeft,
  faChartColumn,
  faCircleNodes,
  faCloud,
  faCode,
  faFileExcel,
  faHardDrive,
  faLeaf,
  faMicrochip,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import "./techIcon.css";

// Technology name → Font Awesome icon (generic icons where no brand icon exists)
const ICONS = {
  // Work
  "Power BI": faChartColumn,
  Excel: faFileExcel,
  VBA: faCode,
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
  "Node.js": faNodeJs,
  WebSockets: faArrowRightArrowLeft,
  WebAssembly: faMicrochip,
  MongoDB: faLeaf,
};

// Icon chip with the technology name shown as a tooltip on hover/focus
function TechIcon({ name }) {
  return (
    <li className="tech-icon" data-label={name} tabIndex={0} aria-label={name}>
      <FontAwesomeIcon icon={ICONS[name] ?? faCode} />
    </li>
  );
}

// Row of tech icons
export function TechList({ items }) {
  return (
    <ul className="tech-list list-unstyled d-flex flex-wrap gap-2 mb-0">
      {items.map((name) => (
        <TechIcon key={name} name={name} />
      ))}
    </ul>
  );
}

export default TechIcon;
