import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";
import "./navBar.css";
import NavItem from "./navItem.jsx";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

function NavBar() {
  const [activeId, setActiveId] = useState("about");

  // Highlight the menu item whose section is crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom small sticky-top">
        <div className="container">
          {/*Navbar Brand*/}
          <a className="navbar-brand" href="#">
            <img src={logoImg} alt="Logo" />
            <span className="navbar-text">Quang Tu Dinh</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Menu Item*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  isActive={activeId === item.id}
                />
              ))}
            </ul>
            <a href="#" className="btn btn-neon rounded-pill mb-3 mb-lg-0">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
