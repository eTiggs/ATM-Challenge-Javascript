import account from "../src/account.js";

describe("Statement 1 Tests:", () => {

    let testAccount;
    let expected;
    let actual;

    beforeEach(() => {
        testAccount = new account(0);
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