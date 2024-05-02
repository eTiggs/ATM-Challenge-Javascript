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
           sorts the transactions based on the type of transaction specified in each transaction,
           uses .toFixed(2) to round each transaction to 2 decimal places,
           uses .padEnd() to pad the credit and debit columns so they are of equal size,
           then prints the date, credit, debit and balance of each transaction
           */
        console.log('date       || credit  || debit  || balance');
        transactions.forEach(transaction => {
            const credit = transaction.type === "Deposit" ? `${transaction.amount.toFixed(2)} ` : '';
            const debit = transaction.type === "Withdrawal" ? `${(-transaction.amount).toFixed(2)} ` : '';
            const paddedCredit = credit.padEnd(8, ' ');
            const paddedDebit = debit.padEnd(7, ' ');
            console.log(`${transaction.date} || ${paddedCredit}|| ${paddedDebit}|| ${transaction.balance.toFixed(2)}`);
        });
    }
}
