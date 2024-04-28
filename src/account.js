export default class account {
    balance = 0;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            return "Initial balance cannot be negative";
        }

        this.balance = initialBalance;
    }
}