
const displayScreen = document.getElementById('display');
const numpad = document.getElementById('numpad');
let nums = numpad.querySelectorAll('input');
let displayStorage = '';
nums.forEach((num) => 
    num.addEventListener('click', () => display(num.value))
);

function display(number){
    if (number == 'AC'){
        clear();
    }else{
        displayScreen.textContent = number;
        displayStorage += number;
        console.log(displayStorage);
    }
}

function clear(){
    displayScreen.textContent = '';
    displayStorage = '';
    //displayStorage = displayStorage.slice(0,-1);
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

/*
console.log(add(20,1));
console.log(subtract(10,5));
console.log(multiply(4,9));
console.log(divide(10,3));*/