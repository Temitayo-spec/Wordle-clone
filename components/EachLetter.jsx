/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useContext, useEffect } from "react";
// eslint-disable-next-line import/no-cycle
import { AppContext } from "../pages";
import styles from "../styles/each-letter.module.css";

const EachLetter = ({ letterPos, attemptVal }) => {
  const {
    board,
    correctWord,
    currentAttempt,
    setDisabledLetters,
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState = currentAttempt.attempt > attemptVal
    && (correct ? styles.correct : almost ? styles.almost : styles.incorrect);

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className={`${styles.wrapper} ${letterState}`}>
      <div className={styles.inner}>
        <div className={`${styles.letter}`}>{letter}</div>
      </div>
    </div>
  );
};

export default EachLetter;
