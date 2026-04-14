import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import "../styles/projectDetail.scss";

import github_btn from "../assets/icons/github_btn.png";
import website_btn from "../assets/icons/website_btn.png";

import monitor from "../assets/img/projects_monitor.png";

import eclat_bg from "../assets/img/eclat_bg.png";

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

      img.onload = () => {
        const screenHeight = screen.offsetHeight;
        const imgHeight = img.offsetHeight;

        const move = imgHeight - screenHeight;

        img.style.setProperty("--scroll-distance", `${move}px`);
      };
    });
  }, []);

  return (
    <section className="project-detail">
      <div className="project-detail-inner">
        <div className="container">
          <div className="project-detail-name">PROJECT DETAIL PAGE</div>
          <div className="project-detail-line"></div>
        </div>

        {/* 🔹 상단 */}
        <div className="container">
          <div className="project-num">
            <p className="subtitle">{project.subtitle}</p>
          </div>
        </div>
        <div className="top_bg">
            <div className="img_bg"/>
        </div>
        <div className="container">
          <div className="title">{project.title}</div>
          <div className="top-area">
            <div className="text">
              <ul className="project-text">
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
              <div className="project-tools">
                    {project.toolsIcons.map((icon, i) => (
                        <img key={i} src={icon} alt="project-tools" />
                    ))}
              </div>
              <div className="info-btn">
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
            <div className="img-area">
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
        </div>
       

        {/* 🔹 DESIGN */}
        <section className="design">
          <h3>DESIGN</h3>
          <div className="design-img">
            <img src={project.designImage} alt="design" />
          </div>
        </section>

        {/* 🔹 CONCEPT */}
        <section className="concept">
          <h3>CONCEPT</h3>

          <div className="concept-top">
            <div>
              <p className="label">TYPOGRAPHY</p>
              <h4>Pretendard</h4>
            </div>

            <div>
              <p className="label">COLOR</p>
              <div className="color-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="concept-text">
            <div>
              <p className="label">DESIGN CONCEPT</p>
              <p>디자인 컨셉 내용 들어가는 자리입니다.</p>
            </div>

            <div>
              <p className="label">DEVELOPMENT</p>
              <p>개발 설명 내용 들어가는 자리입니다.</p>
            </div>
          </div>
        </section>

        {/* 🔹 PROCESS */}
        <section className="process">
          <h3>PROCESS</h3>
          <p>프로세스 설명 영역입니다.</p>
        </section>

        {/* 🔹 RESULT */}
        <section className="result">
          <h3>RESULT</h3>
          <p>결과 설명 영역입니다.</p>
        </section>

        {/* 🔹 하단 네비 */}
        <div className="detail-nav">
          <button
            disabled={!prevProject}
            onClick={() => navigate(`/projects/${prevProject.id}`)}
          >
            ← PREV PROJECT
          </button>

          <button onClick={() => navigate("/")}>
            HOME
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
  );
}

export default ProjectDetail;