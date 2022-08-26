/* eslint-disable linebreak-style */
import React from 'react';
import styles from '../styles/loadingScreen.module.css';

const LoadingScreen = () => (
  <div className={styles.screen}>
    <div className={styles.balls}>
      <div className={`${styles.ball} ${styles.one}`} />
      <div className={`${styles.ball} ${styles.two}`} />
      <div className={`${styles.ball} ${styles.three}`} />
    </div>

    <h1>Wordle</h1>
  </div>
);

export default LoadingScreen;
