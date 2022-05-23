import { useContext } from "react";
import { Context } from "../../context/api.context";
import styles from "./qualifications.module.css";
import TableContent from "./TableContent/TableContent";
const Qualifications = () => {

  const { qualifications: qualificationsList } = useContext(Context);

  return (
    <div>
      <h2 className={`${styles['qualifications-container']} ${styles['quali-text']}`}>My Qualifications</h2>

      <div className={`${styles.grid}`}>
        {
          qualificationsList.map((qualification) => (
            <TableContent
              key={qualification.img}
              img={qualification.img}
              alt={qualification.name}
            />
          ))
        }
      </div>

    </div>
  );
};


export default Qualifications;
