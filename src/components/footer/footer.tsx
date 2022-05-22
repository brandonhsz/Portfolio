import styles from "./footer.module.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className={`${styles.container} ${styles['footer-container']}`}>
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className={`${styles['social-links']}`}>
        <a href="https://www.instagram.com/brandonhsz/">
          <BsInstagram className={`${styles.social}`} />
        </a>
        <a href="https://www.linkedin.com/in/brandon-eduardo-hernandez-salinas-b90193110/">
          {" "}
          <FaLinkedin className={`${styles.social}`} />
        </a>
        <a href="https://github.com/brandonhsz">
          <TiSocialGithub className={`${styles.social}`} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
