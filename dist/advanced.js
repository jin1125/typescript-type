"use strict";
const tom = {
    name: 'Tom',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return;
}
function describeProfile(nomadWoker) {
    console.log(nomadWoker);
    if ('role' in nomadWoker) {
        console.log(nomadWoker.role);
    }
    if ('follower' in nomadWoker) {
        console.log(nomadWoker.follower);
    }
}
class Dog {
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
