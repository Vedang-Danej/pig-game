'use strict';
// all the selectors
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current0=document.querySelector('#current--0');
const current1=document.querySelector('#current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
 let currentScore=0;
 let activePlayer=0;
 let score=[0,0];
 let playing=true;
//  functions
const switchPlayer=function(){
    player0.classList.toggle('player--active');//toggle adds class if not there and removes if there
    player1.classList.toggle('player--active');
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
}
//starting conditions
score0El.textContent=0;
score1El.textContent=0;


    diceEl.classList.add('hidden');
    

        btnRoll.addEventListener('click',function(){
            if(playing){//to make sure that dice cant be rolled after the game has been won

                const dice=Math.trunc(Math.random()*6)+1;
                
                diceEl.classList.remove('hidden');
                diceEl.src=`dice-${dice}.png`;
                
                // if dice is 1  change current player
                if(dice!==1){
                    currentScore+=dice;
                    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
                    
                }else{
                    
                    switchPlayer(); 
                } 
            }
        })
    

    

        btnHold.addEventListener('click',function(){
            if(playing){

                score[activePlayer]+=currentScore;
                document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
                if(score[activePlayer]>=20){
                    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                    diceEl.classList.add('hidden');
                    playing=false;
                }else{
                    switchPlayer();
                }
                
            }
        })

        btnNew.addEventListener('click',function(){
            score=[0,0];
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
            document.getElementById(`score--1`).textContent=0;
            document.getElementById(`score--0`).textContent=0;
            document.getElementById(`current--${activePlayer}`).textContent=0;
            activePlayer=0;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            currentScore=0;
            playing=true;
        })
        
    
    

