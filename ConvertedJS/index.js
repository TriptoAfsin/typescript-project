"use strict";
let var1;
let var2;
let var3;
let randomVar; // any: can be of any type
var1 = 'Hello';
var2 = false;
var3 = 6.5;
console.log(`Hello from ts\nA String: ${var1}\nA Bool: ${var2}\nA Number: ${var3}`);
let myFunc = (num) => {
    return num * num;
};
console.log(myFunc(5));
//Playlist: https://www.youtube.com/watch?v=__92ek8Xh4o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=5
//object
let anotherObj;
anotherObj = {
    name: "Tripto",
    age: 22,
    isAdult: true
};
//arrays
let myArr = [];
myArr = ['Hello', 'Hey', 5];
console.log(myArr);
const idViewer = (id) => {
    return (console.log(`Your id : ${id}`));
};
idViewer(201817020);
const userViewer = (user) => {
    return (console.log(`Your name : ${user.name}\nYour age : ${user.age}\nGender : ${user.gender}\tAdult: ${user.isAdult}`));
};
userViewer({ name: "Tripto", age: 22, gender: "Male", isAdult: true });
