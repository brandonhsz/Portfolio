import styles from './home.module.css';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';



function Home() {
  return (
    <div id='home' className={`${styles["home-container"]}`}>
      <div className={`${styles.logo}`}>
        <div className={`${styles["hover-show"]}`}>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
          <span className={`${styles.circle}`}></span>
        </div>

        <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-49ae3.appspot.com/o/271259389_5158580550852861_2439299164035900263_n.jpg?alt=media&token=c09ef581-4df2-4c8c-b46b-642e6cfc6953"} alt='My Photo' />

      </div>

      <a href='#footer' className={`${styles['scroll-down']}`}>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className={`${styles.scroll}`} />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p className={`${styles.description}`}>
          Hi i&apos;m Brandon, I&apos;m a Communications and electronics student and i love all about web development, IOT, embedded systems.
        </p>

        <p className={`${styles.description2} flex`}>ELECTRONICS+PROGRAMMING ==&ensp;<AiFillHeart /> </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
