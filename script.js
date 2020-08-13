// let and const
console.log("lET AND CONST");

let food = "pizza"
console.log(food);

let myAge = "secret ;)"
console.log(myAge);

const matchScore = 150
console.log(matchScore);

const averageMarks = 85
console.log(averageMarks);

// block scope
console.log("BLOCK SCOPE");


function reset() {

    let food = null;
    console.log(food);
}
reset();

// Arrow Functions
console.log("ARROW FUNCTIONS");


const addNumbers = function (number1,number2){
    return number1 + number2;
}
console.log(addNumbers(10, 30));

const multiplyNumbers = (number1, number2) => number1 * number2 ;
console.log(multiplyNumbers(16, 2));


const divideNumbers = (number1, number2) => number1/number2 ;
console.log(divideNumbers(50, 2));

let subtractNumbers = (number1, number2) => number1 - number2 ;
console.log(subtractNumbers(6,2));

const greetFriend = friend => console.log(friend);
greetFriend("jenny");

//default parameters
console.log("DEFAULT PARAMETERS");

const countdown = (start = 10) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
}
countdown();

const DaysLeftForMyBirthday = (start = "day 30") => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("day 0 , Its my birthday");
    
}
DaysLeftForMyBirthday();

// Rest & Spread
console.log("REST & SPREAD");

console.log(Math.max(25, 62, 87, 98));
const numbers = [85, 78, 96, 45, 22, 10];
console.log(Math.max(...numbers));

function makeArray (name, usn, statement, ...args) {
  return args;
}
console.log(makeArray("shagufa" , 65, "true" , 5, 6, 4, 1));


function makeArray(food, game, hobby, ...args) {
    return args;
}
console.log(makeArray("fries", "soccer", "writing", "champ 07", 15,));


//Destructuring -Array

const games = ["badminton", "soccer", "cricket", "basketball"];
console.log(...games[3]);
console.log(games[0]);
console.log(games[5]); // undefined because we have index number till 4

const myFAVgame = games[0]
const entertainingGame = games[1]

console.log(myFAVgame, entertainingGame);

//Destructuring - Objects

const birthday = {month: "august", date: 26}
const Month = birthday.month;
const date = birthday.date;

console.log(Month,date);


//Template Literals

const FriendName = 'jenny';
const greeting = "Happy Birthday " + FriendName + ", God Bless.";
console.log(greeting);

const subject = 'mathematics. ';
const message = "you got highest in "
const congratulate = "Congratulations," + message + subject + "KEEP IT UP!"
console.log(congratulate);

const friend = 'shifa';
const greet = `Happy birthday ${friend}`;
console.log(greet);


//Array helper methods in ES6
 
// forEach
// forEach accept a function iterator that loop through each item in an array

const array = [1,2,3,4]
array.forEach(item => console.log(item))

const items = (item) => { console.log(item) }
array.forEach(items)

const mains = ["food" , "drink" , "medicines" , "gym"] 
mains.forEach(item => console.log(item));


const stuff = (stuff) => {console.log(stuff) }
mains.forEach(stuff)

// Map
// Map will loop through each item of array, same like forEach but Map returns the value of the array.

const arr = [{name:"James",age:18}, {name:"Alice",age:20}]
const person_names = arr.map(person => person.name);
const person_age = arr.map(person => person.age);

console.log(person_age , person_names);

const detail = [{name:"jonas" , year:2053}, {name:"scarlett" , year:1988}, {name:"drake" , year:2019}]
const candidate_name = detail.map(candidate => candidate.name);
const candidate_year = detail.map(candidate => candidate.year);

console.log(candidate_name);

//using for loop
const arrayOfObjects = [{name:"gigi",age:5}, {name:"gaga",age:6}]
let temp = []
for(let i = 0; i < arrayOfObjects.length; i++){
    temp.push(arrayOfObjects[i].age)
}
console.log(temp)


// find
// find will return the record if a particular element is found in the array.


let x = [
    {name:"jay",age:15},
    {name:"ray",age:30}
 ]
 x.find(obj => obj.name === "jay")

let sub = [{topic:"english", code:1 , marks:100} , {topic:"maths", code:2 , marks:100}]
sub.find(obj => obj.topic === "maths")

