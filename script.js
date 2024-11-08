let memory = 0;

function clearAll() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    const display = document.getElementById('display');
    display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(4);
}

function calculateSquare() {
    const display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2).toFixed(4);
}

function calculateExponent() {
    const display = document.getElementById('display');
    display.value += '**';
}

function memoryClear() {
    memory = 0;
    alert('Memory Cleared');
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value += memory;
}

function memoryAdd() {
    const display = document.getElementById('display');
    memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
    const display = document.getElementById('display');
    memory -= parseFloat(display.value) || 0;
}
