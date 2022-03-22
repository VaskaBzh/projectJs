'use strict';

let title = prompt('Как называется ваш проект?', 'проект');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let rollback = Math.round(Math.random() * 50);
let fullPrice;
let allServicePrices;
let 

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
let servicePrice1 = +prompt('Сколько это будет стоить?', '500');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация');
let servicePrice2 = +prompt('Сколько это будет стоить?', '500');

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
}

const showTypeOff = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function (screenPrice, allServicePrices) {
    return screenPrice + allServicePrices   
}

const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - (fullPrice * (rollback/100))
}

const getRollbackMessage = function(fullPrice) {
    if (fullPrice >= 30000){
        return "Даем скидку в 10%"
    } else if (fullPrice >= 15000 && fullPrice < 30000){
        return "Даем скидку 5%"
    } else if (fullPrice >= 0 && fullPrice < 15000){
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    };
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getTitle = function(title) {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

title = getTitle(title);

let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


showTypeOff(title)
showTypeOff(fullPrice)
showTypeOff(adaptive)
showTypeOff(screenPrice)
showTypeOff(rollback)

console.log (screens.toLowerCase().split(', '));
console.log (getRollbackMessage(fullPrice));
console.log (servicePercentPrice);

