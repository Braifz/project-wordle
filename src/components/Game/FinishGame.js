const FinishGame = ({ isGameFinished, isWinner,answer ,guesses }) => {
  if (!isGameFinished) return null;

  if (!isWinner)
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );

  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guesses} guesses</strong>.
      </p>
    </div>
  );
};

export default FinishGame;
