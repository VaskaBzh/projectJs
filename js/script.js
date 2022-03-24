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
    getNumber: function (num) {
        let numNew = Number(String(num).trim())
        return numNew
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != 0
    },
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', 'проект')
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")
        
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', '12000')
            appData.getNumber(appData.screenPrice)
        } while (!appData.isNumber(appData.screenPrice))
            
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },
    getAllServicePrices: function () {
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
            appData.getNumber(sumControl)
        } while (!appData.isNumber(sumControl))
        sum += sumControl
        }

        return sum
    },
    showTypeOff: function(variable) {
        console.log(variable, typeof variable);
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices   
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getRollbackMessage: function() {
        if (appData.fullPrice >= 30000){
            return "Даем скидку в 10%"
        } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000){
            return "Даем скидку 5%"
        } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000){
            return "Скидка не предусмотрена"
        } else {
            return "Что то пошло не так"
        }
    },
    getTitle: function() {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    start: function () {
        appData.getNumber()
        appData.isNumber()
        appData.asking()
        appData.getAllServicePrices()
        appData.showTypeOff(appData.title)
        appData.showTypeOff(appData.screens)
        appData.showTypeOff(appData.screenPrice)
        appData.showTypeOff(appData.adaptive)
        appData.showTypeOff(appData.rollback)
        appData.showTypeOff(appData.fullPrice)
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getRollbackMessage()
        appData.getTitle()
    }  
}

appData.start()