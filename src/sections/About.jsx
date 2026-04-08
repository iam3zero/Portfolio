import "../styles/about.scss";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-inner">

        {/* section title */}
        <h2 className="about-title">About Me</h2>

        {/* top profile area */}
        <div className="about-top">

          {/* profile image */}
          <div className="about-photo">
            <div className="photo-placeholder">
                {/* <a href="#"><img src={profile} alt="Notion" /></a> */}
            </div>

            <a href="#" className="resume-link">
              입사지원서 바로가기
            </a>
          </div>

          {/* introduction text */}
          <div className="about-intro">

            <span className="about-role">
              PUBLISHER DESIGNER
            </span>

            <h3 className="about-headline">
              <p>듣고,</p><p>다듬고,</p> <p>조율하다.</p>
            </h3>
            <div className="line"></div>

            <p className="about-desc">
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

            <div className="info-row">
              <span className="info-title">NAME</span>
              <div className="info-content">
                <div className="name-box">
                  <p>최세영</p>
                  <p className="name-en">SEYOUNG CHOI</p>
                </div>
                <span>1998. 01. 25</span>
              </div>
            </div>

            <div className="info-row">
              <span className="info-title">CONTACT</span>
              <div className="info-content">
                <div className="contact-box">
                  <p>010-7772-7771</p>
                  <p>3ze-ro2@naver.com</p>
                </div>
              </div>
            </div>

            <div className="info-row">
              <span className="info-title">LICENSE</span>
              <div className="info-content">
                <ul className="license-box">
                  <li>웹디자인개발기능사<span> 2026</span></li>
                  
                  <li>운전면허자격증 2종보통<span> 2026</span></li>
                  <li>조주기능사<span> 2026</span></li>
                  <li>ITQ 한글/파워포인트<span> 2026</span></li>
                  <li>워드프로세서 2,3급<span> 2026</span></li>
                  <li>문서실무사<span> 2026</span></li>
                </ul>
              </div>
            </div>

          </div>

          {/* right skill */}
          <div className="about-skill">

            <h4 className="skill-title">SKILL</h4>

            <p className="skill-list">
              Adobe Photoshop | Adobe Illustrator | Premiere Pro | After Effects |
              HTML | CSS | JavaScript | jQuery | React | Vue | GitHub
            </p>

            {/* skill icons */}
            <div className="skill-icons">

              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>
              <div className="icon-box"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;