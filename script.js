'use strict';



let secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;
let highScore = ''

const displayMessage  = function (message){
    document.querySelector('.message').textContent = message
}

const displayNumber = function(number){
    document.querySelector('.number').textContent = number
}


document.querySelector('.check').addEventListener(
    
    'click', function (){
       const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //when there is no input
        if(!guess){
            displayMessage('No Answer !')
        }
        
        //when player wins
        else if(guess === secretNumber){
            displayNumber( secretNumber)
            displayMessage('correct Answer') ;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'

            if(score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else if (guess !== secretNumber){
            
            if(score > 1){
                displayMessage( guess > secretNumber ? 'Too High' : 'Too Low'
                )
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
              displayMessage('You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        }

       
       
        
    })

    document.querySelector('.again').addEventListener(
        'click', function(){
          score =20;
          secretNumber = Math.trunc(Math.random() *20)+1;
       displayMessage( 'Start Guessing ..');
          document.querySelector('.score').textContent = score;
          displayNumber('?') 
          document.querySelector('.guess').value=''
          document.querySelector('body').style.backgroundColor = '#222';
          document.querySelector('.number').style.width = '15rem'
         
          
          

        }
    )

   