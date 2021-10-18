"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`hello! my name is ${this.name}`);
    }
}
const quill = new Person("Quill");
quill.greeting();
const anotherQuill = {
    name: 'anotherQuill',
    greeting() { },
    anotherGreeting: quill.greeting
};
anotherQuill.anotherGreeting();
