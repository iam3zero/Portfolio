import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/projects.scss";
/* import projects from "../data/projects"; */
import projectsData from "../data/projectsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, EffectCreative} from "swiper/modules";

import monitor from "../assets/img/projects_monitor.png";
import github_btn from "../assets/icons/github_btn.png";
import website_btn from "../assets/icons/website_btn.png";
import project_arrow from "../assets/icons/project_arrow.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
    const projectRef = useRef(null);
    const navigate = useNavigate();

    /* 스크롤 감지 코드 */
    useEffect(() => {

        const section = projectRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                section.classList.add("show");
                }
            });
            },
            {
            threshold: 0.2
            }
        );

        observer.observe(section);

        return () => observer.disconnect();

        }, []);
        
        /* 스크린 속 이미지 자동 높이 지정 */
        useEffect(() => {
          const screens = document.querySelectorAll(".screen");

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
    <section
        className="projects"
        id="projects"
        ref={projectRef}
        >

      <div className="projects-inner">

        {/* section title */}
        <header className="projects-header">
          <h2 className="projects-title">PROJECT</h2>
        </header>

        <div className="projects-swiper-wrap">

            {/* custom arrows */}
            <button className="projects-arrow prev" aria-label="이전 프로젝트"></button>
            <button className="projects-arrow next" aria-label="다음 프로젝트"></button>

            <Swiper
                modules={[Navigation, Pagination, Mousewheel, EffectCreative  ]}
                effect="creative"
                creativeEffect={{
                    prev: {
                    translate: ["-100%", 0, -500],
                    opacity: 0
                    },
                    next: {
                    translate: ["100%", 0, -500],
                    opacity: 0
                    }
                }}
                slidesPerView={1}
                loop={true}
                speed={800}
                grabCursor={true}
                mousewheel={true}
                navigation={{
                    prevEl: ".projects-arrow.prev",
                    nextEl: ".projects-arrow.next"
                    }}
                pagination={{
                    type: "progressbar",
                    clickable: true
                    }}
            className="projects-swiper"
            >

          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>

              <div className="project-content">

                {/* monitor image */}

                <div className="project-image">

                    <img
                        className="monitor"
                        src={monitor}
                        alt="Mock-up"
                    />
                    <div className="screen">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="screen-img"
                      />
                      <button
                        className="detail-btn"
                        onClick={() => navigate(`/projects/${project.id}`)}
                      >
                        Click
                      </button>
                    </div>
                    {/* <div className="screen">
                        <img src={project.image} alt={project.title} />
                        <button className="detail-btn">
                        Click
                      </button>
                    </div> */}
                    <span className="pj-resume-icon"><img src={project_arrow} alt="arrow" /></span>
                      <p className="pj-resume-link">
                        PROJECT DETAIL PAGE
                      </p>

                </div>

                {/* project info */}

                <div className="project-info">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h2 className="project-title">
                    {project.title}
                  </h2>

                  <ul className="project-meta">

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

                  <p className="project-desc">
                    {project.description}
                  </p>

                  {/* buttons */}

                  <div className="project-buttons">

                    <a
                      href={project.website} target="_blank"
                      className="project-btn website"
                    >
                      <span className="btn-icon">
                        <img src={website_btn} alt="website_btn" />
                      </span>
                      WEBSITE
                    </a>

                    <a
                      href={project.github} target="_blank"
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

            </SwiperSlide>

          ))}

        </Swiper>

        </div>
      </div>

    </section>
  );
}

export default Projects;