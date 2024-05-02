import TransactionPrinter from "../src/transactionPrinter.js";

xdescribe("Statement 4 Tests:", () => {

    let testPrinter;
    let mockAccount;
    let consoleSpy;
    let expected;

    beforeEach(() => {
        testPrinter = new TransactionPrinter();

        mockAccount = jasmine.createSpyObj('Account', ['getTransactions']);
        mockAccount.getTransactions.and.returnValue([{
                "date": "25/03/2001",
                "type": "Deposit",
                "amount": 2000,
                "balance": 2000
            },{
                "date": "20/04/2001",
                "type": "Withdrawal",
                "amount": -500,
                "balance": 1500
            },{
                "date": "25/08/2001",
                "type": "Deposit",
                "amount": 1000,
                "balance": 2500
            },{
                "date": "11/09/2001",
                "type": "Withdrawal",
                "amount": -250,
                "balance": 2250
            }]);
    });

    it("Print a users transaction history", () => {
        // Arrange
        consoleSpy = spyOn(console, 'log').and.callThrough();

        // Act
        testPrinter.printTransaction(mockAccount);

        // Assert
        expect(consoleSpy).toHaveBeenCalled();
    });

    it("Prints the correct information", () => {
        // Arrange
        consoleSpy = spyOn(console, 'log').and.callThrough();

        expected = [
            "date       || credit  || debit  || balance",
            "11/09/2001 ||         || 250.00 || 2250.00",
            "25/08/2001 || 1000.00 ||        || 2500.00",
            "20/04/2001 ||         || 500.00 || 1500.00",
            "25/03/2001 || 2000.00 ||        || 2000.00"
        ];

        // Act
        testPrinter.printTransaction(mockAccount);


        // Assert
        expected.forEach((transaction, index) => {
            let actual = consoleSpy.calls.argsFor(index);

            expect(actual).toEqual([transaction]);
        });
    });
});