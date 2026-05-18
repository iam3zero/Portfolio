/* import notionIcon from "../assets/icons/notion.png";
import githubIcon from "../assets/icons/github.png"; */
import eclatImg from "../assets/img/eclat_fullpage.png";
import Moodscape from "../assets/img/moodscape_fullpage.png";
import DesignHotels from "../assets/img/designhotels_fullpage.png";
import passport from "../assets/img/passport_fullpage.png";
/* import bluebottle from "../assets/img/bluebottle_fullpage.png";
import shootingGame from "../assets/img/shootinggame_fullpage.png"; */

import eclat_projectDetail from "../assets/img/eclat_projectdetail.png";
import moodscape_projectDetail from "../assets/img/moodscape_projectdetail.png";
import designhotels_projectdetail from "../assets/img/designhotels_projectdetail.png";

import monitorImg from "../assets/img/projects_monitor.png";

import Photoshop from "../assets/icons/project_photoshop.png";
import Figma from "../assets/icons/project_figma.png";
import React from "../assets/icons/project_react.png";
import Vercel from "../assets/icons/project_vercel.png";
import SCSS from "../assets/icons/project_scss.png";
import HTML from "../assets/icons/project_html.png";
import CSS from "../assets/icons/project_css.png";
import Javascript from "../assets/icons/project_javascript.png";

import eclat_bg from "../assets/img/eclat_bg.png";
import moodscape_bg from "../assets/img/moodscape_bg.png";
import designhotels_bg from "../assets/img/designhotels_bg.png";
import passport_bg from "../assets/img/passport_bg.png";



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
    designImage: moodscape_projectDetail,
    description: "OpenWeather API와 사용자 위치 데이터를 활용하여 접속 즉시 ‘날씨 + 위치’를 반영한 맞춤형 플레이리스트를 추천하는 웹사이트입니다. React 기반으로 제작한 첫 번째 팀 프로젝트로, 실시간 데이터와 사용자 경험을 연결하는 서비스 구현에 중점을 두었습니다.",
    concept: {
      typography1: "Noto Sans KR",
      colors: ["#333333", "#555555", "#888888","#eeeeee"],

      conceptText: "MoodScape는 ‘Mood(분위기)’와 ‘Landscape(풍경)’의 합성어로, 날씨에 따라 변화하는 감정과 그 감정이 하나의 풍경처럼 확장되는 경험을 의미합니다. 사용자는 날씨에 따라 기분이 달라지고, 그에 따라 선호하는 음악 또한 자연스럽게 변화합니다. 본 프로젝트는 이러한 흐름에서 더 나아가 시각적 요소(날씨)와 청각적 요소(음악)를 결합해 감정의 확장을 유도하는 경험을 목표로 설계했습니다. 컬러 시스템은 날씨 상태에 따라 구분하여 설계하였습니다. 맑음, 흐림, 비, 눈, 안개, 폭풍 등 총 6가지 날씨를 기준으로 각 상황에 맞는 색상을 정의하고, 실시간 날씨 데이터에 따라 UI 테마가 자연스럽게 변화하도록 구성했습니다.",
      developmentText1: "1. Component Architecture : React 기반 컴포넌트 구조를 중심으로 설계하였으며, useState, useEffect, useRef 등의 Hook을 활용해 각 UI 요소가 독립적으로 동작하면서도 안정적으로 상태를 관리할 수 있도록 구현했습니다.",
      developmentText2: "2. State Management : Context API를 활용하여 전역 상태를 관리했습니다. 날씨 데이터와 같은 공통 정보를 여러 컴포넌트에서 공유할 수 있도록 설계하여 데이터 흐름을 단순화하고 유지보수성을 높였습니다.",
      developmentText3: "3. Weather-based System : OpenWeather API와 브라우저 위치 정보를 기반으로 사용자의 현재 위치 좌표를 수집하고, 해당 지역의 실시간 날씨, 예보, 미세먼지 데이터를 연동했습니다. 수집된 데이터를 기반으로 UI 테마와 플레이리스트 분위기가 자동으로 매핑되도록 구성하여 사용자 상황에 최적화된 경험을 제공했습니다.",
      developmentText4: "4. Media Optimization : 배경 영상 및 오디오 리소스를 안정적으로 제공하기 위해 프로젝트 전용 YouTube 채널을 활용하여 고화질 미디어를 관리했습니다. 이를 통해 서버 부하를 최소화하면서도 끊김 없는 스트리밍 환경을 구현하여 몰입감 있는 사용자 경험을 제공했습니다.",
    },

    process: {
      problem: "첫 팀 프로젝트로, 비전공자 중심의 팀 구성에서 주제 선정과 방향 설정 단계에서 어려움을 겪었습니다. 다양한 의견이 존재했지만 명확한 기준이 부족해 의사결정이 지연되었고, 디자인 전공자가 없는 상황에서 시각적 방향성 설정 또한 주요 과제였습니다.",
      solution: "주제에 대한 이해도를 높이기 위해 기획 내용을 구체화하여 팀원들에게 다시 제안하고, 명확한 방향성을 중심으로 논의를 재정리했습니다. 이를 기반으로 레퍼런스 분석을 병행하며 디자인 방향을 빠르게 정립했고, 본 프로젝트는 디자인보다 기능 구현에 집중하는 전략으로 전환했습니다. 그 결과 역할 분담이 명확해지고 개발 속도와 협업 효율이 크게 향상되었습니다."
    },

    result: "첫 팀 프로젝트에서 각자 맡은 기능을 독립적으로 구현하면서도 지속적인 소통을 통해 서로의 작업을 보완해 나가는 과정을 경험했습니다. 초기에는 방향 설정에 어려움을 겪었지만, 기본 구조를 빠르게 잡고 피드백을 주고받으며 개선해 나가는 과정 속에서 팀 프로젝트의 협업 방식과 흐름을 체득할 수 있었습니다. 이 경험을 바탕으로 이후 프로젝트에서는 보다 효율적인 커뮤니케이션과 역할 분담이 가능해졌습니다.",
    Improvements1: "사용자 계정 기능(로그인/회원가입)을 추가하여 개인화된 ‘My Playlist’ 기능 확장",
    Improvements2: "다양한 음악 데이터를 활용하기 위한 외부 음악 API 연동",
    Improvements3: "유튜브 외부 이동 없이 웹사이트 내에서 플레이리스트 영상을 직접 재생할 수 있도록 개선",

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
    bg: designhotels_bg,
    subtitle: "PROJECT 03",
    contribution: "100%",
    duration: "3일",
    members: "1명",
    tools: "HTML | CSS | JAVASCRIPT | API",
    designImage: designhotels_projectdetail,
    description: "OpenWeather API 및 위치 데이터 활용하여 접속 즉시 '날씨 + 위치'를 반영해 최적화된 플레이리스트를 추천해주는 웹사이트를 REACT로 작업한 첫번째 팀 프로젝트입니다.",
    concept: null,

    process: null,

    result: null,

    monitor: monitorImg,

    website: "https://iam3zero.github.io/Designhotels/",
    github: "https://github.com/iam3zero/Designhotels",

    toolsIcons: [
          HTML,
          CSS,
          Javascript
        ]
  },
  {
    id: 4,
    title: "외교부 여권안내",
    image: passport,
    bg: passport_bg,
    subtitle: "PROJECT 04",
    contribution: "100%",
    duration: "2달",
    members: "1명",
    tools: "Figma | SCSS | React | Vercel",
    designImage: eclat_projectDetail,
    description: "웹표준과 웹 접근성을 중시한 외교부 클론코딩 프로젝트입니다. HTML과 CSS를 사용하여 화면을 구성했으며, 반응형 및 Swiper 라이브러리를 사용하여 슬라이드를 구현했습니다.",

    concept: null,

    process: null,

    result: null,

    monitor: monitorImg,

    website: "https://mood-scape-umber.vercel.app/",
    github: "https://github.com/ksyeon068/MoodScape",

    toolsIcons: [
          Figma,
          SCSS,
          React,
          Vercel,
        ]
  }
];

export default projects;