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

const subject = "mathematics. ";
const messege = "you got highest in "
const congratulate = "Congratulations," + messege + subject + "KEEP IT UP!"
console.log(congratulate);








