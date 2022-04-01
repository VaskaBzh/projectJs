'use strict'

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBth = document.getElementsByClassName('handler_btn')[0]
const resetBth = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [  ],
    screenPrice: 0,
    adaptive: true,
    rollback: Math.round(Math.random() * 100),
    fullPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrices: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()

        startBth.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    start: function () {
        appData.addScreens()
        appData.addServices()

        appData.addPrices()
        // appData.getServicePercentPrices()
        
        // appData.logger()
        appData.showResult()
    },
    getNumber: function (num) {
        let numNew = Number(String(num).trim())
        return numNew
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')

        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            })
        })
    },
    addServices: function () {
      otherItemsPercent.forEach(function (item) {
          const check = item.querySelector('input[type=checkbox]')
          const label = item.querySelector('label')
          const input = item.querySelector('input[type=text]')

          if(check.checked) {
            appData.servicesPercent[label.textContent] = +input.value
          }
      })  
      otherItemsNumber.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
          appData.servicesNumber[label.textContent] = +input.value
        }
    })  
    },
    addScreenBlock: function () {
      const cloneScreen = screens[0].cloneNode(true)

      screens[screens.length - 1].after(cloneScreen)
    },
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent
    },
    showTypeOff: function(variable) {
        console.log(variable, typeof variable);
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
    }
}

appData.init()