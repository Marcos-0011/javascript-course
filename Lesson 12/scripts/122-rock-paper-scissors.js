let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

//2 then created this autoplay variable to later on stop autoplay and used it in the if condition of the autoplay function
let isAutoPlaying = false;
//setInterval returns a number that acts as an ID, so we created the variable intervalID to save the ID. needed to do outside of the funtion bc it would do a new ID each time we run the function 
let intervalId;
//1) created this autoplay function. have to create a playermove as we're not picking one ourselves and pass it into the playame function

/*
//this is the arrow function version of the autoplay function. for this one it comes down to own opinion. simon prefers second as its easier to read and allows for hoisting which means we can call the function before its created. this way we dont have to worry about the order of its placement
const autoPlay = () => {

}
*/
function autoplay() {
  if (!isAutoPlaying) {
    //in the following line of code we saved the ID number
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true; //changed autoplay variable to true here as it is now on and need to stop autoplay in the following else bracket
  } else {
    //the following line of code stops the interval due to the ID given by the setInterval when it is active, then we change isAutoplaying to false bc it is no longer active
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

//ADVANCED FUNCTIONS PART 2.1: common mistake is typing playGame('rock') right after 'click' but this will return undefined from the playGame function. we need to first create a function using the arrow function. inside of it, we'll call the playGame function. do the same thing with the paper and scissors button
document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

//ADVANCED FUNCTIONS PART 2.2: now lets do .addEventListener for 'keydown' for r, p, and s. we'll use the body element to make sure its listening the entire time. addEvent gives us the event object which contains the key that is pressed. so lets add event to the parameter to the function we want to run when the event occurs. pick up video at 11:33
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

//now go to 123-todo-list.html and js and add eventlistener to that one too

function playGame (playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;
  
  document.querySelector('.js-moves')
    .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
    //this code makes JS generate the HTML for us. The template string is added to js-moves and includes the move from each player with its HTML and CSS classes
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}