'use strict';

var conversion = [2.45,.4];

var form = document.getElementById('calcForm');

form.addEventListener('submit', printResult);

function submitHit() {

  var elInput = document.getElementById('numberToConvert');
  var inputNumber = parseFloat(elInput.value);

  console.log(inputNumber);
  return inputNumber;

}

function performCalc() {
  var newNumber =  submitHit() * rateSelector();
  console.log(newNumber);
  return newNumber;
}

function printResult() {
  event.preventDefault();
  var elP = document.getElementById('result');
  elP.textContent = submitHit() + ' converts to ' + performCalc();
}

function rateSelector() {

  var elSelect = document.getElementById('selectButton');
  var i = elSelect.selectedIndex;
  console.log('array is ', i);
  return conversion[i];

}
