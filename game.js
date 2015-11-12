var finalScore = 0;
var name = prompt("What is your name?");
alert("Very nice to meet you, " + name + ", and welcome to Max's Guessing Game!");

// A nice greeting for those coming to play my game.

var questions = ['Was I born in the state of Iowa? (yes or no)', 'Is baseball my favorite sport? (yes or no)', 'Is pizza my favorite food? (yes or no)', 'Now its time to guess my favorite number. Go ahead, any number between 1-50.', 'Is Appa the coolest flying bison in existence? (yes or no)', 'How many licks does it officially take to get to the center of a Tootsie Pop? (enter a number)'];

var answers = ['n', 'no', 'y', 'yes', 'y', 'yes', 7, 'y', 'yes', 364];

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();

// Calling all my functions here

function questionOne() {
  var userResponse1 = prompt(questions[0]).toLowerCase();
  if ((userResponse1 === answers[0]) || (userResponse1 === answers[1])) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerOne').innerHTML = "You are right! I was actually born in the state of Washington.";
    document.getElementById('rightOrWrongOne').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    document.getElementById('answerOne').className = "correct";
    } else {
    console.log("User is incorrect");
    document.getElementById('answerOne').innerHTML = "Incorrect. I was born in Washington, but most of my family does live in Iowa.";
    document.getElementById('rightOrWrongOne').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
    document.getElementById('answerOne').className = "incorrect";
  }
};


function questionTwo() {
  var userResponse2 = prompt(questions[1]).toLowerCase();
  if ((userResponse2 === answers[2]) || (userResponse2 === answers[3])) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerTwo').innerHTML = "Correct! America's and Max's past time.";
    document.getElementById('rightOrWrongTwo').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    document.getElementById('answerTwo').className = 'correct';
  } else {
    console.log("User is incorrect");
    document.getElementById('answerTwo').innerHTML = "Incorrect. It actually is baseball, however I do love all sports.";
    document.getElementById('rightOrWrongTwo').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
    document.getElementById('answerTwo').className = 'incorrect';
  }
};


function questionThree() {
  var userResponse3 = prompt(questions[2]).toLowerCase();
  if ((userResponse3 === answers[4]) || (userResponse3 === answers[5])) {
    console.log("User is correct");
    finalScore++;
    document.getElementById('answerThree').innerHTML = "Of course! Pizza is the greatest!";
    document.getElementById('rightOrWrongThree').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    document.getElementById('answerThree').className = 'correct';
  } else {
    console.log("User is incorrect");
    document.getElementById('answerThree').innerHTML = "No silly, Pizza is absolutely the greatest food.";
    document.getElementById('rightOrWrongThree').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
    document.getElementById('answerThree').className = 'incorrect';
  }
};


function questionFour() {
  var x = answers[6]
  var chances = 3
  var numHint = questions[3]

  while (chances > 0) {
    var guess = prompt(numHint + ' You have ' + chances + ' guesses remaining.');
    guess = Number(guess);
    if (guess === x) {
      console.log('User is correct.');
      chances = 0;
      finalScore++;
      document.getElementById('answerFour').innerHTML = "Great Job! " + x + " is indeed my favorite number.";
      document.getElementById('rightOrWrongFour').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
      document.getElementById('answerFour').className = 'correct';
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
      document.getElementById('answerFour').className = 'incorrect';
      console.log('User is incorrect.');
      }
    }
  }
};


function questionFive() {
  var userResponse4 = prompt(questions[4]).toLowerCase();
  if ((userResponse4 === answers[7]) || (userResponse4 === answers[8])) {
    console.log('User is correct.');
    finalScore++;
    document.getElementById('answerFive').innerHTML = "Correct! Appa is the coolest, and only flying bison in existence.";
    document.getElementById('rightOrWrongFive').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    document.getElementById('answerFive').className = 'correct';
  } else {
    console.log('User is incorrect.');
    document.getElementById('answerFive').innerHTML = "Incorrect. Appa is absolutely the coolest flying bison in the world.";
    document.getElementById('rightOrWrongFive').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
    document.getElementById('answerFive').className = 'incorrect';
  }
};


function questionSix() {
  var userResponse5 = Number(prompt(questions[5]));
  if (userResponse5 === answers[9]) {
    console.log('User is correct.');
    finalScore++;
    document.getElementById('answerSix').innerHTML = "Correct! Holy cow, great guessing.";
    document.getElementById('rightOrWrongSix').innerHTML = "<img src='images/smiley.jpg' height='100' width='100'>";
    document.getElementById('answerSix').className = 'correct';
  } else {
    console.log('User is incorrect.');
    document.getElementById('answerSix').innerHTML = "Incorrect. The official unofficial number is 364. You were " + (364 - Number(userResponse5)) + " licks off.";
    document.getElementById('rightOrWrongSix').innerHTML = "<img src='images/frowney.jpg' height='100' width='100'>";
    document.getElementById('answerSix').className = 'incorrect';
  }
};


alert("Congratulations! Your score was " + finalScore + " out of 6.")

