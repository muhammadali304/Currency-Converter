#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,  // Base Currency
    PKR: 278,
    INR: 83.28,
    EUR: 0.92,
    SAR: 3.75
}

let userAnswer = await inquirer.prompt(
[
    {
        name: "fromAmount",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "PKR","INR", "EUR", "SAR"]
    }, 

    {
        name: "toAmount",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "PKR","INR", "EUR", "SAR"]
    },

    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]
)
let fromAmount = currency[userAnswer.fromAmount]
let toAmount = currency[userAnswer.toAmount]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)