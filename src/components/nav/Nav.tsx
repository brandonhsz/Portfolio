import styles from "./nav.module.css"

const Nav = ({ Component, href }) => {

  return (
    <>
      <a
        href={href}
      >
        <Component className={`${styles.icon}`} />
      </a>
    </>
  )
}

export default Nav