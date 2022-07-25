
const displayScreen = document.getElementById('display');
const numpad = document.getElementById('numpad');
let nums = numpad.querySelectorAll('.num');

let numberStorage = '';
let operatorStorage = '';

//display numbers
nums.forEach((num) => 
    num.addEventListener('click', () => displayNum(num.value))
);

function displayNum(number){
    if (displayScreen.textContent == '0'){
        displayScreen.textContent = number;
    }else{
        displayScreen.textContent += number;
        numberStorage += number;
        console.log(numberStorage);
    }
}

//clear button
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click' ,clear);

function clear(){
    displayScreen.textContent = 0;
    //displayStorage = displayStorage.slice(0,-1);
}

//negative or positive button
const npBtn = document.getElementById('np-btn');
npBtn.addEventListener('click', negativeOrPositive);

function negativeOrPositive(){
    displayScreen.textContent *=-1;
}

//percent button
const percentBtn = document.getElementById('percent-btn');
percentBtn.addEventListener('click', percent);

function percent(){
    displayScreen.textContent /=100;
}

//dot button
const dotBtn = document.getElementById('dot-btn');
dotBtn.addEventListener('click', decimal);

function decimal(){
    if (!displayScreen.textContent.includes('.')){
        displayScreen.textContent += '.';
    }
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



function operate(a, b , operator){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            if (b === 0) return 'ERROR'
            return divide(a,b);
        default:
            return
    }
}
