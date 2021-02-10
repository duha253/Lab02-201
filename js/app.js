/* eslint-disable no-unused-vars */
'use strict';
let Score=0;
function myName (){
  let ansName = prompt('Do you think that my name is Duha?', 'yes or no');
  if (ansName.toLowerCase() === 'yes' || ansName.toLowerCase() === 'y') {
  //console.log('this is right,you know my name');
    alert('this is right,you know my name');
    Score++;}


  else if (ansName.toLowerCase() === 'no' || ansName.toLowerCase() === 'n') {
  //console.log('No,sorry its not my name');
    alert('No,sorry its not my name');
  } else {
    alert('welcom');
  }
} 
myName();


function myAge (){
  let ansAge = prompt('Do you think I am 29 years old ?', 'yes or no');
  if (ansAge.toLowerCase() === 'yes' || ansAge.toLowerCase() === 'y') {
  //console.log('this is right,im 29 years old');
    alert('this is right,im 29 years old');
    Score++;
  } else if (ansAge.toLowerCase() === 'no' || ansAge.toLowerCase() === 'n') {
  //console.log('No,sorry its not my age');
    alert('No,sorry its not my age');
  } else {
    alert('welcom');
  }
}

myAge();

function myCity (){
  let ansCity = prompt('Do you think I am from jordan?', ' yes or no');
  if (ansCity.toLowerCase() === 'yes' || ansCity.toLowerCase() === 'y') {
  // console.log('this is right');
    alert('this is right');
    Score++;
  } else if (ansCity.toLowerCase() === 'no' || ansCity.toLowerCase() === 'n') {
  // console.log('No,sorry its not my city');
    alert('No,sorry its not my city');
  } else {
    alert('welcom');
  }
}
myCity();



function myCar (){
  let ansCar = prompt('Do you think I have a car?', ' yes or no');
  if (ansCar.toLowerCase() === 'yes' || ansCar.toLowerCase() === 'y') {
  //console.log('this is right');
    alert('this is right');
    Score++;
  } else if (ansCar.toLowerCase() === 'no' || ansCar.toLowerCase() === 'n') {
  // console.log('No, i have one');
    alert('No, i have one');
  } else {
    alert('welcom');
  }
} 
myCar();


function myMind (){
  let ansPos = prompt('Do you think I am positive person  ?', ' yes or no');
  if (ansPos.toLowerCase() === 'yes' || ansPos.toLowerCase() === 'y') {
  //console.log('  this is right ');
    alert('this is right');
    Score++;
  } else if (ansPos.toLowerCase() === 'no' || ansPos.toLowerCase() === 'n') {
  // console.log('No ');
    alert('No');
  } else {
    alert('welcom');
  }
}
myMind();


alert('name is Duha And my age is 29 years old And am from jordan ,and i have a car and i think am positive person');


function favNum (){
  let theNum = 7;
  for (let i = 0; i < 4; i++) {
    let guess = prompt('giss my favarute number');

    // console.log(i);
    if (parseInt(guess) === theNum) {
      alert('this is right');
      Score++;
      break;
    } else if ( parseInt(guess) > theNum) {
      alert('Too high, Try Again ');

    }
    else if ( parseInt(guess) < theNum) {
      alert('Too low, Try Again ');
    } else {
      alert('welcom ');
    }
  //console.log(guess);
  }
}
favNum();



function favFood () {
  let foodNames = ['mansaf', 'pitzza', 'kuba', 'tabuleh', 'fish', 'salmon'];
  let found = false;
  for (let i = 0; i < 6; i++) {
    let favFood = prompt('giss my favarute food');
    for (let y = 0; y < 6; y++) {
      if (favFood.toLowerCase() === foodNames[y]) {
        alert('this is right');
        console.log(favFood);
        found = true;
        Score++;
        break;
      }
    }
    if (found === true) {
      break;
    }
  }
}
favFood();

alert('your score is'+ Score +'out of 7');
