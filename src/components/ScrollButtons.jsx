import { useEffect, useState } from "react";
import "../styles/scrollButtons.scss";
import { FiArrowUp, FiArrowDown} from "react-icons/fi";
import { RiBookMarkedLine } from "react-icons/ri";

function ScrollButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introHeight = document.querySelector("#intro")?.offsetHeight || 0;
      const scrollY = window.scrollY;

      setShow(scrollY > introHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`scroll-buttons ${show ? "show" : ""}`}>
      <button onClick={scrollToTop} className="scroll-btn">
        <FiArrowUp />
      </button>

      <button onClick={scrollToProjects} className="scroll-btn">
        <RiBookMarkedLine />
      </button>
    </div>
  );
}

export default ScrollButtons;