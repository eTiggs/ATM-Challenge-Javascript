import Account from './account.js';
import TransactionPrinter from './transactionPrinter.js';
import chalk from 'chalk';

let testAccount = new Account(0);
let testPrinter = new TransactionPrinter();

console.log(chalk.bold.cyan("Hello! Welcome to your new bank account management software system!"));
console.log(chalk.bold.cyan("Enjoy the Demo!"));
console.log("");
console.log("");
console.log(chalk.bold.cyan("Given a client makes a " + chalk.bold.underline.green("deposit of 1000") + " on 10-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.green("deposit of 2000") + " on 13-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.red("withdrawal of 500") + " on 14-01-2012"));
console.log(chalk.bold.cyan("When she prints her bank statement"));
console.log(chalk.bold.cyan("Then she would see"));
console.log("");
console.log("");
testAccount.depositMoney(1000, "10/01/2012");
testAccount.depositMoney(2000, "13/01/2012");
testAccount.withdrawMoney(500, "14/01/2012");

testPrinter.printTransaction(testAccount);