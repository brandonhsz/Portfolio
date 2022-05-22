import styles from './header.module.css';

function Header() {
  return (
    <div id='home' className={`${styles.container} ${styles["header-container"]} `}>
      <h3>
        <p>
          I<span>&apos;</span>m
        </p>
        Brandon
      </h3>
      <h2>Full-Stack Developer</h2>
    </div>
  );
}
export default Header;
