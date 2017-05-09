var assert = require('assert');
var passwordValidation = require('../src/password-validation');

describe('Password validation', () => {

    it('An empty string is not a valid password', function() {
        assert.equal(
            passwordValidation.validate(""),
            false);
    });

    it('A non-empty string is a valid password', () => {
        assert.equal(
            passwordValidation.validate("A"),
            true);
    });

    // Uncomment this test to kill the mutant!
    // it('A string of length greater than 10 is not a valid password', () => {
    //     assert.equal(
    //         passwordValidation.validate("1234567890"),
    //         false);
    // });
});
