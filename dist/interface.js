"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quell',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = tmpDeveloper;
