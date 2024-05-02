export default class TransactionPrinter {

    printTransaction(account) {
        let transactions = account.getTransactions();
        transactions.reverse();

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
