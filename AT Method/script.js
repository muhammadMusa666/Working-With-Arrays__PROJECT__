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
// Today We Will Be Learning About The AT Array Method,
// So, Lettuce Begin🥬!
const arr = [25, 11, 65];
console.log(arr[0]); // 25
console.log(arr.at(0)); // 25
// Now We Can Replace The Bracket Notation With The At Method,
// Which Is More Modern Looking, If We Prefer To Use Array Methods Like This,
// This May Not Look That Useful, So Whats The Deal?,
// Well, There Is One Particularity Of The At Method,
// Which Makes It Quite Useful To Use, Instead Of The Bracket Notation,
// So Lets Say We Want To Get The Last Element Of An Array, Not Knowing The Length Of The Array,
console.log(arr[arr.length - 1]); // 65
// Another Solution Is To Use The slice Method That We Learnt Before,
console.log(arr.slice(-1)[0]); // 65
// These Are The Traditional Ways Of The Getting The Last Element,
// But With The at Method, We Can Simply Do This,
console.log(arr.at(-1)); // 65
// Now The Only Question Is, Should You Keep Using The Bracket Notation,
// Or This at Method, Well, As Always, It Depends On The Situation,
// And How You Want To Develop Your Coding Style,
// Basically, If You Want To Start Counting From The End Of An Array,
// Then You Should Probably Use The at Method,
// We Will Also Learn About Something Called "Method Chaining" Later In This Section,
// And The at Method Is Perfect For That, Its Basically Combining Multiple Methods,
// At The Same Time, But On The Other Hand,
// If You Just Want To Quickly Get A Value From An Array, Like The First Element,
// Then Of Course You Can Keep Using The Brackets Notation,
// Just So You Know, The at Method Is Not Only For Arrays, It Also Works On Strings,
console.log('Stephenson'.at(0));
console.log('Stephenson'.at(-1));
// Thats All For Today, It Was Really Short, I Mean It Was Just One Method,
// I Didnt Expect It To Be Long, But I Still Hope You Learned Something New,
// And Use It Somehow Somewhere In Your Coding Journey,
// But Anyways, Keep Analyzing, Learning, Practicing And Researching,
// And Happy Coding!
// 😄💻🩵💙


