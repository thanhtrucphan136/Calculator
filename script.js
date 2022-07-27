
const displayScreen = document.getElementById('display');
const numpad = document.getElementById('numpad');
const nums = numpad.querySelectorAll('.num');

let currentNum = '';
let numberStorage = '';
let operatorStorage = '';
let currentOprator = null;
let operatorBtn = null;

//display numbers
nums.forEach((num) => 
    num.addEventListener('click', () => displayNum(num.value))
);

function displayNum(number){
    if (displayScreen.textContent == '0' || currentNum == '0'){
        displayScreen.textContent = number;
        currentNum = number;
    }else{
        displayScreen.textContent += number;
        currentNum += number;
    }
}

//clear current number when click AC button
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click' ,clear);

function clear(){
    displayScreen.textContent = 0;
}

//clear everything  when double click the AC button
clearBtn.addEventListener('dblclick', clearEverything);

function clearEverything(){
    displayScreen.textContent = 0;
    currentNum = 0;
    numberStorage = 0;
    currentOprator = null;
}

//negative or positive button
const npBtn = document.getElementById('np-btn');
npBtn.addEventListener('click', negativeOrPositive);

function negativeOrPositive(){
    displayScreen.textContent *=-1;
    currentNum *=1;
}

//percent button
const percentBtn = document.getElementById('percent-btn');
percentBtn.addEventListener('click', percent);

function percent(){
    displayScreen.textContent /=100;
    currentNum /= 100;
}

//dot button
const dotBtn = document.getElementById('dot-btn');
dotBtn.addEventListener('click', decimal);

function decimal(){
    if (!displayScreen.textContent.includes('.')){
        displayScreen.textContent += '.';
        currentNum += '.';
    }
}

//operating
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => 
    operator.addEventListener('click', () => storeNumber(operator)));

function storeNumber(operator){
    if (currentOprator !== null) equal()
    operator.style.backgroundColor = '#f6f4f4';
    operator.style.color = '#ff9500';
    numberStorage = currentNum;
    operatorBtn = operator;
    currentOprator = operator.value;
    currentNum = '0';

    
}

const equalBtn = document.getElementById('equal-btn');
equalBtn.addEventListener('click', equal);

//equal function
function equal(){
    let result = operate(Number(numberStorage), Number(currentNum), currentOprator);
    displayScreen.textContent = result;
    currentNum = result;
    currentOprator = null;
    operatorBtn.style.backgroundColor = '#ff9500';
    operatorBtn.style.color = '#f6f4f4';
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}


function operate(a,b, operator){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '÷':
            if (b === 0) return 'ERROR'
            return divide(a,b);
        default:
            return
    }
}


