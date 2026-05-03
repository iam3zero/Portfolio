/* import notionIcon from "../assets/icons/notion.png";
import githubIcon from "../assets/icons/github.png"; */
import eclatImg from "../assets/img/eclat_fullpage.png";
import Moodscape from "../assets/img/moodscape_fullpage.png";
/* import DesignHotels from "../assets/img/designhotels_fullpage.png";
import passport from "../assets/img/passport_fullpage.png";
import bluebottle from "../assets/img/bluebottle_fullpage.png";
import shootingGame from "../assets/img/shootinggame_fullpage.png"; */

import eclat_projectDetail from "../assets/img/eclat_projectdetail.png";
import monitorImg from "../assets/img/projects_monitor.png";

import Photoshop from "../assets/icons/project_photoshop.png";
import Figma from "../assets/icons/project_figma.png";
import React from "../assets/icons/project_react.png";
import Vercel from "../assets/icons/project_vercel.png";
import SCSS from "../assets/icons/project_scss.png";
/* import HTML from "../assets/icons/project_hTML.png";
import CSS from "../assets/icons/project_css.png";
import Javascript from "../assets/icons/project_javascript.png"; */

import eclat_bg from "../assets/img/eclat_bg.png";
import moodscape_bg from "../assets/img/moodscape_bg.png";



const projects = [
  {
    id: 1,
    title: "향수 브랜드 ÉCLAT",
    image: eclatImg,
    bg: eclat_bg,
    subtitle: "PROJECT 01",
    contribution: "기획 및 디자인 주도 · 퍼블리싱 섹션별 협업",
    duration: "약 2주간 작업",
    members: "4명 (TeamProject)",
    tools: "Adobe Photoshop | Figma | SCSS | React | Vercel",
    designImage: eclat_projectDetail,
    description: "가상의 국내 니치 향수 브랜드 ÉCLAT를 기획하고, 이를 웹사이트로 구현한 프로젝트입니다. 학원에서 진행한 두 번째 팀 프로젝트로, 4인이 참여하여 약 2주간 진행되었습니다. 브랜드 기획부터 디자인, 웹 퍼블리싱까지 전 과정을 경험하며 하나의 브랜드를 디지털 환경에서 어떻게 표현할 수 있는지에 중점을 두었습니다.",

    concept: {
      typography1: "Pretendard",
      typography2: "Montserrat",
      colors: ["#8E8882", "#B5ABA0", "#F7F4F0"],

      conceptText: "브랜드명 ÉCLAT는 ‘빛남’, ‘광채’를 의미합니다. 이러한 ‘빛’의 이미지를 시각적으로 풀어내기 위해 “Light Collection (빛의 순간들)”이라는 컨셉을 설정하고 총 5가지 향수 라인을 기획하였습니다. 각 향수는 하나의 ‘빛’을 상징하며, 프리즘을 통과한 햇살에서 영감을 받아 각 라인별 컬러를 담은 투명한 유리 보틀로 디자인하였습니다. 전체 컬러는 자연에서 추출한 색감을 기반으로 톤 다운된 브라운을 메인으로 설정하여 차분하면서도 깊이 있는 브랜드 이미지를 구축했습니다.",
      developmentText1: "메인 페이지는 One Page Scroll 구조를 적용하여 사용자가 자연스럽게 스크롤을 따라 Brand Story와 Gift 섹션까지 이어지도록 설계하였습니다.",
      developmentText2: "Brand Story 영역에서는 opacity 애니메이션을 활용하여 각 향수 라인 구간에 도달할 때 콘텐츠가 부드럽게 나타나도록 구현하였으며, 이를 통해 브랜드가 가진 ‘빛’의 흐름과 감성을 시각적으로 전달하고자 했습니다.",
      developmentText3: "브랜드 정체성인 ‘빛’을 효과적으로 표현하기 위해 메인 비주얼에 그림자와 빛이 강조된 이미지, 그리고 향수 보틀 오브제를 함께 배치하여 브랜드의 무드를 직관적으로 전달할 수 있도록 구성했습니다.",
    },

    process: {
      problem: "디자인 전공자가 없는 팀 구성으로 기획 → 디자인 → 퍼블리싱 전 과정이 동시에 진행되면서 초기 방향 설정에 어려움을 겪었습니다. 명확한 기획 없이 디자인을 시작하면서 브랜드 아이덴티티가 모호해졌고, 프로젝트 진행 속도 또한 크게 저하되었습니다.",
      solution: "프로젝트 마감 약 일주일 전, 기획과 브랜드 정체성 재정립을 우선 과제로 설정하고 Figma를 활용해 와이어프레임을 새롭게 제작하였습니다. 이 과정에서 레퍼런스 분석과 경쟁사 조사를 병행하며 브랜드 방향성을 구체화했고, 그 결과 디자인과 퍼블리싱까지 제한된 기간 내 안정적으로 완성할 수 있었습니다."
    },

    result: "초기에는 팀원들의 의견을 모두 반영하는 데 집중했지만, 오히려 방향성이 흐려지고 작업 효율이 떨어지는 문제를 경험했습니다. 이후 주도적으로 와이어프레임을 제안하고 방향을 정리하면서 팀원들과의 협업이 훨씬 원활해졌고, 프로젝트를 안정적으로 마무리할 수 있었습니다. 이번 프로젝트를 통해 디자인은 단순한 시각적 결과물이 아니라 명확한 기준과 방향성에서 출발해야 한다는 점, 그리고 팀 프로젝트에서 주도적인 커뮤니케이션의 중요성을 깊이 이해하게 되었습니다.",
    Improvements1: "로그인 및 회원가입, 검색 필터 기능 구현",
    Improvements2: "다양한 디바이스 대응을 위한 반응형 설계",
    Improvements3: "브랜드 핵심 컨셉인 ‘빛’을 더욱 강조하기 위한 영상 콘텐츠 제작",

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
    bg: moodscape_bg,
    subtitle: "PROJECT 02",
    contribution: "100%",
    duration: "3주",
    members: "4명 (TeamProject)",
    tools: "Figma | SCSS | React | Vercel",
    designImage: eclat_projectDetail,
    description: "OpenWeather API 및 위치 데이터 활용하여 접속 즉시 '날씨 + 위치'를 반영해 최적화된 플레이리스트를 추천해주는 웹사이트를 REACT로 작업한 첫번째 팀 프로젝트입니다.",
    concept: {
      typography1: "Noto Sans KR",
      colors: ["#333333", "#555555", "#888888","#eeeeee"],

      conceptText: "브랜드명 ÉCLAT는 ‘빛남’, ‘광채’를 의미합니다. 이러한 ‘빛’의 이미지를 시각적으로 풀어내기 위해 “Light Collection (빛의 순간들)”이라는 컨셉을 설정하고 총 5가지 향수 라인을 기획하였습니다. 각 향수는 하나의 ‘빛’을 상징하며, 프리즘을 통과한 햇살에서 영감을 받아 각 라인별 컬러를 담은 투명한 유리 보틀로 디자인하였습니다. 전체 컬러는 자연에서 추출한 색감을 기반으로 톤 다운된 브라운을 메인으로 설정하여 차분하면서도 깊이 있는 브랜드 이미지를 구축했습니다.",
      developmentText1: "메인 페이지는 One Page Scroll 구조를 적용하여 사용자가 자연스럽게 스크롤을 따라 Brand Story와 Gift 섹션까지 이어지도록 설계하였습니다.",
      developmentText2: "Brand Story 영역에서는 opacity 애니메이션을 활용하여 각 향수 라인 구간에 도달할 때 콘텐츠가 부드럽게 나타나도록 구현하였으며, 이를 통해 브랜드가 가진 ‘빛’의 흐름과 감성을 시각적으로 전달하고자 했습니다.",
      developmentText3: "브랜드 정체성인 ‘빛’을 효과적으로 표현하기 위해 메인 비주얼에 그림자와 빛이 강조된 이미지, 그리고 향수 보틀 오브제를 함께 배치하여 브랜드의 무드를 직관적으로 전달할 수 있도록 구성했습니다.",
    },

    process: {
      problem: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
      solution: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다."
    },

    result: "ÉCLAT는 보이지 않는 내면의 빛을 향으로 풀어내는 브랜드입니다. 눈에 보이는 것 너머에는 사람마다 고유한 빛이 존재합니다. 향은 단순한 냄새가 아니라, 기억을 깨우고 감정을 움직이며 한 사람의 분위기를 완성하는 또 하나의 언어입니다. 각각의 향은 하나의 빛이 되어, 당신의 순간에 스며들고 당신을 더욱 빛나게 합니다.",
    Improvements1: "로그인 및 회원가입 기능 구현",
    Improvements2: "다양한 디바이스 대응을 위한 반응형 설계",
    Improvements3: "브랜드 핵심 컨셉인 ‘빛’을 더욱 강조하기 위한 영상 콘텐츠 제작",

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