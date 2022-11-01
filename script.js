'use strict';

// console.log( document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'correct Answer'
// document.querySelector('.number').textContent = 27
// document.querySelector('.score').textContent = 80
// document.querySelector('.guess').value=24
// console.log(document.querySelector('.guess').value=24);

const secretNumber = Math.trunc(Math.random() *20)+1;
document.querySelector('.number').textContent = secretNumber


document.querySelector('.check').addEventListener(
    
    'click', function (){
       const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if(!guess){
         document.querySelector('.message').textContent = 'No Answer'
        }
        
        
       
        
    })

   