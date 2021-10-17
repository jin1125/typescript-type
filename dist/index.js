"use strict";
let hasValue = true;
let count = 11;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape'];
const fruit = fruits[0];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
coffee.size = CoffeeSize.SHORT;
let anyting = true;
anyting = 'hello';
anyting = ['hello', 33, true];
anyting = {};
anyting.jfkdjfds = 'fjsfjsdl';
let banana = 'banana';
banana = anyting;
let unionType = 10;
unionType = 'hello';
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function sayHello() {
    console.log('Hello!');
}
console.log(sayHello());
let tmp;
let tmpNull;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
