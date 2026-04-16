import { useState, useEffect } from "react";
import "../styles/header.scss";
import notion from "../assets/icons/notion.png";
import github from "../assets/icons/github.png";

function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
      setActive(id);
    }
  };

  /* scroll observer */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // glass 효과
      setScrolled(currentScrollY > 50);

      // header hide/show
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;

      // scroll progress (쓸거면 같이)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${showHeader ? "show" : "hide"}`}>
      <div className="header-inner">
        
        {/* logo */}
        <div className="logo">
          SEYOUNG
        </div>

        {/* navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button
                className={active === "home" ? "active" : ""}
                onClick={() => handleClick("home")}
              >
                HOME
              </button>
            </li>

            <li>
              <button
                className={active === "about" ? "active" : ""}
                onClick={() => handleClick("about")}
              >
                ABOUT
              </button>
            </li>

            <li>
              <button
                className={active === "strength" ? "active" : ""}
                onClick={() => handleClick("strength")}
              >
                STRENGTH
              </button>
            </li>

            <li>
              <button
                className={active === "projects" ? "active" : ""}
                onClick={() => handleClick("projects")}
              >
                PROJECT
              </button>
            </li>

            <li>
              <button
                className={active === "contact" ? "active" : ""}
                onClick={() => handleClick("contact")}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </nav>

        {/* right icons */}
        <div className="header-icons">
          <a href="#" className="icon">
            <img src={notion} alt="Notion" />
          </a>
          <a href="https://github.com/iam3zero" target="_blank" className="icon">
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;