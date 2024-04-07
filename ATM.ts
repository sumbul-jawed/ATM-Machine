import inquirer from "inquirer";

import chalk from "chalk"
 
let  myBalance = 40000;
let myPin =  55214;

// print welcome message
console.log(chalk.red("\n \tWELCOME TO CODE WITH SUMBUL - ATM MACHINE\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code!!!"),
    }
]);
if (pinAnswer.pin === myPin){
    console.log(chalk.green("\n \tcorrect pin code, Login successfully\n!!"));

    let operationAns = await inquirer.prompt([
{
      name: "option",
      type: "list",
      message: "Please select an option!",
      choices: ["Withdraw Amount","Check Balance"]
       }
    ]);
  
     if (operationAns.option === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
          {
             name: "withdrawMethod",
             type: "list",
             message: "Select a withdrawal method",
             choices: ["Fast Cash", "Enter Amount"]
          }
        ])
        if (withdrawAns.withdrawMethod === "Fast Cash"){
            let fastcashAns = await inquirer.prompt([
              {
                name: "Fastcash",
                type: "list",
                message: "Select Amount",
                choices: ["5000", "2000", "500", "10000"]
              }
            ])
            if(fastcashAns.Fastcash > myBalance){
                console.log(chalk.redBright( chalk.redBright("You have Insuffient Balance!")));
            }
            else{
               myBalance -= fastcashAns.Fastcash;
               console.log(`${fastcashAns.Fastcash} withdraw successfully!`);
               console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
          else if(withdrawAns.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
          {
             name: "Amount",
             type: "number",
             message: "Enter the amount to withdraw",
          }
       ])
       if(amountAns.Amount > myBalance){
        console.log("You have Insufficient Balance")
  
       }
       else{
            myBalance -= amountAns.Amount;
            console.log(`${amountAns.Amount} withdraw successfully!`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
       }
    } 
    
  }
else if (operationAns.option === "Check Balance"){
       console.log(`Your Account Balance is: ${myBalance}`)
}
    
    }
else{
     console.log(chalk.redBright("Pin code is Incorrect! Try Again"))
}
