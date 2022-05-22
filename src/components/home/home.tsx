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

        <img src={"https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/271259389_5158580550852861_2439299164035900263_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHiyzv5P7G5bYg_JXq8NFjIKicwHDcnB9wqJzAcNycH3IlkTg6oG89UgjI0RrwN3-v9frc-LkN3wU7Wo4HurS2H&_nc_ohc=Lu13bNCfbFMAX-TVv9_&_nc_ht=scontent-qro1-2.xx&oh=00_AT-UTtJ3_gxV8rAt2J06Zed4A7d4dVo3DH9V8aItYa8Uqg&oe=6290019F"} alt='My Photo' />

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

        <p className={`${styles.description2}`}>ELECTRONICS+PROGRAMMING == <AiFillHeart /> </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
