/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-nested-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useEffect, useCallback, useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { AppContext } from "../pages";
import styles from "../styles/keyboard.module.css";
// eslint-disable-next-line import/no-cycle
import Key from "./Key";

const Keyboard = () => {
  const {
    onEnter, onDelete, onSelection, disabledLetters,
  } = useContext(AppContext);
  const firstKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdKeys = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Backspace") {
      onDelete();
    } else if (e.key === "Enter") {
      onEnter();
    } else {
      firstKeys.forEach((eachKey) => {
        if (e.key.toLowerCase() === eachKey.toLowerCase()) {
          onSelection(eachKey);
        }
      });
      secondKeys.forEach((eachKey) => {
        if (e.key.toLowerCase() === eachKey.toLowerCase()) {
          onSelection(eachKey);
        }
      });
      thirdKeys.forEach((eachKey) => {
        if (e.key.toLowerCase() === eachKey.toLowerCase()) {
          onSelection(eachKey);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={styles.keyboard} onKeyDown={handleKeyboard}>
          <div className={styles.first__row}>
            {firstKeys.map((key, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className={styles.key} key={index}>
                <Key eachKey={key} disabled={disabledLetters.includes(key)} />
              </div>
            ))}
          </div>
          <div className={styles.second__row}>
            {secondKeys.map((key, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className={styles.key} key={index}>
                <Key eachKey={key} disabled={disabledLetters.includes(key)} />
              </div>
            ))}
          </div>
          <div className={styles.third__row}>
            <Key eachKey="ENTER" bigKey />
            {thirdKeys.map((key, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div className={styles.key} key={index}>
                <Key
                  eachKey={key}
                  bigKey
                  disabled={disabledLetters.includes(key)}
                />
              </div>
            ))}
            <Key eachKey="DELETE" bigKey />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
