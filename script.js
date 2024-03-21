let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=function(){
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=function(){
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=function(userWin,userChoice,compChoice){
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
    }

}


const playGame=function(userChoice){
  
  //generate Computer Choice
  const compChoice=genCompChoice();
  

  if(userChoice==compChoice){
      drawGame();
  }else{
    let userWin=true;
    if(userChoice=="rock"){
        userWin = compChoice=="paper" ? false :true;
    }else if(userChoice=="paper"){
        userWin=compChoice=="scissor" ? false:true;

    }else{
        userWin=compChoice=="rock" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }

}
choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})