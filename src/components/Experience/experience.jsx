import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faLayerGroup,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../../hooks/useInView.js";
import { TechList } from "../TechIcon/techIcon.jsx";
import "../../styles/timeline.css";
import "./experience.css";

// Work experience: add or edit entries here and the UI updates automatically
const WORK = [
  {
    period: "10/2025 — Present",
    location: "City, Germany",
    company: "Company Name",
    role: "IT Support",
    type: "Working Student",
    current: true,
    highlights: [
      "Build interactive Power BI dashboards that turn raw business data into clear, actionable KPIs.",
      "Create structured Excel reports for recurring reporting across the team.",
      "Automate an Excel-based tool with VBA macros, replacing repetitive manual steps.",
    ],
    tech: ["Power BI", "Excel", "VBA"],
  },
];

// Projects: add a new object here to show a new card
const PROJECTS = [
  {
    title: "Middleware & Cloud Computing",
    type: "University Project",
    summary: "Cloud-based web service running in a hybrid cloud environment.",
    highlights: [
      "Developed a cloud-based web service deployed across a hybrid cloud (AWS EC2 + OpenStack).",
      "Implemented autoscaling, an HDFS-like distributed file system and a MapReduce pipeline.",
      "Built a fault-tolerant, ZooKeeper-like coordination service to synchronize distributed components.",
    ],
    tech: [
      "AWS",
      "OpenStack",
      "MapReduce",
      "Distributed File System",
      "Coordination Service",
    ],
    privateRepo: true,
  },
  {
    title: "Web Application Development",
    type: "University Project",
    summary:
      "Full-stack web chat application with real-time messaging and anonymous chat rooms.",
    highlights: [
      "Development of server-side logic using Node.js and data persistence via MongoDB.",
      "Focus on clean API structure, asynchronous processing (non-blocking I/O) and robust data management.",
      "Use of WebAssembly for high-performance components and integration into the web workflow.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "WebAssembly",
      "Node.js",
      "WebSockets",
      "MongoDB",
    ],
  },
];

function WorkTimeline() {
  const [timelineRef, visible] = useInView();

  return (
    <ol
      ref={timelineRef}
      className={`timeline list-unstyled mb-0 ${visible ? "is-visible" : ""}`}
    >
      {WORK.map((job, index) => (
        <li
          key={`${job.company}-${job.period}`}
          className="timeline-item"
          style={{ "--delay": `${index * 0.2 + 0.2}s` }}
        >
          <span
            className={`timeline-dot ${job.current ? "timeline-dot--current" : ""}`}
          />
          <div className="row">
            <div className="col-md-4 col-lg-3 mb-2 mb-md-0">
              <p className="timeline-period font-mono mb-0">{job.period}</p>
              <p className="small text-secondary mb-0">{job.location}</p>
            </div>
            <div className="col-md-8 col-lg-9">
              <h4 className="timeline-title h6 fw-bold mb-1">
                {job.role}
                <span className="badge rounded-pill exp-type ms-2">
                  {job.type}
                </span>
              </h4>
              <p className="exp-company mb-2">{job.company}</p>
              <ul className="exp-highlights mb-3">
                {job.highlights.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <TechList items={job.tech} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card exp-project h-100">
      <div className="card-body p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="exp-project-type font-mono small">
            <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
            {project.type}
          </span>
          {project.privateRepo && (
            <span
              className="exp-private small text-secondary"
              title="Source code available on request"
            >
              <FontAwesomeIcon icon={faLock} className="me-1" />
              Private repo
            </span>
          )}
        </div>

        <h4 className="exp-project-title h5 fw-bold mb-2">{project.title}</h4>
        <p className="text-secondary mb-3">{project.summary}</p>

        <ul className="exp-highlights mb-4">
          {project.highlights.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>

        {/* mt-auto keeps the icon row aligned at the bottom of every card */}
        <div className="mt-auto">
          <TechList items={project.tech} />
        </div>
      </div>
    </article>
  );
}

function ProjectGrid() {
  const [gridRef, visible] = useInView(0.15);

  return (
    <div
      ref={gridRef}
      className={`row g-4 exp-grid ${visible ? "is-visible" : ""}`}
    >
      {PROJECTS.map((project, index) => (
        <div
          key={project.title}
          className="col-md-6 exp-grid-item"
          style={{ "--delay": `${index * 0.15 + 0.1}s` }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <>
      <section id="experience" className="py-5 border-bottom">
        <div className="container">
          <h2 className="fw-bold mb-4">Experience</h2>

          <h3 className="exp-subheading h6 font-mono mb-4">
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            Work
          </h3>
          <WorkTimeline />

          <h3 className="exp-subheading h6 font-mono mt-5 mb-4">
            <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
            Projects
          </h3>
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}

export default Experience;
