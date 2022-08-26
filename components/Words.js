/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-extraneous-dependencies

export const boardInitialState = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// generate word from txt file
export const generateWordSet = async () => {
  let todaysWord;
  const response = await fetch("/word-bank.txt");
  const text = await response.text();
  const words = text.split(/\r?\n/)

  // eslint-disable-next-line prefer-const
  todaysWord = words[Math.floor(Math.random() * words.length)];

  // trim any whitespace from the word
  todaysWord = todaysWord.trim();

  const wordSet = new Set(words);
  return { wordSet, todaysWord };
};
