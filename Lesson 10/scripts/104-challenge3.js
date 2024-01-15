let calculation = localStorage.getItem('updatedCalculation') || '';

showCalculation();

function updateCalculation (command) {
  calculation += command;
  localStorage.setItem('updatedCalculation', calculation);
  showCalculation();
}

function showCalculation () {
  document.querySelector('.js-calculation').innerHTML = `${calculation}`;     
}