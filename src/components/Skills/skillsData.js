// Skill level scale: `level` on a skill is 1–4 and maps to these labels
export const LEVELS = ["Learning", "Familiar", "Proficient", "Advanced"];

// Skills data: add or edit entries here and the UI updates automatically.
// Add `level: 1–4` to a skill to show its level meter.
export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    type: "tools",
    items: [
      { name: "C++" },
      { name: "C" },
      { name: "Java" },
      { name: "Python", note: "incl. NumPy" },
    ],
  },
  {
    title: "Web Technologies",
    type: "tools",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Data Analysis & Reporting",
    type: "tools",
    items: [
      { name: "Power BI" },
      { name: "Power Query" },
      { name: "Excel", note: "Pivot, formulas" },
      { name: "SQL" },
    ],
  },
  {
    title: "MS Office",
    type: "tools",
    items: [{ name: "Word" }, { name: "PowerPoint" }],
  },
  {
    title: "CS Fundamentals",
    type: "concepts",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "Design Patterns",
      "Agile (Scrum)",
      "SQL & NoSQL Databases",
    ],
  },
  {
    title: "Languages",
    type: "spoken",
    items: [
      { name: "Vietnamese", label: "Native" },
      { name: "German", label: "Advanced (C1)" },
      { name: "English", label: "Fluent" },
    ],
  },
];
