import styles from "./nav.module.css";
import { AiOutlineCode, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import Nav from "./Nav";

function Navbar() {

  const navLinks = [
    { href: "#home", Component: AiOutlineHome },
    { href: "#about", Component: AiOutlineUser },
    { href: "#projects", Component: AiOutlineCode },
    { href: "#contact", Component: BiMessageRoundedDots },
    { href: "#footer", Component: BsArrowDownCircle }
  ]

  return (
    <div className={styles.navigation}>
      {
        navLinks.map(({ href, Component }) => (
          <Nav key={href} href={href} Component={Component} />
        ))
      }
    </div>
  );
}

export default Navbar;
