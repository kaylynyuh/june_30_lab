'use strict';

var conversion = [2,50];

var form = document.getElementById('calcForm');


form.addEventListener('submit', performCalc);

function submitHit() {
  event.preventDefault();

  var elInput = document.getElementById('numberToConvert');
  var inputNumber = parseFloat(elInput.value);

  console.log(inputNumber);
  return inputNumber;

}

function performCalc() {
  var newNumber =  submitHit() * conversion[1];
  console.log(newNumber);
}
