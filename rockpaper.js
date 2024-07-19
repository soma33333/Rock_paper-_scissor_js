const   playertext=document.querySelector("#playertext");
const   computertext=document.querySelector("#computertext");
const   resulttext=document.querySelector("#resulttext");
const   choicebtn=document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

choicebtn.forEach(button=>button.addEventListener("click",()=>{
    player=button.textContent;
    computerturn();
    playertext.textContent=`Player:${player}`;
    computertext.textContent=`Computer: ${computer}`;
    resulttext.textContent=checkwinnner();
}));

function  computerturn(){
    const  random=Math.floor(Math.random()*3)+1;

    switch(random){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
    }

}

function checkwinnner(){
    if(player==computer){
        return "DRAW!";
    }
    else if(computer=="ROCK"){
        return (player=="SCISSORS"?"YOU WIN!":"YOU LOST");
    }
    else if(computer=="PAPER"){
        return (player=="ROCK"?"YOU LOST":"YOU WIN!");
    }
    else if(computer=="SCISSORS"){
        return (player=="PAPER"?"YOU WIN!":"YOU LOST");
    }
}