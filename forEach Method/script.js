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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Today We Will Be Looping Over An Array, But Not By The for-loop,
// We've Done That Before, This Time, We'll Be Using The forEach() Method,
// Now I Did Include Like 3-4 Lines Of forEach Method Code In The First Subrepo,
// Of This Section, But In This Subrepo We'll Dive Deeper,
// Since Its Fundamentally Different, We'll Also Be Working With The Bank Account Data From Now On,
// Because Of That, I'll Be Commenting Out The movements Array Above,
// So, Lettuce Begin🥬!

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The Positive Values Are Deposits, And The Negative Values Are Withdrawals, 
// We'll Start With A for-of Loop Just So We Have Something To Compare,
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You Withdrew ${Math.abs(movement)}`);
  }
}

// Now Let's Do The Same Thing With The forEach() Method,
console.log('--- FOREACH ---');
movements.forEach(function (movement, index, array) { // <-- In The Real World, We Use Smaller Words For The Parameters, And I Recommend You Do The Same, But For Now Im Keeping This As Is,
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You Deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You Withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function(3000)
// 4: function(650)
// 5: function(130)
// 6: function(70)
// 7: function(1300)

// The forEach() Method Takes A Callback Function As An Argument,
// And That Callback Function Will Be Called For Each Element In The Array,
// The Callback Function Can Take Up To Three Arguments, The Current Element, The Current Index, And The Entire Array,
// This Is Basically How You Use The forEach() Method,
// But Now, When Should You Use The forEach() Method, And The for-of Loop,
// Well There Is One Fundamental Difference Between Them,
// Which Is, You Cannot Break Out Of A forEach() Loop, Unlike A for-of Loop,
// So, The Continue And Break Statements Do Not Work In A forEach() Loop,
// It Will Always Loop Over The Entire Array, And There Isnt Anything We Can Do,
// Meaning, If You Want To Break Out Of A Loop, You Should Use The for-of Loop,
// Aside From That, It Mostly Comes Down To Personal Preference, Even Though Its A Bit Complex,
// But Anyways, Keep Learning, Analyzing, Researching, And Practicing,
// And Happy Coding😄💻🩵💙!