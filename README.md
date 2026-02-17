# Capture-the-flag-challenge


Ramp Challenge
Capture the flag
Note: You may use the browser console to run your solution.

Open this link
Find a hidden URL within the HTML
Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
The asterisk (*) is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
Any additional attribute that doesn't interfere with the described pattern can be safely ignored.
Pattern of the DOM tree for each valid character of the URL

<section data-id="92*">
  <article data-class="*45">
    <div data-tag="*78*">
      <b class="ref" value="VALID_CHARACTER"></b>
    </div>
  </article>
</section>
(To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag! 🥳)

SUBMISSION Open the src/flag file and change the FLAG variable to the found word. Don't modify the file further or it will be incorrectly graded

React challenge
We are going to build a variation of the game Wordle. Read the instructions closely, as the game logic you're implementing is simplified from the real game!

In this game there's a secret word and the player has 5 opportunities to guess what that secret word is. Both the secret word and the player's word are 5 characters long. Each time the player takes a guess, their word gets appended to a word list on screen. The word list is shown as a 5x5 grid with empty cells in place of guesses that haven't been used yet, and one character in each word per cell. Below the 5x5 grid is a single input for the user to type their guess.

For each character in a guessed word, the game highlights the cell's background. If the character isn't in the secret word, we color it red. If the character is in the secret word, but at a different position, we color it yellow. If the character is both in the secret word and at the same position, we color it green.

For example, if the secret word is "SLOPE", and the user guesses "RAMPY", then the "P" would be colored green, and others in red. A guess like "SLEEP" would color "S" and "L" in green, both "E"s and "P" in yellow, and nothing in red.

When the player guesses the secret word, the game ends with a "You've won!" message.
When the player runs out guesses, the game ends with a "You've lost!" message.

The secret word should come from a native web API request to the URL obtained in the previous CTF. While the secret word is loading, show a "Loading" indicator.

Additional info:

No styling required besides the background color for guesses
You do not need to check whether guesses are real words
Use React APIs only. Don't use external libraries
Bonus: Add as a comment the script you used to to get the flag in the previous challenge

Running the app
The following commands will be executed when you open the question.

npm install
npm start
NOTE: Make sure to click the refresh icon after running the application to see the preview.

[execution time limit] 30 seconds

[memory limit] 4g




