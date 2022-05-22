import styles from "./nav.module.css";
import { AiOutlineCode, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className={styles.navigation}>
      <a href="#home">
        <AiOutlineHome className={`${styles.icon} ${styles['active-nav']}`} />
      </a>
      <a href="#about">
        <AiOutlineUser className={styles.icon} />
      </a>
      <a href="#projects">
        <AiOutlineCode className={styles.icon} />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className={styles.icon} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className={styles.icon} />
      </a>
    </div>
  );
}

export default Navbar;
