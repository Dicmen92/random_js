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

let nullNumber = function(x) {
     if (x === null) {     
     return alert ('Спасибо за игру, удачи!');      
    }   
  } 

let getEntNumber = function() {     
     console.log(randomNumber);     
     let getGuessNumber = function() {
          entNumber = prompt('Угадай число от 1 до 100');  
            nullNumber(entNumber);     
            if (entNumber > randomNumber) {
            alert('Загаданное число меньше');
            getGuessNumber();
            } else if (entNumber < randomNumber) {
            alert('Загаданное число больше');
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