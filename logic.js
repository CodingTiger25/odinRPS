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

console.log(getComputerChoice());