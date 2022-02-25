const p1={
    score:0,
    button:document.querySelector("#p1Button"),
    display:document.querySelector("#p1Score"),

}

const p2={
    score:0,
    button:document.querySelector("#p2Button"),
    display:document.querySelector("#p2Score"),
}



// const p1Button = document.querySelector("#p1Button");
// const p2Button = document.querySelector("#p2Button");
// const p1Score=document.querySelector("#p1Score");
// const p2Score=document.querySelector("#p2Score");
const resetButton=document.querySelector("#reset");
const winningScoreToSelect=document.querySelector("#playto");


// let p1scoreUpdated=0;
// let p2scoreUpdated=0;
let winningScore=3;
let isGameOver=false;

function updateScores(player,opponent){
    if(!isGameOver){
            player.score+=1;
            if(player.score===winningScore){
                isGameOver=true;
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
                player.button.disabled=true;
                opponent.button.disabled=true;
            }
            player.display.textContent=player.score;
        }
}


p1.button.addEventListener('click',function(){
    updateScores(p1,p2);
})

p2.button.addEventListener('click',function(){
    updateScores(p2,p1);
})


winningScoreToSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})

function reset(){
    isGameOver=false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click',reset);