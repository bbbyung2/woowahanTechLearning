let y = 10;
const z = 10;

let x = {
    a: 'a'
}

function foo(x) {
    x();
    return function() {

    };
}

const y = foo(function() {

})

const bar = function bar() {

}

const foo = function (x) {

}

const bar = (x) => {

}

const bar = x => x * 2;
console.log(bar(10));

const x = 10;
const y = (x) => x * 2;

console.log(x, y());

function foo() {
    this.name = 10;
}

const y = new foo();

console.log(y);

class bar {
    constructor() {
        this.name = 10;
    }
}

console.log(new bar());

const person = {
    name: '고병화',
    getName() {
        return this.name;
    }
}

console.log(person.getName());
const man = person.getName();

button.addEventListener('click', person.getName.bind(person))

// const person = {
//   name: "고병화",
//   getName() {
//     return this.name;
//   }
// };

// console.log(person.getName());
// const man = person.getName();

// // button.addEventListener("click", person.getName.bind(person));

// function foo(x) {
//   return function bar() {
//     return x;
//   };
// }

// const f = foo(10);

// console.log(f());

// const person = {
//   age: 10
// };

// function makePerson() {
//   let age = 10;
//   return {
//     getAge() {
//       return age;
//     },
//     setAge(x) {
//       age = x > 1 && x < 130 ? x : age;
//     }
//   };
// }

// let p = makePerson();

// console.log(p.getAge());

// setTimeout(function (x) {
//   console.log("hello");
//   setTimeout(function (y) {
//     console.log("Bye");
//   }, 2000);
// }, 1000);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("응답1");
//   }, 1000);
//   // reject();
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("응답2");
//   }, 1000);
//   // reject();
// });

// p1.then(p2)
//   .then(function (r) {
//     console.log(r);
//   })
//   .catch(function () {});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("1");
  try {
    const x = await delay(2000);
  } catch (e) {
    console.log(e);
  }
  console.log("2");
}

main();
