import React, { useState } from "react";

const Input = ({ handleGuess, isGameFinished }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleGuess({ guess: input.toUpperCase() });

    setInput("");
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        value={input}
        id="guess-input"
        type="text"
        onChange={(event) => setInput(event.target.value)}
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        disabled={isGameFinished}
        required
      />
    </form>
  );
};

export default Input;
