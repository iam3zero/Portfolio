/* import notionIcon from "../assets/icons/notion.png";
import githubIcon from "../assets/icons/github.png"; */
import eclatImg from "../assets/img/eclat_fullpage.png";
import Moodscape from "../assets/img/moodscape_fullpage.png";
/* import DesignHotels from "../assets/img/DesignHotels_fullpage.png";
import passport from "../assets/img/passport_fullpage.png";
import bluebottle from "../assets/img/bluebottle_fullpage.png";
import shootingGame from "../assets/img/shootingGame_fullpage.png"; */

import eclat_projectDetail from "../assets/img/eclat_projectDetail.png";
import monitorImg from "../assets/img/projects_monitor.png";

import Photoshop from "../assets/icons/project_Photoshop.png";
import Figma from "../assets/icons/project_Figma.png";
import React from "../assets/icons/project_React.png";
import Vercel from "../assets/icons/Project_Vercel.png";
import SCSS from "../assets/icons/Project_SCSS.png";
/* import HTML from "../assets/icons/project_HTML.png";
import CSS from "../assets/icons/project_CSS.png";
import Javascript from "../assets/icons/project_Javascript.png"; */



const projects = [
  {
    id: 1,
    title: "향수 브랜드 ÉCLAT",
    image: eclatImg,
    subtitle: "PROJECT 01",
    contribution: "100%",
    duration: "2주",
    members: "4명 (TeamProject)",
    tools: "Adobe Photoshop | Figma | SCSS | React | Vercel",
    designImage: eclat_projectDetail,
    description: "보이지 않는 빛을 향으로 표현하는 가상의 비건 감성 향수 브랜드 ‘ÉCLAT’를 기획 및 디자인하여 웹사이트로 구현하였습니다. 보이지 않는 빛을 향으로 표현하는 가상의 비건 감성 향수 브랜드 ‘ÉCLAT’를 기획 및 디자인하여 웹사이트로 구현하였습니다.",

    concept: {
      typography: "Pretendard",
      colors: ["#8E8882", "#B5ABA0", "#F7F4F0"],

      conceptText: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
      developmentText: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다."
    },

    process: {
      problem: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
      solution: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다."
    },

    result: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다..",

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
    subtitle: "PROJECT 02",
    contribution: "100%",
    duration: "3주",
    members: "4명 (TeamProject)",
    tools: "Figma | SCSS | React | Vercel",
    designImage: eclat_projectDetail,
    description: "OpenWeather API 및 위치 데이터 활용하여 접속 즉시 '날씨 + 위치'를 반영해 최적화된 플레이리스트를 추천해주는 웹사이트를 REACT로 작업한 첫번째 팀 프로젝트입니다.",
    concept: {
      typography: "Pretendard",
      colors: ["#000000", "#6e6e6e", "#F7F4F0"],

      conceptText: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
      developmentText: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다."
    },

    process: {
      problem: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
      solution: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다."
    },

    result: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다..",

    monitor: monitorImg,

    website: "https://mood-scape-umber.vercel.app/",
    github: "https://github.com/ksyeon068/MoodScape",

    toolsIcons: [
          Photoshop,
          Figma,
          SCSS,
          React,
          Vercel,
        ]
  }
];

export default projects;