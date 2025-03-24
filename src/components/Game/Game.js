import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { sample } from "../../utils";
import FinishGame from "./FinishGame";
import GuessSlots from "./GuessSlots";
import Input from "./Input";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isWinner, setIsWinner] = useState(false);

  const IS_GAME_FINISHED =
    NUM_OF_GUESSES_ALLOWED - 1 === guesses.length || isWinner;

  const handleGuess = (guess) => {
    if (IS_GAME_FINISHED) return;

    const newGuess = checkGuess(guess.guess, answer);

    const nextGuesses = [...guesses, newGuess];

    setGuesses(nextGuesses);

    if (checkWordIsCorrect(newGuess)) {
      setIsWinner(true);
    }
  };

  const checkWordIsCorrect = (guess) => {
    let isCorrect = true;

    guess.forEach((letter) => {
      if (letter.status !== "correct") {
        isCorrect = false;
      }
    });

    return isCorrect;
  };

  return (
    <>
      <GuessSlots guesses={guesses} answer={answer} />
      <FinishGame
        isGameFinished={IS_GAME_FINISHED}
        isWinner={isWinner}
        answer={answer}
        guesses={guesses.length}
      />
      <Input handleGuess={handleGuess} isGameFinished={IS_GAME_FINISHED} />
    </>
  );
}

export default Game;
