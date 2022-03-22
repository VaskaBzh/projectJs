'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = Math.round(Math.random() * 50)
let fullPrice
let allServicePrices
let servicePercentPrice
let service1
let service2
let askingTitle

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'проект')
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")

    screenPrice = prompt('Сколько будет стоить данная работа?', '12000')
    
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?', '12000')
    } while (!isNumber(screenPrice))
        
    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum = 0
    let sumControl

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация');
        }

        do {
            sumControl = +prompt("Сколько это будет стоить?", '500');
        } while (!isNumber(sumControl))
        sum += sumControl
    }

    return sum
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
    }
}

const getTitle = function(title) {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

askingTitle = asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice, rollback)
title = getTitle(title)

showTypeOff(title)
showTypeOff(fullPrice)
showTypeOff(adaptive)
showTypeOff(screenPrice)
showTypeOff(rollback)

console.log("allServicePrices", allServicePrices)

console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей и Стоимость разработки сайта " + fullPrice + " рублей");