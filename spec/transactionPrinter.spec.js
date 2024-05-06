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



//!  *************** AI GENERATED TESTS ***************
//!  *************** AI GENERATED TESTS ***************
describe("AI Generated Tests", () => {

    let testPrinter;
    let mockAccount;
    let consoleSpy;
    
    beforeEach(() => {
        testPrinter = new TransactionPrinter();

        mockAccount = jasmine.createSpyObj('Account', ['getTransactions']);
        mockAccount.getTransactions.and.returnValue([{
            "date": "25/03/2001",
            "type": "Deposit",
            "amount": 2000,
            "balance": 2000
        }, {
            "date": "20/04/2001",
            "type": "Withdrawal",
            "amount": -500,
            "balance": 1500
        }, {
            "date": "25/08/2001",
            "type": "Deposit",
            "amount": 1000,
            "balance": 2500
        }, {
            "date": "11/09/2001",
            "type": "Withdrawal",
            "amount": -250,
            "balance": 2250
        }]);
    });


    /* 
        The following tests are for the chalk colour of the transactions,
        I have chosen to use AI on these tests as I was unable to think of
        a way to test the chalk colour of the transactions.

        The comments within each test are my understanding of the test
        after reading through what the AI has generated.

        The AI first struggled to create a working test for the chalk colour.
        This is because the AI was trying to find in the output the amount
        it was searching for, and the invisible characters that chalk puts in
        the string to colour it. After a little more prompting to take a different
        approach, the AI was able to create a test that checks if the output
        contains the amount and the if the chalk colouring is used on a string.
    */

    it("Check the deposit of 1000 is chalked in green", () => {
        // Arrange
        consoleSpy = spyOn(console, 'log').and.callThrough();

        // Act
        testPrinter.printTransaction(mockAccount);

        // Assert
        // This just checks if the console.log was called
        expect(consoleSpy).toHaveBeenCalled();
        // This takes all the arguments passed to console.log, it then calls
        // flat() on the array to make it a single array, and then uses join()
        // to morph the array into a single string.
        const calls = consoleSpy.calls.allArgs().flat().join(' ');
        // This checks if the string contains the amount desired and the chalk.green()
        const greenTransaction = calls.includes('1000.00') && calls.includes(chalk.green(''));
        expect(greenTransaction).toBeTruthy();
    });
    
    // This test is the exact same as the prior but to check if the withdrawal is chalked in red
    it("Check the withdrawal of 250 is chalked in red", () => {
        // Arrange
        consoleSpy = spyOn(console, 'log').and.callThrough();

        // Act
        testPrinter.printTransaction(mockAccount);

        // Assert
        expect(consoleSpy).toHaveBeenCalled();
        const calls = consoleSpy.calls.allArgs().flat().join(' ');
        const redTransaction = calls.includes('250.00') && calls.includes(chalk.red(''));
        expect(redTransaction).toBeTruthy();
    });
});