import styles from "./contact.module.css";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className={`${styles.container} ${styles['contact-container']}`}>
      <h1>Contact Me</h1>
      <div className={`${styles['contact-links']}`}>

        <a
          href="https://github.com/brandonhsz"
          className={`${styles.contact}`}
          target={"blank"}
        >
          <AiOutlineGithub className={`${styles.icon}`} />
          <h2>
            GitHub <span>Brandonhsz</span>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/brandon-eduardo-hernandez-salinas-b90193110/"
          className={`${styles.contact}`}
          target={"blank"}
        >
          <AiOutlineLinkedin className={`${styles.icon}`} />
          <h2>
            Linkedin <span>Brandon Hernandez</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/brandonhsz/" className={`${styles.contact}`}>
          <AiOutlineInstagram className={`${styles.icon}`} />
          <h2>
            instagram <span>@Brandonhsz</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
