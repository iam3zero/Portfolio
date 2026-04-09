import "../styles/contact.scss";
import website from "../assets/icons/website_btn.png";
import github from "../assets/icons/github_btn.png";

import { useEffect, useRef } from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* background blur */}
        <div className="contact-blur blur1"></div>
        <div className="contact-blur blur2"></div>

        <div className="contact-content">

          {/* title */}
          <h2 className="contact-title intro-title-ani">
            Let’s Work Together!
          </h2>

          {/* description */}
          <p className="contact-desc">
            더 나은 웹 경험을 함께 만들어가고 싶습니다.
          </p>

          {/* buttons */}
          <div className="contact-buttons">

            <a
              href="#"
              className="intro-btn"
              aria-label="Send Email"
            >
              <img src={github} alt="Github" />
              <span>Email</span>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn"
              aria-label="Visit Github"
            >
              <img src={github} alt="Github" />
              <span>Github</span>
            </a>

            <a
              href="tel:01012345678"
              className="intro-btn"
              aria-label="Call Phone"
            >
              <img src={website} alt="website" />
              <span>Phone</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}