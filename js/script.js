// GOAL:
// Una funzione per capire se la parola è
// palindroma


// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.


//Esercizio 1
// function PalFunction(str) {
//
//   var reversed = str.split('').reverse().join('');
//   var pal = 'Your word is palindrome!';
//   var notPal = 'Your word is not palindrome!';
//
//
//   if (reversed === str) {
//     return document.getElementById('maintitle').innerHTML = pal;
//   }
//
//   else {
//     return document.getElementById('maintitle').innerHTML = notPal;
//   }
// }
//
// PalFunction(prompt("Enter a name").toLowerCase());


//Esercizio 2

var numUser = parseInt(prompt('Choose a number between 1 to 5'));
var evenOdd = prompt('even or odd?');

console.log(numUser, evenOdd);

function play(){
  var numPC = Math.floor(Math.random() * 5) +1;
  var sum = numUser + numPC;
  var risultato = 'Your number ' + numUser + ', PC number ' + numPC + '<br> You choose ' + evenOdd + ', The total is ' + sum + '<br>';

  console.log(numPC, numUser, sum);

  if (sum % 2 == 0 && evenOdd == 'even') {

    document.getElementById('maintitle').innerHTML += risultato + 'You Win!'

  }else if (sum % 2 == 0 && evenOdd == 'odd') {

    document.getElementById('maintitle').innerHTML += risultato + 'PC Wins!'

  }else if (sum % 2 == 1 && evenOdd == 'odd') {

    document.getElementById('maintitle').innerHTML += risultato + 'You Win!'

  }else {

    document.getElementById('maintitle').innerHTML += risultato + 'PC Wins!'
  }
}
play();