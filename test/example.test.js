// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('If answer begins with a y the test returns true', (expect) => {

    const expected = true;

    const actual = countsAsAYes('yikes');

    expect.equal(actual, expected);
});

test('If answer does not begin with a y the test returns false', (expect) => {

    const expected = false;

    const actual = countsAsAYes('nice');

    expect.equal(actual, expected);
});