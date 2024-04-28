export default class account {
    #balance = 0;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            return "Initial balance cannot be negative";
        }
        this.#balance = initialBalance;
    }

    depositMoney(amountDeposited) {
        if (amountDeposited < 0) {
            return "Amount deposited cannot be negative";
        }
        this.#balance += amountDeposited;
    }

    getBalance() {
        return this.#balance;
    }

    withdrawMoney(amountWithdrawn) {
        if (this.#balance < amountWithdrawn) {
            return "Amount withdrawn cannot be more than the balance";
        }
        if (amountWithdrawn < 0) {
            return "Amount withdrawn cannot be negative";
        }
        this.#balance -= amountWithdrawn;
    }
}