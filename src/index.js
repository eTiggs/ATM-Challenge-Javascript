import Account from './account.js';
import TransactionPrinter from './transactionPrinter.js';

let testAccount = new Account(0);
let testPrinter = new TransactionPrinter();

testAccount.depositMoney(2000, "25/03/2001");
testAccount.withdrawMoney(500, "20/04/2001");
testAccount.depositMoney(1000, "25/08/2001");
testAccount.withdrawMoney(250, "11/09/2001");


testPrinter.printTransaction(testAccount);