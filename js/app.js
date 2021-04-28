'use strict';

//console.log('Hello World!');

// Introduction
let username = prompt('Hello! What is your name?');
//Rules
alert('Good Day, ' + username + '! Let\'s get to know each other. Please answer Yes or No to the questions below.');

//Question 1
let questionOne = prompt('Do I live in WA?').toLowerCase();
//if loop
if(questionOne === 'yes' || questionOne === 'y'){
  console.log('questionOne:' + questionOne);
  alert('That\'s right!');
}

//Question 2
let questionTwo = prompt('Do I like animals?').toLowerCase();

//Trying an else
if(questionTwo === 'no' || questionTwo === 'n'){
  console.log('questioneTwo:' + questionTwo);
  alert('Are you kidding me, ' + username + '? I love snuggling with the floofers!');
} else(questionTwo === 'yes' || questionTwo === 'y');{
  alert(username + ', of course I do!');
}

//Question 3
let questionThree = prompt('Do I like rain gardens?').toLowerCase();
//if loop
if(questionThree === 'yes' || questionThree === 'y'){
  console.log('questionThree:' + questionThree);
  alert('You are totally right, ' + username + ', and I wan\'t to learn to make one in my yard.');
}

//Question 4
let questionFour = prompt('Do I want to live on the East Coast?').toLowerCase();
//if loop
if(questionFour === 'yes' || questionFour === 'y'){
  console.log('questionFour:' + questionFour);
  alert('Syke! Guess again!');
}

//Question 5
//let questionFive = prompt('Have I lived in Europe?').toLowerCase;
