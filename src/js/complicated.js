'use strict';

const ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение',
en = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
err = 'Введенное Вами значение не удовлетворяет условия поиска',
lang = prompt('Введите одно из двух значений: ru или en', 'ru');

/*Условие if*/ 
if (lang === 'ru') {
  console.log(ru);  
} else if (lang === 'en') {
  console.log(en);
} else {
  console.log(err);
}

/*Условие switch*/ 
switch (lang) {
  case'ru':
    console.log(ru); 
    break;  
  case'en':
    console.log(en); 
    break; 
  default:
    console.log(err);
    break;
}

/*Многомерный массив*/ 
const langArr = [];
langArr['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'];
langArr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(langArr[lang]);

/*Решение задачи с помощью нескольких тернарных операторов*/
let namePerson = prompt('Введите имя для проверки', 'Артем'),
result = '';

(namePerson === 'Артем') ? ( 
  console.log('Директор!')
) : (
  console.log('Преподаватель!')
);


result = (namePerson === 'Артем') ? 'Директор!' :
  (namePerson === 'Максим') ? 'Преподаватель!' :
  'Студент';
  console.log(result);