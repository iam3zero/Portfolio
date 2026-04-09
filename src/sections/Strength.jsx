import { useEffect } from "react";
import "../styles/strength.scss";
import html from "../assets/icons/strength_html.png";
import mouse from "../assets/icons/strength_mouse.png";
import responsive from "../assets/icons/strength_responsive.png";

function Strength() {

    useEffect(() => {
        const cards = document.querySelectorAll(".strength-card");

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.2}s`;
                entry.target.classList.add("show");
                }
            });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
        }, []);
        
  return (
    <section className="strength" id="strength">

      <div className="strength-inner">

        {/* section title */}
        <header className="strength-header">
          <h2 className="strength-title">STRENGTH</h2>
          <span className="strength-line"></span>
        </header>

        {/* cards */}
        <div className="strength-grid">

          {/* card 1 */}
          <article className="strength-card">

            <div className="card-icon">
                <img src={html} alt="html" />
            </div>

            <span className="card-number">01</span>

            <h3 className="card-title">
              Semantic Markup
            </h3>

            <p className="card-desc">
              웹 표준을 고려한 마크업 구조 설계
            </p>

            <ul className="card-list">
              <li>HTML5 시맨틱 태그 기반 구조 작성</li>
              <li>접근성을 고려한 마크업 설계</li>
              <li>유지보수를 고려한 구조화된 코드</li>
            </ul>

          </article>


          {/* card 2 */}
          <article className="strength-card">

            <div className="card-icon">
                <img src={mouse} alt="mouse" />
            </div>

            <span className="card-number">02</span>

            <h3 className="card-title">
              Responsive Web
            </h3>

            <p className="card-desc">
              다양한 디바이스를 고려한 반응형 구현
            </p>

            <ul className="card-list">
              <li>Flex / Grid 기반 레이아웃</li>
              <li>모바일 퍼스트 반응형 디자인</li>
              <li>다양한 해상도 대응 UI 구현</li>
            </ul>

          </article>


          {/* card 3 */}
          <article className="strength-card">

            <div className="card-icon">
                <img src={responsive} alt="responsive" />
            </div>

            <span className="card-number">03</span>

            <h3 className="card-title">
              UI Implementation
            </h3>

            <p className="card-desc">
              디자인을 웹 인터페이스로 구현
            </p>

            <ul className="card-list">
              <li>Figma 기반 UI 퍼블리싱</li>
              <li>SCSS를 활용한 스타일 구조화</li>
              <li>인터랙션 및 애니메이션 구현</li>
            </ul>

          </article>

        </div>

      </div>

    </section>
  );
}

export default Strength;