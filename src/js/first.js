let money = 10000,
mission = 35000,
deposit = true;
const income = 'Фриланс',
addExpenses = 'Интернет, Телефон, Билет на метро',
period = 7;

console.log(typeof income, typeof money, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен', period, 'месяцев.', 'Цель заработать', mission, 'рублей');
console.log(addExpenses.toLowerCase().split(' '));

let budgetDay = money / 30;
console.log('Дневной бюджет', budgetDay, 'рублей');