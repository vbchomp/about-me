'use strict';

//console.log('Hello World!');

// Introduction
let username = prompt('Hello! What is your name?');
//Rules
alert('Good Day, ' + username + '! Want to learn a little about me? Please answer Yes or No to the questions below.');

//Question 1
let questionOne = prompt('Do I live in WA?').toLowerCase();
//if loop
if(questionOne === 'yes' || questionOne === 'y'){
  console.log('questionOne:' + questionOne);
  alert('That\'s right!');
} else(questionOne === 'no' || questionOne === 'n');{
  console.log('questionOne:' + questionOne);
  alert('Yep, I do!');
}

//Question 2
let questionTwo = prompt('Do I like animals?').toLowerCase();

//Trying an else
if(questionTwo === 'no' || questionTwo === 'n'){
  console.log('questioneTwo:' + questionTwo);
  alert('Are you kidding me, ' + username + '? I love snuggling with the floofers!');
} else(questionTwo === 'yes' || questionTwo === 'y');{
  console.log('questionTwo:' + questionTwo);
  alert(username + ', of course I do!');
}

//Question 3
let questionThree = prompt('Do I like rain gardens?').toLowerCase();
//if loop
if(questionThree === 'yes' || questionThree === 'y'){
  console.log('questionThree:' + questionThree);
  alert('You are totally right, ' + username + ', and I wan\'t to learn to make one in my yard.');
} else(questionThree === 'no' || questionThree === 'n');{
  console.log('questionThree:' + questionThree);
  alert(username + ', of course I do!');
}

//Question 4
let questionFour = prompt('Do I want to live on the East Coast?').toLowerCase();
//if loop
if(questionFour === 'yes' || questionFour === 'y'){
  console.log('questionFour:' + questionFour);
  alert('Syke! Guess again!');
} else(questionFour === 'no' || questionFour === 'n');{
  console.log('questionFour:' + questionFour);
  alert('Once again, ' + username + ', you are good at this!');
}

//Question 5
let questionFive = prompt('Have I lived in Europe?').toLowerCase();
//if loop
if(questionFive === 'no' || questionFive === 'n'){
  console.log('questionFive:' + questionFive);
  alert('Actually, ' + username + ', I was an Army Brat and spent many years in Germany and Italy. ');
} else(questionFive === 'yes' || questionFive === 'y');{
  console.log('questionFive:' + questionFive);
  alert(username + ', you are good at this!');
}

//Conclusion
alert(username + ', thank you for playing today and learning a few things about me. Come back again!');
