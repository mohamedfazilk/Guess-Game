'use strict';

// console.log( document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'correct Answer'
// document.querySelector('.number').textContent = 27
// document.querySelector('.score').textContent = 80
// document.querySelector('.guess').value=24
// console.log(document.querySelector('.guess').value=24);

const secretNumber = Math.trunc(Math.random() *20)+1;
let score = 20;
document.querySelector('.number').textContent = secretNumber


document.querySelector('.check').addEventListener(
    
    'click', function (){
       const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if(!guess){
         document.querySelector('.message').textContent = 'No Answer'
        }
        
        else if(guess === secretNumber){
            document.querySelector('.message').textContent = 'correct Answer';
        }

        else if (guess > secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = 'Too High';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
            }
        }

        else if (guess < secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent = 'Too Low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
            }
        }
        
       
        
    })

   