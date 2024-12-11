 let humanScore = 0;
 let computerScore = 0;
 

 const btn = document.querySelectorAll('button');


 btn.forEach((button) => {
    button.addEventListener("click", () =>{
        console.log(button.id)
        

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



function getHumanChoice()
{
    //let decision = prompt("Rock, Paper, or Scissors? ")

    return decision.toLowerCase();
}



/*function playRound(humanChoice, computerChoice) {
    
    switch(humanChoice)
    {
        case humanChoice === "rock" && computerChoice === "paper":
            computerChoice += 1;
            console.log("You lose! Paper beats rock!") 

        case humanChoice === "rock" && computerChoice === "scissors":
            humanChoice += 1;
            console.log("You win! Rock beats paper!")
        case humanChoice === "rock" && computerChoice === "rock":          
             console.log("Both rock TIE!!!")


             case humanChoice === "paper" && computerChoice === "rock":
            humanChoice += 1;
            console.log("You win! Paper beats rock!")

            case humanChoice === "paper" && computerChoice === "paper":
           
            console.log("Tie!! Paper V Paper")

            case humanChoice === "paper" && computerChoice === "scissors":
            computerChoice += 1;
            console.log("You lose!SCisscor beats paper!")

            case humanChoice === "scissors" && computerChoice === "rock":
            computerChoice += 1;
            console.log("You lose! Rock beats scissors!")
            
            case humanChoice === "scissors" && computerChoice === "paper":
            humanChoice += 1;
            console.log("You win! Scissor beats paper!")

            case humanChoice === "scissors" && computerChoice === "scissors":
            
            console.log("Tie Scissors V scissors")
    }

    

}*/

const humanSelect = getHumanChoice();
    const cpuSelect = getComputerChoice();
//playRound(humanSelect, cpuSelect);