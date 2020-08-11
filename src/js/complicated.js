'use strict';

let inpLine = '';

function acceptAnArgument(inpLine) {
  inpLine = prompt('Введите ваше сообщение', 'Например, меня зовут Дмитрий.');
  inpLine = inpLine.trim();
  if (inpLine.length > 30) { 
    inpLine = inpLine.substring(0, 30) + "...";    
}
  if ( !isNaN(inpLine) ) {
    alert('Извините, но введенное Вами сообщение не должно содержать цифр');  
  } else {
    console.log(inpLine); 
  }  
}


acceptAnArgument(inpLine);