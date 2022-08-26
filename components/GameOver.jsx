/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useContext } from "react";
import styles from "../styles/gameover.module.css";
// eslint-disable-next-line import/no-cycle
import { AppContext } from "../pages";

const GameOver = () => {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  return (
    <div className={styles.wrapper}>
      <h3>
        {gameOver.guessedWord
          ? "You correctly guessed the word"
          : "You failed to guess the word"}
      </h3>
      <h1>
        Correct:
        {' '}
        <span>{correctWord}</span>
      </h1>
      {gameOver.guessedWord && (
        <h3>
          You guessed in
          {' '}
          {currentAttempt.attempt}
          {' '}
          attempts
        </h3>
      )}
    </div>
  );
};

export default GameOver;
