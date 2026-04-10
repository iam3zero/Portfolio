import "../styles/strength.scss";
import Accessibillity from "../assets/icons/strength_Accessibillity.png";
import Motion from "../assets/icons/strength_Motion.png";
import Markup from "../assets/icons/strength_Markup.png";
import Responsive from "../assets/icons/strength_Responsive.png";
import UI from "../assets/icons/strength_UI.png";


function Strength() {
  return (
    <section className="strength" aria-labelledby="strength-title" id="strength">

      <h2 id="strength-title" className="strength-title">
        WHAT I DO
      </h2>

      <ul className="strength-list">

        {/* card 1 */}
        <li className="strength-card">
          <button className="card-wrap">

            <div className="card-cover">
              <div className="card-icon">
                <img src={Accessibillity} alt="Accessibillity" />
              </div>

              <h3 className="card-title">
                Web Accessibility
              </h3>

              <p className="card-desc">
                모두를 위한 웹 환경 고려
              </p>
            </div>
            <div className="card-content">
              <div className="content-icon">
                <img src={Accessibillity} alt="Accessibillity" />
              </div>

              <div className="content-title">
                <h3>Web Accessibility</h3>
              </div>

              <p className="content-sub">
                모두를 위한 웹 환경 고려
              </p>
              <div className="content-wrap">
                <ul className="txt-list">
                  <li>접근성을 고려한 HTML 구조 설계</li>
                  <li>표준과 접근성 가이드라인 기반 마크업</li>
                  <li>사용자 환경을 고려한 UI 구현</li>
                </ul>
              </div>
            </div>
          </button>
        </li>


        {/* card 2 */}
        <li className="strength-card">
          <button className="card-wrap">

            <div className="card-cover">
              <div className="card-icon">
                <img src={Motion} alt="Motion" />
              </div>

              <h3 className="card-title">
                Interaction & Motion
              </h3>

              <p className="card-desc">
                사용자 경험을 높이는 인터랙션 구현
              </p>
            </div>
            <div className="card-content">
              <div className="content-icon">
                <img src={Motion} alt="Motion" />
              </div>

              <div className="content-title">
                <h3>Interaction & Motion</h3>
              </div>

              <p className="content-sub">
                사용자 경험을 높이는 인터랙션 구현
              </p>
              <div className="content-wrap">
                <ul className="txt-list">
                  <li>스크롤 기반 인터랙션 구현</li>
                  <li>CSS 애니메이션 및 트랜지션 활용</li>
                  <li>사용자 흐름을 고려한 UI 모션 설계</li>
                </ul>
              </div>
            </div>
          </button>
        </li>


        {/* card 3 */}
        <li className="strength-card">
          <button className="card-wrap">

            <div className="card-cover">
              <div className="card-icon">
                <img src={Markup} alt="Markup" />
              </div>

              <h3 className="card-title">
                Semantic Markup
              </h3>

              <p className="card-desc">
                웹 표준을 고려한 마크업 구조 설계
              </p>

              <span className="card-more">
                VIEW →
              </span>
            </div>
            <div className="card-content">
              <div className="content-icon">
                <img src={Markup} alt="Markup" />
              </div>

              <div className="content-title">
                <h3>Semantic Markup</h3>
              </div>

              <p className="content-sub">
                웹 표준을 고려한 마크업 구조 설계
              </p>
              <div className="content-wrap">
                <ul className="txt-list">
                  <li>HTML5 시맨틱 태그 기반 구조 작성</li>
                  <li>접근성을 고려한 마크업 설계</li>
                  <li>유지보수를 고려한 구조화 코드</li>
                </ul>
              </div>
            </div>
          </button>
        </li>


        {/* card 4 */}
        <li className="strength-card">
          <button className="card-wrap">

            <div className="card-cover">
              <div className="card-icon">
                <img src={Responsive} alt="Responsive" />
              </div>

              <h3 className="card-title">
                Responsive Web
              </h3>

              <p className="card-desc">
                다양한 디바이스 대응 UI
              </p>
            </div>

            <div className="card-content">
              <div className="content-icon">
                <img src={Responsive} alt="Responsive" />
              </div>

              <div className="content-title">
                <h3>Responsive Web</h3>
              </div>

              <p className="content-sub">
                다양한 디바이스 대응 UI
              </p>
              <div className="content-wrap">
                <ul className="txt-list">
                  <li>Flex / Grid 기반 레이아웃</li>
                  <li>모바일 퍼스트 반응형 설계</li>
                  <li>다양한 해상도 대응 UI</li>
                </ul>
              </div>
            </div>
          </button>
        </li>


        {/* card 5 */}
        <li className="strength-card">
          <button className="card-wrap">

            <div className="card-cover">
              <div className="card-icon">
                <img src={UI} alt="UI" />
              </div>

              <h3 className="card-title">
                UI Implementation
              </h3>

              <p className="card-desc">
                디자인을 웹 인터페이스로 구현
              </p>
            </div>

            <div className="card-content">
              <div className="content-icon">
                <img src={UI} alt="UI" />
              </div>

              <div className="content-title">
                <h3>UI Implementation</h3>
              </div>

              <p className="content-sub">
                디자인을 웹 인터페이스로 구현
              </p>
              <div className="content-wrap">
                <ul className="txt-list">
                  <li>Figma 기반 UI 퍼블리싱</li>
                  <li>SCSS 구조 기반 스타일 설계</li>
                  <li>컴포넌트 단위 UI 구현</li>
                </ul>
              </div>
            </div>
          </button>
        </li>

      </ul>

    </section>
  );
}

export default Strength;