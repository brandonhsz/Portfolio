import styles from "./button.module.css";

function Buttons() {
  return (
    <div className={`${styles.container} ${styles['button-container']}`}>
      <a href="#about" className={`${styles.btn} ${styles.pri}`}>
        Learn more
      </a>
      <a href="#contact" className={`${styles.btn} ${styles.sec}`}>
        You Like It?
      </a>
    </div>
  );
}

export default Buttons;
