import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { CONTACT } from "../../data/contact.js";
import "./socialLinks.css";

const LINKS = [
  { label: "GitHub", href: CONTACT.github, icon: faGithub },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: faLinkedin },
];

// Round icon buttons linking to GitHub and LinkedIn (open in a new tab)
function SocialLinks({ className = "" }) {
  return (
    <ul className={`social-links list-unstyled d-flex gap-2 mb-0 ${className}`}>
      {LINKS.map((link) => (
        <li key={link.label}>
          <a
            className="social-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
