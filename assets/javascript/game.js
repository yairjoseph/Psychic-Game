var wins = 0;
var losses = 0;
var pastGuess = [];
var guesses = 9;
var lastguessed;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var LetterGenerator = alphabet[Math.floor(Math.random()) *26];

document.onkeyup = function(event) {
    var userGuess = event.key
    if (userGuess === LetterGenerator) {
        wins++;
        guesses = 9;
        pastGuess = [];
        lastguessed = userGuess;
    }
    else {
        pastGuess.push(userGuess);
        guesses--;
    }

    if (guesses < 1) {
        losses++;
        guesses = 9;
        pastGuess = [];
        LetterGenerator = alphabet[Math.floor(Math.random()) *26];
    }

    document.getElementById("wincount").textContent = wins;
    document.getElementById("losscount").textContent = losses;
    document.getElementById("guessleft").textContent = guesses;
    document.getElementById("sofar").textContent = pastGuess;
    document.getElementById("lastletter").textContent = lastguessed;

}
