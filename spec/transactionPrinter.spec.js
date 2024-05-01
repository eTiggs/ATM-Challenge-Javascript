import TransactionPrinter from "../src/transactionPrinter.js";

describe("Statement 4 Tests:", () => {

    let testPrinter;
    let mockAccount;
    let consoleSpy;

    beforeEach(() => {
        testPrinter = new TransactionPrinter();

        mockAccount = jasmine.createSpyObj('Account', ['getTransactions']);
        mockAccount.getTransactions.and.returnValue([
            { type: "Deposit", amount: 2000 },
            { type: "Withdrawal", amount: -500 },
            { type: "Deposit", amount: 1000 },
            { type: "Withdrawal", amount: -250 }
        ]);
    });

    it("Print a users transaction history", () => {
        // Arrange
        consoleSpy = spyOn(console, 'log').and.callThrough();

        // Act
        testPrinter.printTransaction(mockAccount);

        // Assert
        expect(consoleSpy).toHaveBeenCalled();
    });
});