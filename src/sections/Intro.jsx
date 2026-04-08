import "../styles/intro.scss";

function Intro() {

  const title = "PUBLISHER DESIGNER";

  return (
    <section className="intro" id="home">

        {/* blur background */}
        <div className="blur-circle left"></div>
        <div className="blur-circle right"></div>

        <div className="intro-inner">

            {/* Hero Text */}
            <div className="intro-content">

            <span className="intro-subtitle">PORTFOLIO</span>

            <h1 className="intro-title">

                <div className="line">
                    {"PUBLISHER".split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        {char}
                    </span>
                    ))}
                </div>

                <div className="line">
                    {"DESIGNER".split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                    >
                        {char}
                    </span>
                    ))}
                </div>

                </h1>

            <p className="intro-desc">
                <strong>꾸준하게</strong> 나아가는 웹퍼블리셔 <strong>최세영</strong>입니다.
            </p>

            <div className="intro-btn-wrap">
                <button
                    className="intro-btn"
                    onClick={() => {
                        const about = document.getElementById("about");
                        if (about) {
                        about.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    >
                    VIEW MORE
                </button>
            </div>

            </div>

            {/* bottom text */}
            <div className="intro-bottom">
            WORK 2026
            </div>
      </div>
    </section>
  );
}

export default Intro;