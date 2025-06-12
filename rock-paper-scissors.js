let score = JSON.parse(localStorage.getItem('score')) ||
    {
      wins: 0,
      losses: 0,
      ties : 0
    };
    ;
    updateScoreElement();
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
      let result = '';
      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'You lose.';
        } else if (computerMove === 'Paper') {
          result = 'You Win.'
        } else {
          result = 'Tie.'
        }
      }
      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'You Win.';
        } else if (computerMove === 'Paper') {
          result = 'Tie.'
        } else {
          result = 'You lose.'
        }
      }
      else {
        if (computerMove === 'Rock') {
          result = 'Tie.';
        } else if (computerMove === 'Paper') {
          result = 'You lose.'
        } else {
          result = 'You Win.'
        }
      }
      if(result==='You Win.'){
        score.wins += 1;
      }
      else if(result=='You lose.'){
        score.losses += 1;
      }
      else{
        score.ties += 1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      updateScoreElement();
      document.querySelector('.js-result').innerHTML =  `${result}`;
      document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src=${playerMove}-emoji.png> <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
    }
    function updateScoreElement(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
    }
    function pickComputerMove() {
      let computerMove = '';
      let randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
      } else {
        computerMove = 'Scissors';
      }
      return computerMove;
    }