import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FALLBACK_ICON, ICONS } from "../TechIcon/techIconMap.js";
import { LEVELS } from "./skillsData.js";

// Row of dots: filled dots = level (1–4)
function LevelMeter({ level }) {
  const label = LEVELS[level - 1];
  return (
    <span className="level-meter" title={label} aria-label={`Level: ${label}`}>
      {LEVELS.map((name, index) => (
        <span
          key={name}
          className={`level-dot ${index < level ? "is-filled" : ""}`}
        />
      ))}
    </span>
  );
}

// One skill: icon + name, with an optional level meter or text label on the right
function SkillCard({ name, note, level, label, showIcon = true }) {
  return (
    <li className="skill-item">
      {showIcon && (
        <span className="skill-icon">
          <FontAwesomeIcon icon={ICONS[name] ?? FALLBACK_ICON} />
        </span>
      )}
      <span className="skill-name">
        {name}
        {note && <small className="text-secondary ms-1">({note})</small>}
      </span>
      {level && <LevelMeter level={level} />}
      {label && <span className="skill-label font-mono">{label}</span>}
    </li>
  );
}

export default SkillCard;
