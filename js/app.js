'use strict';

//console.log('Hello World!');

// Introduction
let username = prompt('Hello! What is your name?');
//Rules
alert('Good Day, ' + username + '! Want to learn a little about me? Please answer Yes or No to the five questions below.');

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
  alert(username + ', of course I do!');
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
let q5 = prompt('Have I lived in Europe?').toLowerCase();
//if loop
if(q5 === 'no' || q5 === 'n'){
  // console.log('question5:' + q5);
  alert('Actually, ' + username + ', I was an Army Brat and spent many years in Germany and Italy. ');
} else {
  //console.log('question5:' + q5);
  alert(username + ', you are good at this!');
}

//Conclusion
alert(username + ', thank you for playing today and learning a few things about me. Come back again!');
