import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import "../styles/projectDetail.scss";

import { FiChevronDown } from "react-icons/fi";

import github_btn from "../assets/icons/github_btn.png";
import website_btn from "../assets/icons/website_btn.png";

import monitor from "../assets/img/projects_monitor.png";

import eclat_Detail from "../assets/img/eclat_projectdetail.png";
import process_arrow from "../assets/img/process_arrow.png";

/* import eclat_bg from "../assets/img/eclat_bg.png"; */

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex(
    (p) => p.id === Number(id)
  );

  const project = projects[currentIndex];

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  if (!project) return <div>Project not found</div>;

  useEffect(() => {
    window.scrollTo(0, 0);
    }, [id]);

  /* 스크린 속 이미지 자동 높이 지정 */
  useEffect(() => {
    const screens = document.querySelectorAll(".detail-screen");

    screens.forEach((screen) => {
      const img = screen.querySelector("img");

      const setScroll = () => {
        const screenHeight = screen.offsetHeight;
        const imgHeight = img.offsetHeight;

        const move = imgHeight - screenHeight;

        img.style.setProperty("--scroll-distance", `${move}px`);
      };

      // 🔥 이미 로드된 경우
      if (img.complete) {
        setScroll();
      } else {
        img.onload = setScroll;
      }
    });
  }, [id]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    // 🔥 기존 show 제거 (핵심)
    elements.forEach((el) => el.classList.remove("show"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [id]); // ⭐ 중요

  useEffect(() => {
    const section = document.querySelector(".project-detail");

    section?.classList.remove("show"); // 🔥 초기화

    setTimeout(() => {
      section?.classList.add("show");
    }, 50);
  }, [id]);

 return (
  <div key={id}>
    <section className="project-detail">
      <div className="project-detail-inner">
        <div className="container">
          <div className="project-detail-name fade-up">PROJECT DETAIL PAGE</div>
          <div className="project-detail-line fade-up delay-1"></div>
        </div>

        {/* 🔹 상단 */}
        <div className="container">
          <div className="project-num">
            <p className="subtitle fade-up delay-2">{project.subtitle}</p>
          </div>
        </div>
        <div className="top_bg">
            <div 
              className="img_bg"
              style={{
                background: `url(${project.bg}) center / cover no-repeat`
              }}
            ></div>
        </div>
        <div className="container">
          <div className="title fade-up delay-3">{project.title}</div>
          <div className="top-area">
            <div className="text">
              <ul className="project-text fade-up delay-1">
                <li>
                  <span>작업 기여도</span>
                  <p>{project.contribution}</p>
                </li>

                <li>
                  <span>작업 기간</span>
                  <p>{project.duration}</p>
                </li>

                <li>
                  <span>작업 인원</span>
                  <p>{project.members}</p>
                </li>

                <li>
                  <span>사용 프로그램</span>
                  <p>{project.tools}</p>
                </li>
              </ul>
              <div className="project-tools fade-up delay-2">
                    {project.toolsIcons.map((icon, i) => (
                        <img key={i} src={icon} alt="project-tools" />
                    ))}
              </div>
              <div className="info-btn fade-up delay-3">
                <p>{project.description}</p>
                {/* buttons */}
                  <div className="project-buttons">
                    <a
                      href={project.website}
                      className="project-btn website"
                    >
                      <span className="btn-icon">
                        <img src={website_btn} alt="website_btn" />
                      </span>
                      WEBSITE
                    </a>
                    <a
                      href={project.github}
                      className="project-btn github"
                    >
                      <span className="btn-icon">
                        <img src={github_btn} alt="github_btn" />
                      </span>
                      GITHUB
                    </a>
                  </div>
              </div>
            </div>
            <div className="img-area fade-up delay-4">
              <img
                className="detail-monitor"
                src={monitor}
                alt="Mock-up"
              />
              <div className="detail-screen">
                <img
                  src={project.image}
                  alt={project.title}
                  className="detail-screen-img"
                />
              </div>
            </div>
          </div>
          <div className="detail_arrow">
            <FiChevronDown size={40} className="arrow first" />
            <FiChevronDown size={40} className="arrow second" />
          </div>
        </div>
       

        {/* 🔹 DESIGN */}
        <section className="design">
          <div className="container">
            <h3>DESIGN</h3>
            <div className="design-img">
              <img src={eclat_Detail} alt="eclat_Detail" />
            </div>
          </div>
        </section>

        {/* CONCEPT */}
        <section className="concept fade-up">
          <div className="container">
            <h3>CONCEPT</h3>
            <div className="line"></div>
  
            <div className="concept-top">
              <div className="typography">
                <p className="label fade-up delay-1">TYPOGRAPHY</p>
                <span className="use-text">
                  {project.concept.typography}
                </span>
              </div>
              <div className="color-wrap">
                <p className="label fade-up delay-1">COLOR</p>
                <div className="color-box">
                  {project.concept.colors.map((color, i) => (
                    <span key={i} style={{ background: color }}>
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONCEPT text */}
          <div className="container">
            <div className="concept-wrap">
              <div className="concept-box">
                <p className="label fade-up delay-2">DESIGN CONCEPT</p>
                <p className="concept-text">
                  {project.concept.conceptText}
                </p>
              </div>
  
              <div className="concept-box">
                <p className="label fade-up delay-3">DEVELOPMENT</p>
                <p className="concept-text fade-up delay-1">{project.concept.developmentText1}</p>
                <p className="concept-text fade-up delay-2">{project.concept.developmentText2}</p>
                <p className="concept-text fade-up delay-3">{project.concept.developmentText3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process fade-up">
          <div className="container">
            <h3>PROCESS</h3>
            <div className="line"></div>
            <div className="problem-text">
              <p className="process-text fade-up delay-1">{project.process.problem}</p>
            </div>
            <div className="solve-text">
              <img className="fade-up delay-2" src={process_arrow} alt="process_arrow" />
              <p className="process-text fade-up delay-3">{project.process.solution}</p>
            </div>
            </div>
        </section>

        {/* RESULT */}
        <section className="result fade-up">
          <div className="container">
            <h3>RESULT</h3>
            <div className="line"></div>
            <p className="result-text">{project.result}</p>
            <div className="result-box">
              <p className="label fade-up delay-2">Future Improvements</p>
              <ul className="result-list">
                <li className="list fade-up delay-1">{project.Improvements1}</li>
                <li className="list fade-up delay-2">{project.Improvements2}</li>
                <li className="list fade-up delay-3">{project.Improvements3}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 하단 네비 */}
        <div className="detail-nav">
          <button
            disabled={!prevProject}
            onClick={() => navigate(`/projects/${prevProject.id}`)}
          >
            ← PREV PROJECT
          </button>

          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          >
            BACK TO PROJECT
          </button>

          <button
            disabled={!nextProject}
            onClick={() => navigate(`/projects/${nextProject.id}`)}
          >
            NEXT PROJECT →
          </button>
        </div>

      </div>
    </section>
  </div>
)};

export default ProjectDetail;