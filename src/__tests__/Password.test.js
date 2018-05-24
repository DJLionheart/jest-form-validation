let fns = require('../utils/functions');

test('empty string fails username validation', () => {
    // arrange / act
    let result = fns.validateUsername('');

    // should return a falsy value
    expect(result).toBeFalsy();
})

test('string with space fails username validation', () => {
    let result = fns.validateUsername('Paul Man');

    expect(result).toBeFalsy();
})

test('Less than 6 characters fails username validation', () => {
    let result = fns.validateUsername('paul');

    expect(result).toBeFalsy();
})

test('paul_peterson passes username validation', () => {
    let result = fns.validateUsername('paul_peterson');

    expect(result).toBeTruthy();
})