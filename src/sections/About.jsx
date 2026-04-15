import "../styles/about.scss";
import { useEffect } from "react";

import arrow from "../assets/icons/about_arrow.png";

import Photoshop from "../assets/icons/about_Photoshop.png";
import Illustrator from "../assets/icons/about_Illustrator.png";
import Premiere from "../assets/icons/about_Premiere.png";
import Effects from "../assets/icons/about_Effects.png";
import HTML from "../assets/icons/about_HTML.png";
import CSS from "../assets/icons/about_CSS.png";
import SCSS from "../assets/icons/about_SCSS.png";
import Javascript from "../assets/icons/about_JavaScript.png";
import jQuery from "../assets/icons/about_jQuery.png";
import React from "../assets/icons/about_React.png";
import Vue from "../assets/icons/about_Vue.png";
import GitHub from "../assets/icons/about_GitHub.png";
import Studio from "../assets/icons/about_Studio.png";
import CapCut from "../assets/icons/about_CapCut.png";
import Figma from "../assets/icons/about_Figma.png";
import Cursor from "../assets/icons/about_Cursor.png";

function About() {
  /* IntersectionObserver */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .fade-down, .fade-left, .fade-right, .fade-scale, .line-animate, .skill-icons"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  /* 아이콘 ↔ 텍스트 연결 */
  useEffect(() => {
  const wrap = document.querySelector(".skill-wrap");
  const icons = document.querySelectorAll(".icon-box");
  const skills = document.querySelectorAll(".skill-list span");

  // 아이콘 → 텍스트
  icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    const skill = icon.dataset.skill;

    icons.forEach(i => i.classList.remove("active"));
    icon.classList.add("active");

    skills.forEach((el) => {
      el.classList.toggle("active", el.dataset.skill === skill);
    });
  });
});

  // 텍스트 → 아이콘
  skills.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    const skill = text.dataset.skill;

    skills.forEach(t => t.classList.remove("active"));
    text.classList.add("active");

    icons.forEach((icon) => {
      icon.classList.toggle("active", icon.dataset.skill === skill);
    });
  });
});

// 영역 벗어나면 초기화
  wrap.addEventListener("mouseleave", () => {
    icons.forEach(i => i.classList.remove("active"));
    skills.forEach(t => t.classList.remove("active"));
  });

}, []);

  return (
    <section className="about" id="about">

      <div className="about-inner">

        {/* section title */}
        <h2 className="about-title fade-down">ABOUT ME</h2>

        {/* top profile area */}
        <div className="about-top">

          {/* profile image */}
          <div className="about-photo fade-scale" data-speed="0.2">
            <div className="photo-placeholder">
                {/* <a href="#"><img src={profile} alt="Notion" /></a> */}
            </div>
            <span className="resume-icon"><img src={arrow} alt="arrow" /></span>
            <p className="resume-link">
              입사지원서 바로가기
            </p>
          </div>

          {/* introduction text */}
          <div className="about-intro fade-right" data-speed="0.1">

            <span className="about-role">
              PUBLISHER DESIGNER
            </span>

            <h3 className="about-headline">
              <p className="fade-up delay-1">듣고,</p>
              <p className="fade-up delay-2">다듬고,</p>
              <p className="fade-up delay-3">조율하다.</p>
            </h3>
            <div className="line line-animate"></div>

            <p className="about-desc fade-up delay-2">
              웹 퍼블리싱은 작은 차이가 사용자 경험을 바꾼다고 생각합니다.<br />
              레이아웃 구조와 인터랙션, 반응형 환경까지 디테일을 고민하며<br />
              더 나은 UI를 구현하기 위해 끊임없이 배우고 성장하고 있습니다.<br />
              디자인과 개발 사이를 연결하는 소통과 태도 중심의 퍼블리셔가 되고자 합니다.
            </p>

          </div>

        </div>

        {/* bottom info area */}
        <div className="about-bottom">

          {/* left info */}
          <div className="about-info">

            <div className="info-row fade-left delay-1">
              <span className="info-title">NAME</span>
              <div className="info-content">
                <div className="name-box">
                  <p>최세영</p>
                  <p className="name-en">SEYOUNG CHOI</p>
                </div>
                <span>1998. 01. 25</span>
              </div>
            </div>

            <div className="info-row fade-left delay-2">
              <span className="info-title">CONTACT</span>
              <div className="info-content">
                <div className="contact-box">
                  <p>010-7772-7771</p>
                  <p>3ze-ro2@naver.com</p>
                </div>
              </div>
            </div>

            <div className="info-row fade-left delay-3">
              <span className="info-title">LICENSE</span>
              <div className="info-content">
                <ul className="license-box">
                  <li>웹디자인개발기능사<span> 2026</span></li>
                  <li>운전면허자격증 2종보통<span> 2020</span></li>
                  <li>조주기능사<span> 2017</span></li>
                  <li>ITQ 한글/파워포인트<span> 2017</span></li>
                  <li>워드프로세서 2,3급<span> 2017</span></li>
                  <li>문서실무사<span> 2017</span></li>
                </ul>
              </div>
            </div>

          </div>

          {/* right skill */}
          <div className="about-skill skill-wrap">

            <h4 className="skill-title fade-up">SKILL</h4>

            <div className="skill-list fade-up delay-1">

              {/* DESIGN */}
              <div className="skill-group">
                <span className="group-title">Design</span>
                <div className="group-items">
                  <span data-skill="photoshop">Photoshop</span>
                  <span data-skill="illustrator">Illustrator</span>
                  <span data-skill="figma">Figma</span>
                </div>
              </div>

              {/* PUBLISHING */}
              <div className="skill-group">
                <span className="group-title">Publishing</span>
                <div className="group-items">
                  <span data-skill="html">HTML</span>
                  <span data-skill="css">CSS</span>
                  <span data-skill="scss">SCSS</span>
                  <span data-skill="javascript">JavaScript</span>
                  <span data-skill="jquery">jQuery</span>
                </div>
              </div>

              {/* FRAMEWORK */}
              <div className="skill-group">
                <span className="group-title">Framework</span>
                <div className="group-items">
                  <span data-skill="react">React</span>
                  <span data-skill="vue">Vue</span>
                </div>
              </div>

              {/* TOOL */}
              <div className="skill-group">
                <span className="group-title">Tools</span>
                <div className="group-items">
                  <span data-skill="github">GitHub</span>
                  <span data-skill="cursor">Cursor</span>
                  <span data-skill="studio">AI Studio</span>
                </div>
              </div>

              {/* VIDEO */}
              <div className="skill-group">
                <span className="group-title">Video</span>
                <div className="group-items">
                  <span data-skill="premiere">Premiere</span>
                  <span data-skill="effects">After Effects</span>
                  <span data-skill="capcut">CapCut</span>
                </div>
              </div>

            </div>

            {/* skill icons */}
            <div className="skill-icons fade-up">

              <div className="icon-box" data-skill="photoshop">
                <img src={Photoshop} alt="Photoshop" />
              </div>
              <div className="icon-box" data-skill="illustrator">
                <img src={Illustrator} alt="Illustrator" />
              </div>
              <div className="icon-box" data-skill="premiere">
                <img src={Premiere} alt="Premiere" />
              </div>
              <div className="icon-box" data-skill="effects">
                <img src={Effects} alt="Effects" />
              </div>
              <div className="icon-box" data-skill="html">
                <img src={HTML} alt="HTML" />
              </div>
              <div className="icon-box" data-skill="css">
                <img src={CSS} alt="CSS" />
              </div>
              <div className="icon-box" data-skill="scss">
                <img src={SCSS} alt="SCSS" />
              </div>
              <div className="icon-box" data-skill="javascript">
                <img src={Javascript} alt="Javascript" />
              </div>
              <div className="icon-box" data-skill="jquery">
                <img src={jQuery} alt="jQuery" />
              </div>
              <div className="icon-box" data-skill="react">
                <img src={React} alt="React" />
              </div>
              <div className="icon-box" data-skill="vue">
                <img src={Vue} alt="Vue" />
              </div>
              <div className="icon-box" data-skill="github">
                <img src={GitHub} alt="GitHub" />
              </div>
              <div className="icon-box" data-skill="cursor">
                <img src={Cursor} alt="Labs" />
              </div>
              <div className="icon-box" data-skill="figma">
                <img src={Figma} alt="Grok" />
              </div>
              <div className="icon-box" data-skill="studio">
                <img src={Studio} alt="Studio" />
              </div>
              <div className="icon-box" data-skill="capcut">
                <img src={CapCut} alt="CapCut" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;