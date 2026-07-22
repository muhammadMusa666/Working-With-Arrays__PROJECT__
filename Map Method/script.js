'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'John Doe',
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements); // <-- Using Movement From account1,

console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Below Is Where We Will Be Learning About Working With Arrays,
// Above Is The Code For The Project,

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Today We Will Be Learning About The Map Method,
// Search On Google What Its Definition Is And Example,
// Before You Dive In Here, Also, In The Future We Will Also Learn About,
// The Filter And Reduce Methods, Which You Should Also Research On,
// Before Doing Anything Else, And Differentiate Between Them, The forEach Method Too,
// So, Lettuce Begin🥬!

// Map Method Is Yet Another Way We Can Use To Loop Over Arrays,
// But Unlike forEach, Map Gives Us A Brand New Array,
const EURToUSD = 1.1;
// const movementsInUSD = movements.map(function(mov) {
//   return mov * EURToUSD;
//   // return 57;
// });

// Turning The Above Callback Function Into An Arrow Function Below,

const movementsUSD = movements.map(mov => 
   mov * EURToUSD
);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * EURToUSD);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, /*arr*/) => 
  // if (mov > 0) {
    //   return `Movement ${i + 1}: You Deposited ${mov}`;
    // } else {
      //   return `Movement ${i + 1}: You Withdrew ${Math.abs(mov)}`;
      // }
      `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// Thats All For Today, Hope You Learnt Something,
// Keep On Analyzing, Researching, Practicing And Learning,
// And Happy Coding😄💻🩵💙!



