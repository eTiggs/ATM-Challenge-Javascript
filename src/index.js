import Account from './account.js';
import TransactionPrinter from './transactionPrinter.js';
import chalk from 'chalk';

//initializing and creating objects
let testAccount;
let testAccount2;
let testPrinter = new TransactionPrinter();

// Initial bank spec demo
// First announcing what is going to happen to the account
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

// Creating a new account and adding said transactions
testAccount = new Account();
testAccount.depositMoney(1000, "10/01/2012");
testAccount.depositMoney(2000, "13/01/2012");
testAccount.withdrawMoney(500, "14/01/2012");

testPrinter.printTransaction(testAccount);

console.log("");
console.log("");

// Second demo
// First announcing what is going to happen to the account
console.log(chalk.bold.cyan("Given a client is " + chalk.bold.underline.green("accepted") + " for an " + chalk.bold.underline.red("overdraft") + " of " + chalk.bold.underline.red("1000")));
console.log(chalk.bold.cyan("And a client makes a " + chalk.bold.underline.green("deposit of 1000") + " on 10-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.red("withdrawal of 800") + " on 14-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.green("deposit of 1000") + " on 13-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.red("withdrawal of 600") + " on 14-01-2012"));
console.log(chalk.bold.cyan("And a " + chalk.bold.underline.red("withdrawal of 999") + " on 18-01-2012"));
console.log(chalk.bold.cyan("When she prints her bank statement"));
console.log(chalk.bold.cyan("Then she would see"));

// Creating a new account and adding said transactions INCLUDING overdraft
testAccount2 = new Account();
testAccount2.setOverdraft(1000);

testAccount2.depositMoney(1000, "10/01/2012");
testAccount2.withdrawMoney(800, "14/01/2012");
testAccount2.depositMoney(1000, "13/01/2012");
testAccount2.withdrawMoney(600, "14/01/2012");
testAccount2.withdrawMoney(999, "14/01/2012");

testPrinter.printTransaction(testAccount2);