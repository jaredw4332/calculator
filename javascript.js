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
        currentValue = currentValue.toString()
        if ((currentValue == '' || currentValue == '0') && elem.innerText == '.') {
            currentValue = '0.'
            currentInput.textContent = currentValue
        }
        if (currentValue.charAt(0) == '0' && currentValue.charAt(1) != '.'){
            currentValue = currentValue.substring(1)
        }
        if (currentValue.includes('.') && elem.innerText == '.'){
            return
        }
        currentValue += elem.innerText
        currentInput.textContent = currentValue
    })
})

let operatorArray = Array.from(document.getElementsByClassName("operator"))
operatorArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
        if (elem.innerText == '±') {
            if (currentValue == '.' || currentValue == 0){
                return
            }
            currentValue = negativeToggle(currentValue)
            currentInput.textContent = currentValue
        }
        else {
            previousValue = `${currentValue} ${elem.innerText}`
            previousInput.textContent = previousValue
        }
    })
})

const clearEntry = document.getElementById("clearEntry")
clearEntry.addEventListener('click', function() {
    currentValue = currentValue.toString().slice(0, -1)
    currentInput.textContent = currentValue
})

const clearAll = document.getElementById("clearAll")
clearAll.addEventListener('click', function() {
    currentValue = ''
    currentInput.textContent = 0
    previousInput.textContent = ''
})