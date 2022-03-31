const button = document.getElementById('btn');
const square = document.getElementById('square');
const inputText = document.querySelector('[type="text"]')
const inputRange = document.querySelector('[type="range"]')
const e_button = document.getElementById('e_btn')
const circle = document.getElementById('circle')
const span = document.getElementById('range-span')

const logger = function (event) {
    span.textContent = event.target.value
}

const changeWidth = function (event) {
    circle.style.width = event.target.value + '%'
    circle.style.height = event.target.value + '%'
}

button.addEventListener('click', function() {
    square.style.backgroundColor = inputText.value
    inputText.value = ''
})

e_button.addEventListener('click', function() {
    e_button.style.display = 'none'
})

inputRange.addEventListener('input', logger)

inputRange.addEventListener('input', changeWidth)
inputRange.addEventListener('change', changeWidth)