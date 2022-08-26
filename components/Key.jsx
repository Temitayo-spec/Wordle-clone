/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { FaBackspace } from "react-icons/fa";
import { AppContext } from "../pages";
import styles from "../styles/key.module.css";

const Key = ({ eachKey, bigKey, disabled }) => {
  const { onEnter, onDelete, onSelection } = useContext(AppContext);
  const selectLetter = () => {
    if (eachKey === "ENTER") {
      onEnter();
    } else if (eachKey === "DELETE") {
      onDelete();
    } else {
      onSelection(eachKey);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button
          type="button"
          className={bigKey ? styles.big : disabled && styles.disabled}
          onClick={selectLetter}
        >
          {eachKey === "DELETE" ? (
            <FaBackspace onClick={selectLetter} className={styles.icon} />
          ) : (
            <>{eachKey}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default Key;
