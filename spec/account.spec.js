import account from "../src/account.js";

xdescribe("Statement 1 Tests:", () => {

    let testAccount;
    let expected;
    let actual;

    beforeEach(() => {
        testAccount = new account();
        expected = undefined;
        actual = undefined;
    });

    it("should instantiate a bank account object", () => {
        // Arrange
        // Act
        testAccount = new account();
        // Assert
        expected = true;
        actual = testAccount instanceof account;

        expect(actual).toBe(expected);
    });

    it("should set a balance to the bank account object", () => {
        // Arrange
        // Act
        testAccount = new account(1000);
        // Assert
        expected = true;
        actual = testAccount.balance === 1000;

        expect(actual).toBe(expected);
    });

    it("should return an error message if the added balance is negative", () => {
        // Arrange
        // Act
        testAccount = new account(-1000);
        // Assert
        expected = true;
        actual = testAccount.balance === 0;

        expect(actual).toBe(expected);
    });
});

xdescribe("Statement 2 Tests:", () => {

    let testAccount;
    let expected;
    let actual;

    beforeEach(() => {
        testAccount = new account(0);
        expected = undefined;
        actual = undefined;
    });

    it("Money can be deposited", () => {
        // Arrange
        spyOn(testAccount, "depositMoney").and.callThrough();
        // Act
        testAccount.depositMoney(1000);

        // Assert
        expect(testAccount.depositMoney).toHaveBeenCalled();
    });

    it("Unable to deposit negative amounts", () => {
        // Arrange
        // Act
        testAccount.depositMoney(-1000);
        // Assert
        expected = 0;
        actual = testAccount.getBalance();

        expect(actual).toBe(expected);
    });

    it("Multiple deposits should add to the balance", () => {
        // Arrange
        // Act
        testAccount.depositMoney(1000);
        testAccount.depositMoney(500);
        testAccount.depositMoney(250);
        testAccount.depositMoney(125);
        testAccount.depositMoney(62.50);
        // Assert
        expected = 1937.50;
        actual = testAccount.getBalance();

        expect(actual).toBe(expected);
    });

    
});

xdescribe("Statement 3 Tests:", () => {

    let testAccount;
    let expected;
    let actual;

    beforeEach(() => {
        testAccount = new account(0);
        expected = undefined;
        actual = undefined;
    });

    it("Money can be withdrawn", () => {
        // Arrange
        spyOn(testAccount, "withdrawMoney").and.callThrough();
        testAccount.depositMoney(2000);

        // Act
        testAccount.withdrawMoney(1000);

        // Assert
        expect(testAccount.withdrawMoney).toHaveBeenCalled();
    });

    it("Cannot withdraw more than balance", () => {
        // Arrange
        testAccount.depositMoney(2000);

        // Act
        testAccount.withdrawMoney(3000);
        expected = 2000;
        actual = testAccount.getBalance();

        // Assert
        expect(actual).toBe(expected);
    });

    it("Able to withdraw multiple amounts", () => {
        // Arrange
        testAccount.depositMoney(8000);

        // Act
        testAccount.withdrawMoney(1000);
        testAccount.withdrawMoney(2000);
        testAccount.withdrawMoney(3000);
        testAccount.withdrawMoney(420.69);
        expected = 1579.31;
        actual = testAccount.getBalance();
        
        // Assert
        expect(actual).toBe(expected);
    });

    it("Cannot withdraw a negative amount", () => {
        // Arrange
        testAccount.depositMoney(2000);

        // Act
        testAccount.withdrawMoney(-1000);
        expected = 2000;
        actual = testAccount.getBalance();

        // Assert
        expect(actual).toBe(expected);
    });
});