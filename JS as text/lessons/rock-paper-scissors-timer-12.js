const score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0 , 
  losses: 0, 
  ties: 0
  };
  
  updateScoreElement();

  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  }
  
  document.querySelector('.autoplay-button')
  .addEventListener('click',()=>{
    autoPlay();
  });

  let autoPlaying = false;
  let intervalId;
  
    function autoPlay(){
      if (!autoPlaying){
      intervalId=setInterval(()=>{
      const playerMove= computerMove();
      playGame(playerMove)},1000);
      autoPlaying=true;
      } else {

        clearInterval(intervalId);
        autoPlaying=false;
      }
    }

  document.querySelector('.rock-button')
  .addEventListener('click',()=>{
    playGame('Rock');
  });

  document.querySelector('.paper-button')
  .addEventListener('click',()=>{
    playGame('Paper');
  });

  document.querySelector('.scissors-button')
  .addEventListener('click',()=>{
    playGame('Scissors');
  });

  document.body.addEventListener('keydown',(event)=>{
    if (event.key === 'r'){
      playGame('Rock');
    } else if (event.key === 'p'){
      playGame('Paper');
    } else if (event.key === 's'){
      playGame('Scissors'); 
    }
  })

  function playGame(playerMove){
    const compMove = computerMove();
    let result ='';

    if (playerMove==='Scissors'){
        if (compMove==='Rock'){
        result='You lose.'
      } else if (compMove==='Paper'){
        result='You win.'
      } else if (compMove==='Scissors'){
        result='Tie.'
      }
    } 
    else if (playerMove==='Rock'){

      if (compMove==='Rock'){
        result='Tie.'
      } else if (compMove==='Paper'){
        result='You lose.'
      } else if (compMove==='Scissors'){
        result='You win.'
      }
    } 
    else if (playerMove==='Paper'){
      
      if (compMove==='Rock'){
        result='You win.'
      } else if (compMove==='Paper'){
        result='Tie.'
      } else if (compMove==='Scissors'){
        result='You lose.'
      }
    }


    if (result==='You win.'){
      score.wins +=1;
    } else if (result==='You lose.') {
      score.losses +=1;
    } else if (result==='Tie.'){
      score.ties +=1;
    }

    document.querySelector('.reset-score')
  .addEventListener('click',()=>{
    score.losses= 0; 
    score.ties= 0; 
    score.wins= 0; 
    localStorage.removeItem('score');
    updateScoreElement();
  });

  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));
  
  document.querySelector('.js-result')
      .innerHTML=`${result}`
  document.querySelector('.js-picks')
      .innerHTML=`You <img src="../excercise/rock- paper- scissors/images/${playerMove}.png" class="picks-button"> 
      <img src="../excercise/rock- paper- scissors/images/${compMove}.png" class="picks-button"> Computer`

  //alert(`You picked ${playerMove}. \n Computer picked ${compMove}. \n ${result} \n Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
  }
  
  function computerMove(){
    const random = Math.random();
    let compMove ='';

    if (random>=0 && random<1/3) {
      compMove='Rock'
    } else if (random>=1/3 && random<2/3) {
      compMove='Paper'
    } else if (random>=2/3 && random<1) {
      compMove='Scissors'
    }

    return compMove;
  }