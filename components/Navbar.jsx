/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2>Wordle</h2>
      </div>
    </div>
  );
};

export default Navbar;
