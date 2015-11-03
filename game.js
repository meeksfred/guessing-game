var finalScore = 0

var name = prompt("What is your name?");
alert("Very nice to meet you, " + name + ", and welcome to Max's Guessing Game!");

// A nice greeting for those coming to play my game.

var userResponse1 = prompt("Was I born in the state of Iowa? (yes or no)").toLowerCase();
  if ((userResponse1 === "n") || (userResponse1 === "no")) {
    console.log("User was correct");
    alert("You are right! I was actually born in the state of Washington.");
    finalScore++;
  } else {
    console.log("User was incorrect");
    alert("Incorrect. I was born in Washington, but most of my family does live in Iowa.");
  };

var userResponse2 = prompt("Is baseball my favorite sport? (yes or no)").toLowerCase();
  if ((userResponse2 === "y") || (userResponse2 === "yes")) {
    console.log("User is correct");
    alert("Correct! America's past time");
    finalScore++;
  } else {
    console.log("User is incorrect");
    alert("Incorrect. It actually is baseball, however I do love all sports");
  };

var userResponse3 = prompt("Is pizza my favorite food? (yes or no)").toLowerCase();
  if ((userResponse3 === "y") || (userResponse3 === "yes")) {
    console.log("User is correct");
    alert("Of course! Pizza is the greatest!");
    finalScore++;
  } else {
    console.log("User is incorrect");
    alert("No silly, Pizza is absolutely the greatest food.");
  };

var x = 7
var chances = 3
var numHint = 'Now its time to guess my favorite number. Go ahead, any number between 1-50.'

while (chances > 0) {
  var guess = prompt(numHint + ' You have ' + chances + ' guesses remaining.');
  if (!guess) break;
  guess = Number(guess);
  if (guess === x) {
    alert('Great Job! ' + x + ' is indeed my favorite number.');
    chances = 0;
    finalScore++;
}   else {
    numHint = 'Incorrect.';
    if (guess > x)
      numHint += ' Too large! Try again.';
    if (guess < x)
      numHint += ' Too small! Try again.';
    chances = chances - 1;
    if (chances === 0)
      alert("My number was actually 7. Good try!");
  }
}


alert("Congratulations! Your score was " + finalScore + " out of 4.")

