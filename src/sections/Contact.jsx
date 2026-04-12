import "../styles/contact.scss";
import mail from "../assets/icons/contact_mail.png";
import github from "../assets/icons/contact_github.png";
import phone from "../assets/icons/contact_phone.png";

import { FiChevronDown } from "react-icons/fi";

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

          <div className="contact_arrow">
          <FiChevronDown size={40} className="arrow first" />
          <FiChevronDown size={40} className="arrow second" />
          </div>

          {/* buttons */}
          <div className="contact-buttons">

            <a
              href="#"
              className="contact-btn"
              aria-label="Send Email"
            >
              <img src={mail} alt="mail" />
              <span>Email</span>
            </a>

            <a
              href="#"
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