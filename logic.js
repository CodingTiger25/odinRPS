 let humanScore = 0;
 let computerScore = 0;
 

 let btn = document.querySelectorAll('button');
 let cpuSelect = getComputerChoice();

 btn.forEach((button) => {
    button.addEventListener("click", () =>{
        //console.log(button.id)
        playRound(button.id, cpuSelect)

    });
 });
 
 function  getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3);
    let decision = ""
    if(choice == 0)
    {
        decision = "rock"
    }
    else if( choice == 1)
    {
        decision = "paper"
    }

    else{
        decision = "scissors"
    }

    return decision
}



/*function getHumanChoice()
{
    //let decision = prompt("Rock, Paper, or Scissors? ")

    return decision.toLowerCase();
}*/



function playRound(humanChoice, computerChoice) {
    
        if(humanChoice === "rock" && computerChoice === "paper")
        {
             computerChoice += 1;
             console.log("You lose! Paper beats rock!")
        }

        else if( humanChoice === "rock" && computerChoice === "scissors")
        {
            humanChoice += 1;
            console.log("You win! Rock beats paper!")

        }
        else if(humanChoice === "rock" && computerChoice === "rock")
        {
            console.log("Both rock TIE!!!")
        }

        else if( humanChoice === "paper" && computerChoice === "rock")
        {
            humanChoice += 1;
            console.log("You win! Paper beats rock!")
        }

        else if(humanChoice === "paper" && computerChoice === "paper")
        {
            console.log("Tie!! Paper V Paper")
        }

        else if( humanChoice === "paper" && computerChoice === "scissors")
        {
            computerChoice += 1;
            console.log("You lose!SCisscor beats paper!")
        }
      
        else if(humanChoice === "scissors" && computerChoice === "rock")
        {
            computerChoice += 1;
            console.log("You lose! Rock beats scissors!")
        }

        else if(humanChoice === "scissors" && computerChoice === "paper")
        {
            humanChoice += 1;
            console.log("You win! Scissor beats paper!")
        }
        else if( humanChoice === "scissors" && computerChoice === "scissors")
        {
            console.log("Tie Scissors V scissors")
        }           
}

//const humanSelect = getHumanChoice();
    
//playRound(humanSelect, cpuSelect);