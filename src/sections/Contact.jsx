import { useState, useEffect, useRef } from "react";
import "../styles/contact.scss";

import mail from "../assets/icons/contact_mail.png";
import github from "../assets/icons/contact_github.png";
import phone from "../assets/icons/contact_phone.png";

import { FiChevronDown } from "react-icons/fi";


export default function Contact() {
  const [toast, setToast] = useState(false);
  const sectionRef = useRef(null);
  const text = "Let’s Work Together!";

  /* toast */
  const handleCopyEmail = async () => {
  await navigator.clipboard.writeText("3ze-ro2@naver.com");
  setToast(true);

  setTimeout(() => {
    setToast(false);
  }, 2000);
};
  /* 스크롤 등장 애니메이션 */
  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-container">

        {/* background blur */}
        <div className="contact-blur blur1"></div>
        <div className="contact-blur blur2"></div>

        <div className="contact-content">
          {toast && <div className="toast">이메일이 복사되었습니다!</div>}

          {/* title */}
          <h2 className="contact-title wave-text">
            {text.split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          {/* description */}
          <p className="contact-desc">
            더 나은 웹 경험을 함께 만들어가고 싶습니다.
          </p>

          <div className="contact_arrow">
          <FiChevronDown size={40} className="arrow first" />
          <FiChevronDown size={40} className="arrow second" />
          </div>

          {/* buttons */}
          <div className="contact-buttons">

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleCopyEmail();
              }}
              className="contact-btn"
            >
              <img src={mail} alt="mail" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/iam3zero"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              aria-label="Visit Github"
            >
              <img src={github} alt="github" />
              <span>Github</span>
            </a>

            <a
              href="tel:01012345678"
              className="contact-btn"
              aria-label="Call Phone"
            >
              <img src={phone} alt="phone" />
              <span>Phone</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}