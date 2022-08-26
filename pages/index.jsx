/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React, { createContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import styles from "../styles/default.module.css";
import { boardInitialState, generateWordSet } from "../components/Words";
import GameOver from "../components/GameOver";
import Modal from "../components/Modal";

export const AppContext = createContext();

const Home = () => {
  const [board, setBoard] = useState(boardInitialState);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    position: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());

  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    generateWordSet().then((word) => {
      setWordSet(word.wordSet);
      setCorrectWord(word.todaysWord);
    });
  }, []);

  const onSelection = (eachKey) => {
    if (currentAttempt.position > 4) {
      return;
    }

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.position] = eachKey;
    setBoard(newBoard);
    setCurrentAttempt({
      attempt: currentAttempt.attempt,
      position: currentAttempt.position + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.position === 0) return;
    const updatedBoard = [...board];
    updatedBoard[currentAttempt.attempt][currentAttempt.position - 1] = "";
    setBoard(updatedBoard);
    setCurrentAttempt({
      ...currentAttempt,
      position: currentAttempt.position - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.position !== 5) return;

    let curr = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      curr += board[currentAttempt.attempt][i];
    }
    // adding whitspaces to the word to make it easier to compare
    if (wordSet.has(curr.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        position: 0,
      });
    } else {
      setModal(true);
      setCurrentAttempt({
        attempt: currentAttempt.attempt,
        position: currentAttempt.position,
      });
    }

    if (curr.toLowerCase() === correctWord.trim().toLowerCase()) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Navbar />

        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttempt,
            setCurrentAttempt,
            onDelete,
            onSelection,
            onEnter,
            correctWord,
            disabledLetters,
            setDisabledLetters,
            gameOver,
            setGameOver,
          }}
        >
          {modal && <Modal setModal={setModal} />}
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default Home;
