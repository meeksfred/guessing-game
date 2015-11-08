var finalScore = 0;
var name = prompt("What is your name?");
alert("Very nice to meet you, " + name + ", and welcome to Max's Guessing Game!");

// A nice greeting for those coming to play my game.

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();

// Calling all my functions here

function questionOne() {
  var userResponse1 = prompt("Was I born in the state of Iowa? (yes or no)").toLowerCase();
  if ((userResponse1 === "n") || (userResponse1 === "no")) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerOne').innerHTML = "You are right! I was actually born in the state of Washington.";
    document.getElementById('rightOrWrongOne').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    } else {
    console.log("User is incorrect");
    document.getElementById('answerOne').innerHTML = "Incorrect. I was born in Washington, but most of my family does live in Iowa.";
    document.getElementById('rightOrWrongOne').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
  }
};


function questionTwo() {
  var userResponse2 = prompt("Is baseball my favorite sport? (yes or no)").toLowerCase();
  if ((userResponse2 === "y") || (userResponse2 === "yes")) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerTwo').innerHTML = "Correct! America's and Max's past time.";
    document.getElementById('rightOrWrongTwo').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
  } else {
    console.log(smileyPic);
    console.log('---');
    console.log("User is incorrect");
    document.getElementById('answerTwo').innerHTML = "Incorrect. It actually is baseball, however I do love all sports.";
    document.getElementById('rightOrWrongTwo').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
  }
};


function questionThree() {
  var userResponse3 = prompt("Is pizza my favorite food? (yes or no)").toLowerCase();
  if ((userResponse3 === "y") || (userResponse3 === "yes")) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerThree').innerHTML = "Of course! Pizza is the greatest!";
    document.getElementById('rightOrWrongThree').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
  } else {
    console.log("User is incorrect");
    document.getElementById('answerThree').innerHTML = "No silly, Pizza is absolutely the greatest food.";
    document.getElementById('rightOrWrongThree').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
  }
};


function questionFour() {
  var x = 7
  var chances = 3
  var numHint = 'Now its time to guess my favorite number. Go ahead, any number between 1-50.'

  while (chances > 0) {
    var guess = prompt(numHint + ' You have ' + chances + ' guesses remaining.');
    guess = Number(guess);
    if (guess === x) {
      console.log('User is correct.');
      chances = 0;
      finalScore++;
      document.getElementById('answerFour').innerHTML = "Great Job! " + x + " is indeed my favorite number.";
      document.getElementById('rightOrWrongFour').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    } else {
      numHint = 'Incorrect.';
        if (guess > x) {
        numHint += ' Too large! Try again.';
      }
        else if (guess < x) {
        numHint += ' Too small! Try again.';
      }
      else {
        alert("I'm sorry, that doesn't appear to be a number.");
      }
      chances = chances - 1;
      if (chances === 0) {
      document.getElementById('answerFour').innerHTML = "My number was actually 7. Good try!";
      document.getElementById('rightOrWrongFour').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
      console.log('User is incorrect.');
      }
    }
  }
};


function questionFive() {
  var userResponse4 = prompt('Is Appa the coolest flying bison in existence? (yes or no)').toLowerCase();
  if ((userResponse4 === 'yes') || (userResponse4 === 'y')) {
    console.log('User is correct.');
    finalScore++;
    document.getElementById('answerFive').innerHTML = "Correct! Appa is the coolest, and only flying bison in existence.";
    document.getElementById('rightOrWrongFive').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
  } else {
    console.log('User is incorrect.');
    document.getElementById('answerFive').innerHTML = "Incorrect. Appa is absolutely the coolest flying bison in the world.";
    document.getElementById('rightOrWrongFive').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
  }
};


function questionSix() {
  var userResponse5 = Number(prompt('How many licks does it officially take to get to the center of a Tootsie Pop? (enter a number)'));
  if (userResponse5 === 364) {
    console.log('User is correct.');
    finalScore++;
    document.getElementById('answerSix').innerHTML = "Correct! Holy cow, great guessing.";
    document.getElementById('rightOrWrongSix').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
  } else {
    console.log('User is incorrect.');
    document.getElementById('answerSix').innerHTML = "Incorrect. The official unofficial number is 364. You were " + (364 - Number(userResponse5)) + " licks off.";
    document.getElementById('rightOrWrongSix').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
  }
};


alert("Congratulations! Your score was " + finalScore + " out of 6.")

