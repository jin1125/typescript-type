var hasValue = true;
var count = 11;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
var hello;
hello = "hello";
var person = {
  name: {
    first: "Jack",
    last: "Smith",
  },
  age: 21,
};
var fruits = ["Apple", "Banana", "Grape"];
var fruit = fruits[0];
var book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
  CoffeeSize[(CoffeeSize["SHORT"] = 0)] = "SHORT";
  CoffeeSize[(CoffeeSize["TALL"] = 1)] = "TALL";
  CoffeeSize[(CoffeeSize["GRANDE"] = 2)] = "GRANDE";
  CoffeeSize[(CoffeeSize["VENTI"] = 3)] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
};
coffee.size = CoffeeSize.SHORT;
var anyting = true;
anyting = "hello";
anyting = ["hello", 33, true];
anyting = {};
anyting.jfkdjfds = "fjsfjsdl";
var banana = "banana";
banana = anyting;
var unionType = 10;
unionType = "hello";
var unionTypes = [21, "hello"];
var apple = "apple";
var clothSize = "small";
var cloth = {
  color: "white",
  size: "medium",
};
function add(num1, num2) {
  return num1 + num2;
}
add(2, 3);
function sayHello() {
  console.log("Hello!");
}
console.log(sayHello());
var tmp;
var tmpNull = undefined;
var anotherAdd = function (num1, num2) {
  return num1 + num2;
};
var doubleNumber = function (num) {
  return num * 2;
};
function doubleAndHandle(num, cb) {
  var doubleNumber = cb(num * 2);
  console.log(doubleNumber);
}
doubleAndHandle(21, function (doubleNum) {
  return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
  text = unknownInput;
}
function error(message) {
  throw new Error(message);
}
console.log(error("This is an error"));
