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
}