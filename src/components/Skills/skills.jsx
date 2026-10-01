import { useInView } from "../../hooks/useInView.js";
import SkillCard from "./skillCard.jsx";
import { SKILL_GROUPS } from "./skillsData.js";
import "./skills.css";

// One category card; renders its items depending on the group type
function SkillGroup({ title, type, items }) {
  return (
    <div className="skill-group h-100">
      <h3 className="skill-group-title h6 fw-bold mb-3">{title}</h3>

      {type === "concepts" ? (
        <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
          {items.map((item) => (
            <li key={item} className="badge skill-tag">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list-unstyled mb-0">
          {items.map((item) => (
            <SkillCard key={item.name} {...item} showIcon={type !== "spoken"} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Skills() {
  const [gridRef, visible] = useInView();

  return (
    <section id="skills" className="py-5 border-bottom">
      <div className="container">
        <h2 className="fw-bold mb-4">Skills</h2>

        <div
          ref={gridRef}
          className={`row g-4 skills-grid ${visible ? "is-visible" : ""}`}
        >
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={group.title}
              className="col-md-6 col-lg-4 skill-col"
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <SkillGroup {...group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
