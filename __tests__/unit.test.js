// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test for valid phone numbers
//True
test('test for valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber("(123)456-789022")).toBe(true);
});
test('test for valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber("(273)456-29022")).toBe(true);
});
//False
test('test for valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber("(123)456")).toBe(false);
});
test('test for valid phone number', () => {
    // TODO
    expect(functions.isPhoneNumber("(123)")).toBe(false);
});

// test for valid email
//True
test('test for valid email', () => {
    // TODO
    expect(functions.isEmail("mijs@ucsd.edu")).toBe(true);
});
test('test for valid email', () => {
    // TODO
    expect(functions.isEmail("mxsjicds@gmail.com")).toBe(true);
});
//False
test('test for valid email', () => {
    // TODO
    expect(functions.isEmail("m@edu")).toBe(false);
});
test('test for valid email', () => {
    // TODO
    expect(functions.isEmail("mxsjjigmail.com")).toBe(false);
});

// test for strong pwd
//True
test('test for strong password', () => {
    // TODO
    expect(functions.isStrongPassword("JXISMFsjixsmdk")).toBe(true);
});
test('test for strong password', () => {
    // TODO
    expect(functions.isStrongPassword("xsijcidjJIj123")).toBe(true);
});
//False
test('test for strong password', () => {
    // TODO
    expect(functions.isStrongPassword("123")).toBe(false);
});
test('test for strong password', () => {
    // TODO
    expect(functions.isStrongPassword("1234ajxijsicmdkcmdknncjsdjncd")).toBe(false);
});

// test for date
//True
test('test for date', () => {
    // TODO
    expect(functions.isDate("12/09/2093")).toBe(true);
});
test('test for date', () => {
    // TODO
    expect(functions.isDate("11/02/2023")).toBe(true);
});
//False
test('test for date', () => {
    // TODO
    expect(functions.isDate("12092093")).toBe(false);
});
test('test for date', () => {
    // TODO
    expect(functions.isDate("12-09-2093")).toBe(false);
});

// test for valid color
//True
test('test for valid color', () => {
    // TODO
    expect(functions.isHexColor("FF5733")).toBe(true);
});
test('test for valid color', () => {
    // TODO
    expect(functions.isHexColor("33FF83")).toBe(true);
});
//False
test('test for valid color', () => {
    // TODO
    expect(functions.isHexColor("F3")).toBe(false);
});
test('test for valid color', () => {
    // TODO
    expect(functions.isHexColor("QQ1")).toBe(false);
});