/* import notionIcon from "../assets/icons/notion.png";
import githubIcon from "../assets/icons/github.png"; */
import eclatImg from "../assets/img/eclat_fullpage.png";
import Moodscape from "../assets/img/Moodscape_fullpage.png";
import DesignHotels from "../assets/img/DesignHotels_fullpage.png";
import passport from "../assets/img/passport_fullpage.png";
import bluebottle from "../assets/img/bluebottle_fullpage.png";
import shootingGame from "../assets/img/shootingGame_fullpage.png";

import monitorImg from "../assets/img/projects_monitor.png";

import Photoshop from "../assets/icons/project_Photoshop.png";
import Figma from "../assets/icons/project_Figma.png";
import React from "../assets/icons/project_React.png";
import Vercel from "../assets/icons/Project_Vercel.png";
import SCSS from "../assets/icons/Project_SCSS.png";
import HTML from "../assets/icons/project_HTML.png";
import CSS from "../assets/icons/project_CSS.png";
import Javascript from "../assets/icons/project_Javascript.png";



export const projectsData = [
  {
    id: 1,
    title: "향수 브랜드 ÉCLAT",
    image: eclatImg,
    category: "01 PROJECT",
    contribution: "100%",
    duration: "2주",
    members: "4명 (TeamProject)",
    tools: "Adobe Photoshop | Figma | SCSS | React | Vercel",
    description:
      "보이지 않는 빛을 향으로 표현하는 가상의 국내 니치향수 브랜드 ‘ÉCLAT’를 기획 및 디자인하여 웹사이트로 구현하였습니다. 제품 라인 및 패키지 기획부터 주요 타켓층을 설정하여 감성 중심의 웹사이트로 구현 방향을 정하고 웹 프론트를 REACT로 작업하였습니다.",

    monitor: monitorImg,
    

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
    title: "날씨기반 플리 웹사이트 'MOODSCAPE'",
    image: Moodscape,
    category: "02 PROJECT",
    contribution: "100%",
    duration: "3주",
    members: "4명 (TeamProject)",
    tools: "Figma | SCSS | React | Vercel",
    description: "OpenWeather API 및 위치 데이터 활용하여 접속 즉시 '날씨 + 위치'를 반영해 최적화된 플레이리스트를 추천해주는 웹사이트를 REACT로 작업한 첫번째 팀 프로젝트입니다.",

    monitor: monitorImg,

    website: "https://mood-scape-umber.vercel.app/",
    github: "https://github.com/ksyeon068/MoodScape",

    toolsIcons: [
      Figma,
      SCSS,
      React,
      Vercel,
    ]
  },

  {
    id: 3,
    title: "DESIGN HOTELS",
    image: DesignHotels,
    category: "03 PROJECT",
    contribution: "100%",
    duration: "3일",
    members: "1명",
    tools: "HTML | CSS | JAVASCRIPT | API",
    description: "기존 디자인호텔스 웹사이트를 참고하여 메인페이지를 반응형 페이지로 리뉴얼하여 작업했습니다. 미디어쿼리를 사용하여 모든 기기에서 보기 편하도록 작업하였습니다.",

    monitor: monitorImg,

    website: "https://iam3zero.github.io/hote/",
    github: "https://github.com/iam3zero/hote",

    toolsIcons: [
      HTML,
      CSS,
      Javascript,
    ]
  },

  {
    id: 4,
    title: "외교부 여권안내 클론코딩",
    image: passport,
    category: "04 PROJECT",
    contribution: "100%",
    duration: "2달",
    members: "1명",
    tools: "HTML | CSS | JAVASCRIPT",
    description: "웹표준과 웹 접근성을 중시한 외교부 클론코딩 프로젝트입니다. HTML과 CSS를 사용하여 화면을 구성했으며, 반응형 및 Swiper 라이브러리를 사용하여 슬라이드를 구현했습니다.",

    monitor: monitorImg,

    website: "https://iam3zero.github.io/passport/",
    github: "https://github.com/iam3zero/passport",
    toolsIcons: [
      HTML,
      CSS,
      Javascript,
    ]
  },

  {
    id: 5,
    title: "BLUE BOTTLE 클론코딩",
    image: bluebottle,
    category: "05 PROJECT",
    contribution: "100%",
    duration: "3일",
    members: "1명",
    tools: "HTML | CSS | JAVASCRIPT",
    description: "메인페이지 클론코딩과 더불어 반응형 페이지로 리뉴얼하여 제작했습니다. 미디어쿼리를 활용하여 모바일 환경에서 이용할 수 있는 모바일 메뉴바를 구현하고, swiper 라이브러리를 활용하여 슬라이드를 구현했습니다.",
    monitor: monitorImg,
    website: "https://iam3zero.github.io/Bluebottle/",
    github: "https://github.com/iam3zero/Bluebottle",
    toolsIcons: [
      HTML,
      SCSS,
      Javascript,
    ]
  },

  {
    id: 6,
    title: "2D MARIO 슈팅게임",
    image: shootingGame,
    category: "06 PROJECT",
    contribution: "100%",
    duration: "2시간",
    members: "1명",
    tools: "HTML CANVERS | JAVASCRIPT | CSS",
    description: "HTML5 <canvas> 태그와 JavaScript를 활용하여 브라우저에서 실행되는 2D 슈팅게임을 제작하였습니다.",
    monitor: monitorImg,
    screen: "/images/project1.png",
    website: "https://iam3zero.github.io/shooting-game/",
    github: "https://github.com/iam3zero/shooting-game",
    toolsIcons: [
      HTML,
      CSS,
      Javascript,
    ]
  },

  {
    id: 7,
    title: "Project Title",
    category: "07 PROJECT",
    contribution: "100%",
    duration: "3일",
    members: "1명",
    tools: "React",
    description: "현재 준비중인 프로젝트 입니다. 기대해주세요!",
    monitor: monitorImg,

    website: "#",
    github: "#",
    toolsIcons: []
  },

  {
    id: 8,
    title: "Project Title",
    category: "08 PROJECT",
    contribution: "100%",
    duration: "3일",
    members: "1명",
    tools: "React",
    description: "현재 준비중인 프로젝트 입니다. 기대해주세요!",
    monitor: monitorImg,

    website: "#",
    github: "#",
    toolsIcons: []
  }
];

export default projectsData;