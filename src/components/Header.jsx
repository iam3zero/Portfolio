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

  /* glassmorphism header */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* scroll 감지 useEffect */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // 아래 스크롤 → 숨김
      } else {
        setShowHeader(true); // 위 스크롤 → 표시
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* scroll progress 계산 useEffect */
  /* useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${showHeader ? "show" : "hide"}`}>

      <div className="header-inner">
        
        {/* logo */}
        <div className="logo">
          SEYOUNG
        </div>

        {/* navigation */}
        <nav className="nav">
          <ul>
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
          <div className="icon-box">
            <a href="#">
                <img src={notion} alt="Notion" />
            </a>
          </div>
          <div className="icon-box">
            <a href="https://github.com/iam3zero" target="_blank">
                <img src={github} alt="Github" />
            </a>
          </div>
        </div>

      </div>
      {/* <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div> */}
    </header>
  );
}

export default Header;