import notionIcon from "../assets/icons/notion.png";
import githubIcon from "../assets/icons/github.png";
import eclatImg from "../assets/img/eclat_fullpage.png";
import Moodscape from "../assets/img/Moodscape_fullpage.png";
import DesignHotels from "../assets/img/DesignHotels_fullpage.png";
import passport from "../assets/img/passport_fullpage.png";
import bluebottle from "../assets/img/bluebottle_fullpage.png";
import shootingGame from "../assets/img/shootingGame_fullpage.png";

import Photoshop from "../assets/icons/project_Photoshop.png";
import Figma from "../assets/icons/project_Figma.png";
import React from "../assets/icons/project_React.png";
import Vercel from "../assets/icons/Project_Vercel.png";
import SCSS from "../assets/icons/Project_SCSS.png";
import HTML from "../assets/icons/project_HTML.png";
import CSS from "../assets/icons/project_CSS.png";
import Javascript from "../assets/icons/project_Javascript.png";

const projects = [
  {
    id: 1,
    title: "향수 브랜드 ÉCLAT",
    subtitle: "PROJECT 01",
    contribution: "100%",
    duration: "2주",
    members: "4명 (TeamProject)",
    tools: "Adobe Photoshop | Figma | SCSS | React | Vercel",
    image: "../assets/img/projects_monitor.png",
    designImage: "/images/project1-design.png",
    description: "보이지 않는 빛을 향으로 표현하는 가상의 비건 감성 향수 브랜드 ‘ÉCLAT’를 기획 및 디자인하여 웹사이트로 구현하였습니다. 보이지 않는 빛을 향으로 표현하는 가상의 비건 감성 향수 브랜드 ‘ÉCLAT’를 기획 및 디자인하여 웹사이트로 구현하였습니다.",

    website: "https://eclat-t.vercel.app/",
    github: "https://github.com/seongeun040624/eclatT",

    toolsIcons: [
          Photoshop,
          Figma,
          SCSS,
          React,
          Vercel,
        ]
  },
  {
    id: 2,
    title: "PROJECT 02",
    subtitle: "PROJECT 02",
    contribution: "100%",
    duration: "2주",
    members: "4명 (TeamProject)",
    tools: "Adobe Photoshop | Figma | SCSS | React | Vercel",
    image: "/images/project2-main.png",
    designImage: "/images/project2-design.png",
  }
];

export default projects;