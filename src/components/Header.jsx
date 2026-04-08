import { useState, useEffect } from "react";
import "../styles/header.scss";
import notion from "../assets/icons/notion.png";
import github from "../assets/icons/github.png";

function Header() {
  const [active, setActive] = useState("home");

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
      setActive(id);
    }
  };

  return (
    <header className="header">

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
            <a href="#">
                <img src={github} alt="Github" />
            </a>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;