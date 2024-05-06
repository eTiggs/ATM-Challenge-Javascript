export default class Account {
    // initializes the balance and transactions array
    #balance = 0;
    #transactions = [];
    #isOverdraftEnabled = false;
    #overdraftLimit = 0;

    // Constructor that sets the initial balance of the account
    constructor(initialBalance = 0) {
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
    // Checks if the amount withdrawn is greater than the balance + overdraft limit
    withdrawMoney(amountWithdrawn, date) {
        if ((this.#balance + this.#overdraftLimit) < amountWithdrawn) {
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

    // Returns the overdraft limit
    isOverdraftEnabled() {
        return this.#isOverdraftEnabled;
    }

    // Disables Overdraft Facility
    disableOverdraft() {
        this.#isOverdraftEnabled = false;
    }

    // Sets the overdraft limit
    setOverdraft(overdraftLimit) {
        this.#overdraftLimit = overdraftLimit;
    }
}