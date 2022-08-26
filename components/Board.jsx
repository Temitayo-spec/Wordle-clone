/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import styles from "../styles/board.module.css";
import EachLetter from "./EachLetter";

const Board = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={0} />
          <EachLetter letterPos={1} attemptVal={0} />
          <EachLetter letterPos={2} attemptVal={0} />
          <EachLetter letterPos={3} attemptVal={0} />
          <EachLetter letterPos={4} attemptVal={0} />
        </div>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={1} />
          <EachLetter letterPos={1} attemptVal={1} />
          <EachLetter letterPos={2} attemptVal={1} />
          <EachLetter letterPos={3} attemptVal={1} />
          <EachLetter letterPos={4} attemptVal={1} />
        </div>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={2} />
          <EachLetter letterPos={1} attemptVal={2} />
          <EachLetter letterPos={2} attemptVal={2} />
          <EachLetter letterPos={3} attemptVal={2} />
          <EachLetter letterPos={4} attemptVal={2} />
        </div>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={3} />
          <EachLetter letterPos={1} attemptVal={3} />
          <EachLetter letterPos={2} attemptVal={3} />
          <EachLetter letterPos={3} attemptVal={3} />
          <EachLetter letterPos={4} attemptVal={3} />
        </div>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={4} />
          <EachLetter letterPos={1} attemptVal={4} />
          <EachLetter letterPos={2} attemptVal={4} />
          <EachLetter letterPos={3} attemptVal={4} />
          <EachLetter letterPos={4} attemptVal={4} />
        </div>
        <div className={styles.row}>
          <EachLetter letterPos={0} attemptVal={5} />
          <EachLetter letterPos={1} attemptVal={5} />
          <EachLetter letterPos={2} attemptVal={5} />
          <EachLetter letterPos={3} attemptVal={5} />
          <EachLetter letterPos={4} attemptVal={5} />
        </div>
      </div>
    </div>
  );
};

export default Board;
