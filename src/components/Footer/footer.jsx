import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../../assets/logo.png";
import { CONTACT } from "../../data/contact.js";
import { NAV_ITEMS } from "../../data/navItems.js";
import SocialLinks from "../SocialLinks/socialLinks.jsx";
import "./footer.css";

function Footer({ onContactClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Brand + short intro */}
          <div className="col-lg-5">
            <a className="footer-brand d-inline-flex align-items-center mb-3" href="#">
              <img src={logoImg} alt="Logo" />
              <span>Quang Tu Dinh</span>
            </a>
            <p className="text-secondary mb-0">
              Computer Science student at FAU Erlangen-Nürnberg, aspiring DevOps
              Engineer — building, automating and shipping.
            </p>
          </div>

          {/* Quick links to page sections */}
          <div className="col-6 col-lg-3">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="list-unstyled mb-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="mb-2">
                  <a className="footer-link" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="col-6 col-lg-4">
            <h3 className="footer-heading">Connect</h3>
            <a className="footer-link d-inline-block mb-3" href={`mailto:${CONTACT.email}`}>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              {CONTACT.email}
            </a>
            <SocialLinks className="mb-3" />
            <button
              type="button"
              className="btn btn-neon btn-sm rounded-pill"
              onClick={onContactClick}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-3 mt-5 pt-4">
          <p className="small text-secondary mb-0">
            © {year} Quang Tu Dinh · Built with React & Bootstrap
          </p>
          <a className="footer-top" href="#" aria-label="Back to top" title="Back to top">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
