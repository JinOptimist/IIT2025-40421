// var ageOld = 1;

let ageGood = 123;
ageGood = 15;

const minAge = 16;
// minAge = 123; // error

const name = 'test';
const lastName = "Smile";

const age = 15; // number
const pervent = 0.5; // number

const isAdult = true; // boolean
const condition1 = !isAdult; //false
const condition2 = condition1 && isAdult; // false
const condition3 = condition1 || condition2; //false

const ages = []; // []
ages.push(123); // [123]
ages.push(1); // [123, 1]

const weights = [1, 5, 60.7];

weights.push(17); // [1, 5, 60.7, 17]

const user = {};
console.log(user);
user.age = 123;
user.name = 'Ira';

const user2 = {
    name: 'Lera',
    age: 60
};


console.log('1')

function SayHi() {
    console.log('2.1')
    console.log('2.2')
}

console.log('3')

SayHi();

function SayHiToUser(name) {
    const text = 'Hi ' + name;
    console.log(text);
}

SayHiToUser('Ivan');

SayHiToUser('Lera');

SayHiToUser('Liza');

const AlsoFunction = function (name) {

}

AlsoFunction();

const StillFunction = (name) => {

}

StillFunction();

let magic; // undefined

if (1 > 50) {
    console.log('+');
} else {
    console.log('-');
}

if (user) {
    console.log(user.name);
}

function sum(a, b) {
    const text1 = `${a} + ${b} = ${a + b}`;
    const text2 = a + ' + ' + b + ' = ' + (a + b);
    console.log(text1);
    return a + b;
}

user.ISayHi = StillFunction;
user.ISayHi();
user.cal = sum;
user.number = sum(1, 2);

console.log(user);

// for (/* AAA */ ; /* BBB */; /* CCC */) {
/* DDD */
// }
// AAA BBB DDD CCC BBB DDD CCC BBB

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(' ************** ')
const numbers = [1, 6, 4, 7, 3];
let answer = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    answer = answer + element;
}
console.log(answer);

const numb = [1, 6, 4, 7, 3];
for (let index = 0; index < numb.length; index++) {
    const element = numb[index];
    if (element % 2 == 1) {
        console.log(element);
    }

}
const numbers1 = [1, 6, 4, 7, 3];
let firstnumber1 = numbers1[0];
let lastNumber = numbers1[numbers1.length - 1];
console.log(firstnumber1 + lastNumber);

