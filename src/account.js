export default class Account {
    // initializes the balance and transactions array
    #balance = 0;
    #transactions = [];
    #isOverdraftEnabled = false;

    // Constructor that sets the initial balance of the account
    constructor(initialBalance) {
        if (initialBalance < 0) {
            return "Initial balance cannot be negative";
        }
        this.#balance = initialBalance;
    }

    // Adds a formatted deposit transaction object to the transactions array
    depositMoney(amountDeposited, date) {
        if (amountDeposited < 0) {
            return "Amount deposited cannot be negative";
        }
        this.#balance += amountDeposited;
        this.#transactions.push({date: date, type: "Deposit", amount: amountDeposited, balance: this.#balance});
    }

    // Returns the balance of the account
    getBalance() {
        return this.#balance;
    }

    // Adds a formatted withdrawal transaction object to the transactions array
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

    // Returns the transactions array
    getTransactions() {
        return this.#transactions;
    }

    // Enables Overdraft Facility
    enableOverdraft() {
        this.#isOverdraftEnabled = true;
    }

    isOverdraftEnabled() {
        return this.#isOverdraftEnabled;
    }

    disableOverdraft() {
        this.#isOverdraftEnabled = false;
    }
}