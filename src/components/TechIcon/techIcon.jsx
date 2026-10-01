import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FALLBACK_ICON, ICONS } from "./techIconMap.js";
import "./techIcon.css";

// Icon chip with the technology name shown as a tooltip on hover/focus
function TechIcon({ name }) {
  return (
    <li className="tech-icon" data-label={name} tabIndex={0} aria-label={name}>
      <FontAwesomeIcon icon={ICONS[name] ?? FALLBACK_ICON} />
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
