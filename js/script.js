'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: Math.round(Math.random() * 100),
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', 'проект')
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")
        
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000')
            getNumber(appData.screenPrice)
        } while (!isNumber(appData.screenPrice))
            
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    }   
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0
}

const getNumber = function (num) {
    let numNew = Number(String(num).trim())
    return numNew
}

const getAllServicePrices = function () {
    let sum = 0
    let sumControl

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'метрика')
        } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'адаптация')
        }

        do {
            sumControl = +prompt("Сколько это будет стоить?", '500')
            getNumber(sumControl)
        } while (!isNumber(sumControl))
        sum += sumControl
    }

    return sum
}

const showTypeOff = function() {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices   
}

const getServicePercentPrices = function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
}

const getRollbackMessage = function() {
    if (appData.fullPrice >= 30000){
        return "Даем скидку в 10%"
    } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000){
        return "Даем скидку 5%"
    } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000){
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}

const getTitle = function() {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
}

appData.asking()
appData.allServicePrices = getAllServicePrices()
appData.fullPrice = getFullPrice()
appData.servicePercentPrice = getServicePercentPrices()
appData.title = getTitle()