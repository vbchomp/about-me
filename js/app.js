'use strict';

//console.log('Hello World!');

// Introduction
let username = prompt('Hello! What is your name?');
//Rules
alert('Good Day, ' + username + '! Want to learn a little about me? Please answer Yes or No to the first five questions below. Then numbers in the next 2 questions. Thanks!');

//Question 1
let q1 = prompt('Do I live in WA?').toLowerCase();
//if loop
if (q1 === 'yes' || q1 === 'y') {
  // console.log('question1:' + q1);
  alert('That\'s right!');
} else {
  alert('Yep, I do!');
}

//Question 2
let q2 = prompt('Do I like animals?').toLowerCase();
//if loop
if (q2 === 'no' || q2 === 'n') {
  // console.log('question2:' + q2);
  alert('Are you kidding me, ' + username + '? I love snuggling with the floofers!');
} else {
  //console.log('question2:' + q2);
  alert(username + ', of course I do!');
}

//Question 3
let q3 = prompt('Do I like rain gardens?').toLowerCase();
//if loop
if(q3 === 'yes' || q3 === 'y'){
  // console.log('question3:' + q3);
  alert('You are totally right, ' + username + ', and I want to learn to make one in my yard.');
} else {
  //console.log('question3:' + q3);
  alert(username + ', it is a new hobby, so I am learning more each day!');
}

//Question 4
let q4 = prompt('Do I want to live on the East Coast?').toLowerCase();
//if loop
if(q4 === 'yes' || q4 === 'y'){
  // console.log('question4:' + q4);
  alert('Syke! Guess again!');
} else {
  //console.log('question4:' + q4);
  alert('Once again, ' + username + ', you are good at this!');
}

//Question 5
let q5 = prompt('Have I been to Europe?').toLowerCase();
//if loop
if(q5 === 'no' || q5 === 'n'){
  // console.log('question5:' + q5);
  alert('Actually, ' + username + ', I was an Army Brat and spent many years in Germany and Italy. ');
} else {
  //console.log('question5:' + q5);
  alert(username + ', you are good at this! I would love to go back!');
}

// Add 6th q asking for number
let plantsKilled = 5;
let attemptsRem = 4;
let correctAnswer = false;

//Question 6
while (attemptsRem && !correctAnswer){
  let q6 = prompt(`How many plants have I killed this year? You only have ${attemptsRem} guesses.`);
  attemptsRem--;
  if (q6 == plantsKilled){
      console.log(`You are correct. I have killed ${plantsKilled} plants this year. It was an accident! You had ${attemptsRem} guesses remaining.`);
      correctAnswer = true;
    } else if (q6 > plantsKilled){
      console.log(`Too high! What kind of a monster do you think I am? You have ${attemptsRem} guesses remaining.`);
    } else if (q6 < plantsKilled){
      console.log(`Unfortunately, too low! You have ${attemptsRem} guesses remaining.`);
    } else {
      console.log(`Please enter a number.`);
    }
  }
// Give user correct answer if all guesses are used and correct answer was not guessed
alert(`I accidently killed ${plantsKilled} this year.`);

// Add 7th question that will store an array with correct answers
//Give six guesses
//After six guesses, or correct, display all the correct answers

// Add 7th question
let plantGuesses = 0;
plantGuesses++;

//Conclusion
alert(username + ', thank you for playing today and learning a few things about me. Come back again!');
