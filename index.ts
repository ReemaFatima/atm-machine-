import inquirer from "inquirer";

//initialize user balance and pin code
let myBalance = 5000;
let myPin = 2982;

//print welcome message
console.log("welcome to code with fatima - ATM Machine");

let pinAnswer = await inquirer.prompt([
{
    name: "pin",
    type: "number",
    message: "Enter your pin code",
}
])
if (pinAnswer.pin === myPin){
    console.log("Pin is correct, login successfully!");
    console.log("current account balance is $ {my balance}")

    let operations = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices:["withdrawl amount", "check balance"]
        }
    ])

    if(operations.operation === "withdrawl amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount to withdraw"
}
])
if (amountAns.amount > myBalance){
    console.log("insufficient balance");
}
else{
    myBalance = amountAns.amount;
    console.log("${amountAns.amount} withdraw successfully");
    console.log("your remaining  balance is: ${myBalance}");

}

    }
else if (operationAns.operation === "check balance"){
    console.log("your account balance is: ${myBalance}");
}

}
else{
    console.log("pin is incorrect, try again!");
}