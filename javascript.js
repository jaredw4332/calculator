const operate = function(a,b,operator) {
    if (operator == '+') {
        return add(a,b)
    }
    else if (operator == '-') {
        return subtract(a,b)
    }
    else if (operator == '*') {
        return multiply(a,b)
    }
    else if (operator == '/'){
        return divide(a,b)
    }
}

const add = function(a,b) {
    return a + b
};

const subtract = function(a,b) {
    return a - b
};

const multiply = function(a,b) {
    return a * b
}

const divide = function(a,b) {
    return a / b
}

const negativeToggle = function(num) {
        num = num - num - num
        return num
}

const currentInput = document.getElementById('currentInput')

const previousInput = document.getElementById('previousInput')

let currentValue = ''
let previousValue = ''

let numberArray = Array.from(document.getElementsByClassName("number"))
numberArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
        if (currentValue == '' && elem.innerText == '.') {
            currentValue = '0'
        }
        currentValue += elem.innerText
        currentInput.textContent = currentValue
    })
})

let operatorArray = Array.from(document.getElementsByClassName("operator"))
operatorArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
        previousValue = `${currentValue} ${elem.innerText}`
        previousInput.textContent = previousValue
        currentValue = ''
    })
})