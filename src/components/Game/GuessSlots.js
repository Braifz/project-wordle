import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const GuessSlots = ({ guesses }) => {
  const array = range(0, NUM_OF_GUESSES_ALLOWED - 1);

  const filledArray = array.map((index) => {
    if (!guesses[index]) return array.fill("");

    return guesses[index];
  });

  return (
    <div className="guess-results">
      {filledArray.map((guess, index) => (
        <p className="guess" key={index}>
          {guess.map(({ letter, status }) => (
            <span className={`cell ${status}`}>{letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default GuessSlots;
