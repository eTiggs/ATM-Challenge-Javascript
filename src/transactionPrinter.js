import chalk from "chalk";

export default class TransactionPrinter {

    /*
    Prints transaction history of an account
    Takes a parameter of an account object
    */

    printTransaction(account) {
        // Gets transactions from the account object and reverses the order
        let transactions = account.getTransactions();
        transactions.reverse();

        /* Prints an initial column guide,
           then iterates through the transactions array,
           sorts the transactions using dot notation to determine if the transaction is a deposit or withdrawal,
           uses .toFixed(2) to round each transaction to 2 decimal places,
           uses .padEnd() to pad the credit and debit columns so they are of equal size,
           then prints the date, credit, debit and balance of each transaction

           Chalk is imported and used to colour the output:
              Green for deposits and positive balances
              Red for withdrawals and negative balances
           */
        console.log('date       || credit  || debit  || balance');
        transactions.forEach(transaction => {
            const credit = transaction.type === "Deposit" ? chalk.green(`${transaction.amount.toFixed(2)} `) : '';
            const debit = transaction.type === "Withdrawal" ? chalk.red(`${(-transaction.amount).toFixed(2)} `) : '';
            const paddedCredit = credit.padEnd(8, ' ');
            const paddedDebit = debit.padEnd(7, ' ');
            if (transaction.balance > 0) {
                console.log(`${transaction.date} || ${paddedCredit}|| ${paddedDebit}|| ${chalk.green(transaction.balance.toFixed(2))}`);
            } else {
                console.log(`${transaction.date} || ${paddedCredit}|| ${paddedDebit}|| ${chalk.red(transaction.balance.toFixed(2))}`);
            };
        });
    }
}
