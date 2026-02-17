import { useEffect, useState } from "react";
import { FLAG } from "./flag";
import "./styles.css";

export default function App() {
  const [secretWord, setSecretWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch secret word from API (THIS IS THE CORRECT ENDPOINT)
  useEffect(() => {
  fetch(FLAG)
    .then((res) => res.text())
    .then((text) => {
      // Extract only the word from response
      const match = text.match(/[a-zA-Z]{5}/);
      const cleanWord = match ? match[0].toUpperCase() : "";

      setSecretWord(cleanWord);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setMessage("Error loading word");
      setLoading(false);
    });
}, []);

  // Handle typing
  function handleChange(e) {
    if (gameOver) return;
    const value = e.target.value.toUpperCase();
    if (value.length <= 5) {
      setCurrentGuess(value);
    }
  }

  // Handle guess submit
  function handleSubmit(e) {
    e.preventDefault();

    if (currentGuess.length !== 5 || gameOver) return;

    const guess = currentGuess.toUpperCase();
    const updatedGuesses = [...guesses, guess];

    setGuesses(updatedGuesses);

    if (guess === secretWord) {
      setMessage("You've won!");
      setGameOver(true);
    } else if (updatedGuesses.length === 5) {
      setMessage("You've lost!");
      setGameOver(true);
    }

    setCurrentGuess("");
  }

  // Correct color logic
  function getColor(letter, index, guess) {
    if (!secretWord) return "lightgray";

    if (secretWord[index] === letter) {
      return "green";
    }

    if (secretWord.includes(letter)) {
      return "yellow";
    }

    return "red";
  }

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wordle Game</h1>

      {/* Grid */}
      <div>
        {Array.from({ length: 5 }).map((_, rowIndex) => {
          const guess = guesses[rowIndex] || "";

          return (
            <div key={rowIndex} style={{ display: "flex" }}>
              {Array.from({ length: 5 }).map((_, colIndex) => {
                const letter = guess[colIndex] || "";

                const backgroundColor = letter
                  ? getColor(letter, colIndex, guess)
                  : "lightgray";

                return (
                  <div
                    key={colIndex}
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "2px",
                      backgroundColor,
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px"
                    }}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Input */}
      {!gameOver && (
        <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={currentGuess}
            onChange={handleChange}
            maxLength={5}
          />
          <button type="submit">Guess</button>
        </form>
      )}

      {/* Message */}
      {message && (
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          {message}
        </div>
      )}
    </div>
  );
}
