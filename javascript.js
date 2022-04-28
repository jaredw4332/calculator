const operate = function(a,b,operator) {
    if (operator == '+') {
        return add(a,b)
    }
    else if (operator == '-') {
        return subtract(a,b)
    }
    else if (operator == '×') {
        return multiply(a,b)
    }
    else if (operator == '÷'){
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
        previousInput.textContent = previousValue
    })
})

let operatorArray = Array.from(document.getElementsByClassName("operator"))
operatorArray.forEach(function(elem) {
    elem.addEventListener('click', function() {
        if (elem.innerText == '±') {
            if (currentValue == '' && previousValue == result) {
                currentValue = result
            }
            if (currentValue == '.' || currentValue == 0){
                return
            }
            currentValue = negativeToggle(currentValue)
            currentInput.textContent = currentValue
            return
        }
        if (previousValue == '' && currentValue == ''){
            currentValue = '0'
        }
        previousValue = previousValue.toString()
        if ((currentValue != 0 || currentValue != '') && (previousValue.includes('+') || previousValue.includes('-') || previousValue.includes('×') || previousValue.includes('÷'))) {
            equals()
        }
        if (currentValue == '' && previousValue == result) {
            currentValue = result
        }
        else {
            if (currentValue == '') {
                previousValue = `${previousValue.slice(0, -1)} ${elem.innerText}`
            }
            else {
                previousValue = `${currentValue} ${elem.innerText}`
            }
            currentValue = ''
            previousInput.textContent = previousValue
            currentInput.textContent = currentValue
        }
    })
})

const clearEntry = document.getElementById("clearEntry")
clearEntry.addEventListener('click', function() {
    currentValue = currentValue.toString().slice(0, -1)
    currentInput.textContent = currentValue
})

const clearAllButton = document.getElementById("clearAll")
clearAllButton.addEventListener('click', clearAll)

function clearAll(){
    currentValue = ''
    previousValue = ''
    currentInput.textContent = 0
    previousInput.textContent = ''
}

let operator = ''
let equation = ''
let result = ''

const equalsButton = document.getElementById("equals")
equalsButton.addEventListener('click', equals) 

function equals() {
    if (previousValue == ''){
        return
    }
    previousValue = previousValue.toString()
    currentValue = Number(currentValue)
    operator = previousValue.slice(-1)
    previousValue = Number(previousValue.slice(0, -1))

    if(previousValue == 0 && currentValue == 0 && operator == '÷'){
        alert("You weren't supposed to do that!")
        clearAll()
        return
    }

    equation = `${previousValue} ${operator} ${currentValue} =`
    result = operate(previousValue, currentValue, operator)
    
    previousInput.textContent = equation
    currentInput.textContent = result
    previousValue = result
    currentValue = ''
}