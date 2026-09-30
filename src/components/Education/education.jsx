import { useEffect, useRef, useState } from "react";
import "./education.css";

// Education data: add or edit entries here and the UI updates automatically
const EDUCATION = [
  {
    period: "10/2023 — Present",
    location: "Erlangen, Germany",
    school: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    degree: "B.Sc. Computer Science (Informatik)",
    note: "Taught in German",
    current: true,
    summary:
      "Building a solid software engineering foundation — from algorithmic thinking and object-oriented design to agile teamwork, testing and database systems.",
    tags: [
      "Algorithms & Data Structures",
      "OOP",
      "Design Patterns",
      "Software Testing",
      "Scrum",
      "SQL & NoSQL",
    ],
  },
  {
    period: "02/2022 — 02/2023",
    location: "Karlsruhe, Germany",
    school: "Karlsruher Institut für Technologie (KIT)",
    degree: "Studienkolleg — T-Kurs (Technical Track)",
    summary:
      "University preparatory programme for STEM studies, completed with the Feststellungsprüfung (university entrance qualification).",
    tags: ["Mathematics", "Physics", "German"],
  },
];

function Education() {
  const timelineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Run the animation only once, when the timeline scrolls into view
  useEffect(() => {
    const el = timelineRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-5 border-bottom">
      <div className="container">
        <h2 className="fw-bold mb-4">Education</h2>

        <ol
          ref={timelineRef}
          className={`edu-timeline list-unstyled mb-0 ${visible ? "is-visible" : ""}`}
        >
          {EDUCATION.map((item, index) => (
            <li
              key={item.school}
              className="edu-item"
              style={{ "--delay": `${index * 0.2 + 0.2}s` }}
            >
              <span className={`edu-dot ${item.current ? "edu-dot--current" : ""}`} />
              <div className="row">
                <div className="col-md-4 col-lg-3 mb-2 mb-md-0">
                  <p className="edu-period font-mono mb-0">{item.period}</p>
                  <p className="edu-location small text-secondary mb-0">{item.location}</p>
                </div>
                <div className="col-md-8 col-lg-9">
                  <h3 className="edu-school h6 fw-bold mb-1">{item.school}</h3>
                  <p className="edu-degree mb-2">
                    {item.degree}
                    {item.note && (
                      <span className="badge rounded-pill edu-note ms-2">{item.note}</span>
                    )}
                  </p>
                  <p className="text-secondary mb-3">{item.summary}</p>
                  <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                    {item.tags.map((tag) => (
                      <li key={tag} className="badge edu-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;
