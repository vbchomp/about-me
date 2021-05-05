'use strict';

//console.log('Hello World!');
// Introduction
let username = prompt('Hello! What is your name?');
// Setting up scoring
let guessRight = 0;

// Rules
alert('Good Day, ' + username + '! Want to learn a little about me? Please answer Yes or No to the first five questions below. Then numbers in the next 2 questions. Thanks!');

// Question 1
function q1() {
  let q1 = prompt('Do I live in WA?').toLowerCase();
  // if loop
  if (q1 === 'yes' || q1 === 'y') {
    // console.log('question1:' + q1);
    alert('That\'s right!');
    guessRight++;
  } else {
    alert('Yep, I do!');
  }
}
q1();

// Question 2
function q2() {
  let q2 = prompt('Do I like animals?').toLowerCase();
  // if loop
  if (q2 === 'no' || q2 === 'n') {
    // console.log('question2:' + q2);
    alert('Are you kidding me, ' + username + '? I love snuggling with the floofers!');
  } else {
    // console.log('question2:' + q2);
    alert(username + ', of course I do!');
    guessRight++;
  }
}
q2();

// Question 3
function q3() {
  let q3 = prompt('Do I like rain gardens?').toLowerCase();
  // if loop
  if(q3 === 'yes' || q3 === 'y'){
    // console.log('question3:' + q3);
    alert('You are totally right, ' + username + ', and I want to learn to make one in my yard.');
    guessRight++;
  } else {
    // console.log('question3:' + q3);
    alert(username + ', it is a new hobby, so I am learning more each day!');
  }
}
q3();

// Question 4
function q4() {
  let q4 = prompt('Do I want to live on the East Coast?').toLowerCase();
  // if loop
  if(q4 === 'yes' || q4 === 'y'){
    // console.log('question4:' + q4);
    alert('Syke! Guess again!');
  } else {
    // console.log('question4:' + q4);
    alert('Once again, ' + username + ', you are good at this!');
    guessRight++;
  }
}
q4();

// Question 5
function q5() {
  let q5 = prompt('Have I been to Europe?').toLowerCase();
  // if loop
  if(q5 === 'no' || q5 === 'n'){
    // console.log('question5:' + q5);
    alert('Actually, ' + username + ', I was an Army Brat and spent many years in Germany and Italy. ');
  } else {
    // console.log('question5:' + q5);
    alert(username + ', you are good at this! I would love to go back!');
    guessRight++;
  }
}
q5();

// Add 6th question asking for number
let plantsKilled = 5;
let attemptsRem = 4;
let correctAnswer = false;

// Question 6
function q6() {
  while (attemptsRem && !correctAnswer){
    let q6 = prompt(`How many plants have I killed this year? You only have ${attemptsRem} guesses.`);
    attemptsRem--;
    if (q6 == plantsKilled){
        //console.log(`You are correct. I have killed ${plantsKilled} plants this year. It was an accident! You had ${attemptsRem} guesses remaining.`);
        alert(`You are correct. I have killed ${plantsKilled} plants this year. It was an accident! You had ${attemptsRem} guesses remaining.`);
        correctAnswer = true;
        guessRight++;
    } else if (q6 > plantsKilled){
        //console.log(`Too high! What kind of a monster do you think I am? You have ${attemptsRem} guesses remaining.`);
        alert(`Too high! What kind of a monster do you think I am? You have ${attemptsRem} guesses remaining.`);
    } else if (q6 < plantsKilled){
        //console.log(`Unfortunately, too low! You have ${attemptsRem} guesses remaining.`);
        alert(`Unfortunately, too low! You have ${attemptsRem} guesses remaining.`);
    } else {
        //console.log(`Please enter a number ${attemptsRem} guesses remaining.`);
        alert(`Please enter a number. You have ${attemptsRem} guesses remaining.`);
    }
  }
}
q6();

// Give user correct answer if all guesses are used and correct answer was not guessed
alert(`I accidently killed ${plantsKilled} this year.`);

// 7th question variable declarations
let waPlaces = ['Diablo Lake', 'Olympic Forest', 'Pacific Coast', 'Hood Canal', 'San Juan Islands'];
let placeAttempts = 6;
let correctGuess = false;

// 7th question with while and for loop
while (placeAttempts && !correctGuess){
  let q7 = prompt(`What are a few of the best places to visit in WA state? I only added 5 just to be nice. You only have ${placeAttempts} guesses.`);
  // decrements guesses
  placeAttempts--;
  for (let i = 0; i < waPlaces.length; i++){
    //sets correctanswer to true if one of the correct answers is given
    if (q7 === waPlaces[i]){
      correctGuess = true;
    }
  }
}
// if incorrect guess alert this statement
if (!correctGuess){ 
  // console.log(`Please enter a better place in WA. You have ${placeAttempts} guesses remaining`);
  alert(`Please enter a better place in WA. You have ${placeAttempts} guesses remaining.`);
} else {
  // if correct alert this one
  // console.log(`You think so, too? I love seeing these places! You had ${placeAttempts} guesses remaining.`);
  alert(`You think so, too? I love seeing these places! You had ${placeAttempts} guesses remaining.`);
  guessRight++;
} 
// Give user correct answers if all guesses are used and a correct answer was not guessed
alert(`Some of the best places to see in WA are ${waPlaces}.`);

// Correct answers
// Conclusion
alert(`Great job ${username}, thank you for playing. You got ${guessRight} questions right. Come back again!`);
