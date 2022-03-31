'use strict';

const appData = {
    title: '',
    screens: [  ],
    screenPrice: 0,
    adaptive: true,
    rollback: Math.round(Math.random() * 100),
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrices: 0,
    services: {},
    getNumber: function (num) {
        let numNew = Number(String(num).trim())
        return numNew
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != 0
    },
    asking: function() {
        do {
            appData.title = prompt('Как называется ваш проект?', "Проект");
        } while (isNaN(appData.title) === false);

        for (let i = 0; i < 2; i++) {
            let price = 0
            
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Простые');
            } while (isNaN(name) === false);
            
            do {
                price = +prompt('Сколько будет стоить данная работа?', '12000')
                appData.getNumber(price)
            } while (!appData.isNumber(price))

            appData.screens.push({ id: 1, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let price = 0
            
            do {
                name = prompt('Какой дополнительный тип услуги нужен?', 'метрика');
            } while (isNaN(name) === false);
    
            do {
                price = +prompt("Сколько это будет стоить?", '500')
                appData.getNumber(price)
            } while (!appData.isNumber(price))

            appData.services[i + 1 + " " + name] = +price
        }
            
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    showTypeOff: function(variable) {
        console.log(variable, typeof variable);
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices   
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrices = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    logger: function () {
        for(let prop in appData) {
            if (typeof appData[prop] !== "function") {
                appData.showTypeOff(appData[prop])
            }
        }
    },
    start: function () {
        appData.getNumber()
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        
        appData.logger()
    }
}

appData.start()