'use strict';

let title = prompt('Как называется ваш проект?', 'проект');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollback = Math.round(Math.random() * 50);
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
let servicePrice1 = +prompt('Сколько это будет стоить?', '500');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация');
let servicePrice2 = +prompt('Сколько это будет стоить?', '500');
let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - rollback)

if (fullPrice >= 30000){
    console.log('Даем скидку в 10%')
} else if (fullPrice > 15000 && fullPrice < 30000){
    console.log('Даем скидку 5%')
} else if (fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена')
} else {
    console.log ('Что то пошло не так')
}


console.log (title);
console.log ('Стоимость разработки сайта' + " " + fullPrice + " " + 'рублей');
console.log ('adaptive'+ " " + adaptive);
console.log ('Стоимость верстки экранов' + " " + screenPrice + " " + 'рублей');
console.log ('rollback'+ " " + rollback);
console.log (screens.length);
console.log (screens.toLowerCase().split(', '));
console.log ('Процент отката посреднику за работу ' + " " + Math.round((fullPrice * (rollback/100))));
console.log (service1 + " " + servicePrice1);
console.log (service2 + " " + servicePrice2);
console.log ('Итоговая стоимость работы' + " " + fullPrice);
console.log (servicePercentPrice);


console.log (typeof title);
console.log (typeof fullPrice);
console.log (typeof adaptive);
console.log (typeof screenPrice);
console.log (typeof rollback);

