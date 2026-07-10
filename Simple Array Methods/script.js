'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Below Is Where We Will Be Learning About Working With Arrays,
// Above Is The Code For The Project,

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Remember That Methods Are Simply Functions That Can Be Called On Objects,
// So If We Have Array Methods, That Means That Arrays Themselves Are Objects,
// Meaning These Array Methods Are Simply Functions That Can Be Attached To Arrays,
// So, Lettuce Begin🥬!
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE Method:
console.log(arr.slice(2)); // Returns A New Array From The Original Array, Starting From Index 2, To The End Of The Array,
console.log(arr.slice(1, 3)); // Returns A New Array From The Original Array, Starting From Index 1, Up To Index 3 (Not Included)
console.log(arr.slice(-2)); // Returns A New Array From The Original Array, Starting From The Second Last Index, To The End Of The Array,
console.log(arr.slice(-1)); // Returns A New Array From The Original Array, Starting From The Last Index, To The End Of The Array,
console.log(arr.slice(1, -2)); // Returns A New Array From The Original Array, Starting From Index 1, Up To The Second Last Index (Not Included)
console.log(arr.slice()); // Returns A Shallow Copy Of The Original Array,
console.log([...arr]); // Returns A Shallow Copy Of The Original Array,

// SPLICE Method:
// console.log(arr.splice(2)); // Returns A New Array From The Original Array, Starting From Index 2, To The End Of The Array, And Mutates The Original Array,
console.log(arr.splice(-1)); // Returns A New Array From The Original Array, Starting From The Last Index, To The End Of The Array, And Mutates The Original Array,
console.log(arr.splice(1, 2)); // Returns A New Array From The Original Array, Starting From Index 1, Up To Index 3 (Not Included), And Mutates The Original Array,
console.log(arr); // Returns The Mutated Original Array,

// REVERSE Method:
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // Original Array Is Mutated,

// CONCAT Method:
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Using Spread Operator,

// JOIN Method:
console.log(letters.join(' - ')); // Joins All Elements Of An Array Into A String, With A Specified Separator,
console.log(letters.join()); // Joins All Elements Of An Array Into A String, With Commas By Default,

// FOR EACH Method:
arr.splice(2);
arr.forEach(function(element, index) {
  console.log(element, index);
});
// For More Information About All Of These Methods, Visit MDN Docs, Ask AIs, Watch Vids, ETC,