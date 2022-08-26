/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { FcCancel } from "react-icons/fc";
import styles from "../styles/modal.module.css";

const Modal = ({ setModal }) => (
  <div className={styles.wrapper}>
    <div className={styles.bg} />
    <div className={styles.inner}>
      <FcCancel className={styles.icon} />
      <h2>Word not Found</h2>
      <button type="button" onClick={() => setModal(false)}>
        X
      </button>
    </div>
  </div>
);

export default Modal;
