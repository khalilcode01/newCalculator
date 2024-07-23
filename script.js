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
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.op');
let firstOperand = '';
document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', () => {
        screen.textContent += number.textContent;
    })

});

buttons.forEach(op => {
    op.addEventListener('click',() => {
        
            
        
    })
});

