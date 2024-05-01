export default class TransactionPrinter {

    printTransaction(account) {
        let transactionHistory = account.getTransactions();
        console.log(transactionHistory);
    }
}
