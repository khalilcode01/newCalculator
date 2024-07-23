function add(a, b){
    return +a + +b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function reminder(a, b){
    return a % b;
}
function operate(a, op, b) {
    switch(op){
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '%':
            result = reminder(a, b);
            break;
    }
    screen.textContent = result;
}
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.op');
let firstOperand = '';
let secondOperand = '';
let operand = '';
let result = '';
let zeroFlag = 0;
let equalButton = document.querySelector('.equal');
document.querySelector('.sign').addEventListener('click', () => {
    screen.textContent *= -1;
});
document.querySelector('.ac').addEventListener('click', () => {
    screen.textContent ='';
    firstOperand = '';
    secondOperand = '';
});
document.querySelector('.dot').addEventListener('click', () => {
    if(!(screen.textContent.includes('.')))
    screen.textContent +='.';
});
equalButton.addEventListener('click', () => {
   secondOperand = screen.textContent;
   zeroFlag = 0;
   operate(firstOperand, operand, secondOperand);
  
});
document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', () => {
        if(number.textContent !== '0' || zeroFlag == 1){
        screen.textContent += number.textContent;
        zeroFlag = 1;
        }
    })

});

buttons.forEach(op => {
    op.addEventListener('click',() => {
        firstOperand = screen.textContent;
        operand = op.textContent;
        screen.textContent = '';
        zeroFlag = 0;
    })
});

