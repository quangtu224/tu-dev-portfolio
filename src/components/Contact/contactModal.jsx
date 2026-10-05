import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCopy,
  faEnvelope,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { CONTACT } from "../../data/contact.js";
import SocialLinks from "../SocialLinks/socialLinks.jsx";
import "./contactModal.css";

// One contact row: icon, label + value (as a link when href is given), optional copy button
function ContactRow({ icon, label, value, href }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the value is still selectable
    }
  };

  return (
    <li className="contact-row">
      <span className="contact-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <div className="flex-grow-1">
        <p className="contact-label mb-0">{label}</p>
        {href ? (
          <a className="contact-value" href={href}>
            {value}
          </a>
        ) : (
          <span className="contact-value">{value}</span>
        )}
      </div>
      {href && (
        <button
          type="button"
          className="contact-copy"
          onClick={copy}
          aria-label={`Copy ${label}`}
          title={copied ? "Copied!" : "Copy"}
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
      )}
    </li>
  );
}

// Popup with contact details; `open` and `onClose` come from App
function ContactModal({ open, onClose }) {
  const closeButtonRef = useRef(null);

  // While open: close on Escape, lock page scroll, focus the close button
  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    // Clicking the dark backdrop closes the modal; clicks inside the card don't
    <div className="contact-backdrop" onClick={onClose}>
      <div
        className="contact-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <h2 id="contact-title" className="h4 fw-bold mb-1">
          Let's <span className="gradient-text">connect</span>
        </h2>
        <p className="text-secondary mb-4">
          Open to internships and working student positions. Feel free to reach
          out!
        </p>

        <ul className="list-unstyled mb-4">
          <ContactRow
            icon={faEnvelope}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <ContactRow
            icon={faPhone}
            label="Phone"
            value={CONTACT.phone}
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          />
          <ContactRow
            icon={faLocationDot}
            label="Location"
            value={CONTACT.location}
          />
        </ul>

        <SocialLinks className="justify-content-center" />
      </div>
    </div>
  );
}

export default ContactModal;
