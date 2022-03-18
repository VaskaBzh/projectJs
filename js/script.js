let title = "проект";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25000;
let rollback = Math.round(Math.random() * 50);
let fullPrice = 175000;
let adaptive = true;
let arr = screens.split('');


console.log ('title'+ " " + title);
console.log ('Стоимость разработки сайта' + " " + fullPrice + " " + 'рублей');
console.log ('adaptive'+ " " + adaptive);
console.log ('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log ('rollback'+ " " + rollback);
console.log (screens.length);
console.log (screens.toLowerCase());
console.log (arr);
console.log ('Процент отката посреднику за работу ' + " " + Math.round((fullPrice * (rollback/100))));


console.log (typeof title);
console.log (typeof fullPrice);
console.log (typeof adaptive);
console.log (typeof screenPrice);
console.log (typeof rollback);