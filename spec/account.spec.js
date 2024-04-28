import account from "../src/account.js";

describe("Statement 1 Tests:", () => {

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
});