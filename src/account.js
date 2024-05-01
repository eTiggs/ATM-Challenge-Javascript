export default class Account {
    #balance = 0;
    #transactions = [];

    constructor(initialBalance) {
        if (initialBalance < 0) {
            return "Initial balance cannot be negative";
        }
        this.#balance = initialBalance;
    }

    depositMoney(amountDeposited, date) {
        if (amountDeposited < 0) {
            return "Amount deposited cannot be negative";
        }
        this.#balance += amountDeposited;
        this.#transactions.push({date: date, type: "Deposit", amount: amountDeposited, balance: this.#balance});
    }

    getBalance() {
        return this.#balance;
    }

    withdrawMoney(amountWithdrawn, date) {
        if (this.#balance < amountWithdrawn) {
            return "Amount withdrawn cannot be more than the balance";
        }
        if (amountWithdrawn < 0) {
            return "Amount withdrawn cannot be negative";
        }
        this.#balance -= amountWithdrawn;
        this.#transactions.push({date: date, type: "Withdrawal", amount: -amountWithdrawn, balance: this.#balance});
    }

    getTransactions() {
        return this.#transactions;
    }
}