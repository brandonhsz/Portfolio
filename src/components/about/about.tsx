import styles from "./about.module.css";
import Qualifications from "../qualifications/qualifications";

function About() {
  return (
    <div id="about" className={`${styles['about-container']}`}>
      <Qualifications />
    </div>
  );
}
export default About;
