#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,
    PKR: 277,
    INR: 75.12,
    EUR: 0.88,
    JPY: 112.11,
    GBP: 0.76,
    CHF: 0.93, 
    CAD: 1.27,
    AUD: 1.34,
}
let converter = await inquirer.prompt([{
    name: "from",
    type: "list",
    message: " Enter Your Source Currency Code ",
    choices: ["USD","PKR","INR","EUR","JPY","GBP","CHF","CAD", "AUD"],
},
{
    name: "to",
    type: "list", 
    message: " Enter Your Targeted Currency Code",
    choices: ["USD","PKR","INR","EUR","JPY","GBP","CHF","CAD", "AUD", ],
},
{
    name: "amount",
    type: "number",
    message: " Enter Your amount", 
}
])

let fromAmount = currency [converter.from]
let toAmount = currency[converter.to]
let amount = converter.amount

let baseAmount = amount/ fromAmount
let convertedAmount = baseAmount * toAmount

console.log(`\n Your ${converter.amount} ${converter.from} to ${converter.to} amount is ${convertedAmount} ${converter.to} \n`)


