'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let digit = 0;

let checkDigit = function() {
  do {
    digit = prompt('Введите 7 любых многозначных чисел');
  }  
  while (!isNumber(digit))
};

let arr = [];

let outDigit = function() {    
  for (let i = 0; i < 7; i++) {
    checkDigit();
    arr[i] = digit;       
  }  
  let n = 1;
  for (let i = 0; i < 7; i++) {            
    console.log('это строка №', n, 'и она содержит число = ', arr[i]);       
    n = n + 1;
  }  
};

outDigit();

for (let i = 0; i < 7; i++) {
if (arr[i][0] == '2' || arr[i][0] == '4') {
  console.log('Это число начинается с цифры 2 или 4 = ', arr[i]);
}
};

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i, 'Делители этого числа: 1 и ', i);
}