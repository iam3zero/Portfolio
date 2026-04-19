import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Strength from "./sections/Strength";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetail from "./pages/ProjectDetail";

// 👉 메인 페이지 묶기
function Main() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      {/* <Strength /> */}
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />

        {/* 디테일 */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;