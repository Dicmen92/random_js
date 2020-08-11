'use strict';

let inpLine = '';

function acceptAnArgument(inpLine) {
  inpLine = prompt('Введите ваше сообщение', 'Например, меня зовут Дмитрий.');
  if ( !isNaN(inpLine) ) {
    alert('Извините, но введенное Вами сообщение не должно содержать цифр');  
  }  
  inpLine = inpLine.trim();  
  if (inpLine.length > 30) { 
    inpLine = inpLine.substring(0, 30) + "...";    
}
console.log(inpLine); 
  
}


acceptAnArgument(inpLine);