'use strict';

//alert, confirm, prompt

function getRandomArbitrary(min, max) {
     return Math.random() * (max - min) + min;
};

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n);
   }
 
let randomNumber = Math.round(getRandomArbitrary(1, 100));
let entNumber = 0;

let getEntNumber = function() {     
     console.log(randomNumber);     
     let getGuessNumber = function() {
          entNumber = prompt('Угадай число от 1 до 100');         
            if (entNumber > randomNumber) {
            console.log('Загаданное число меньше');
            getGuessNumber();
            } else if (entNumber < randomNumber) {
            console.log('Загаданное число больше');
            getGuessNumber();            
            } else if (!isNumber(entNumber)) {
            alert('Введи число!');
            getGuessNumber(); 
            } else {
               alert('Вы угадали число число!');            
            } 
     }
     return getGuessNumber();
};    

getEntNumber();