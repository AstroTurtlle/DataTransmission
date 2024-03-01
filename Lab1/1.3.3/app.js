let counter = 0;

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue('counter', 0);

document.getElementById('inc').addEventListener('click', increment);
document.getElementById('dec').addEventListener('click', decrement);

function increment() {
  counter<10?counter++:pass;
  printValue('counter', counter);
}

function decrement() {
    counter>0?counter--:pass;
    printValue('counter', counter);
  }