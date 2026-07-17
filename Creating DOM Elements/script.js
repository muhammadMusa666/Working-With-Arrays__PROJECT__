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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Today We Will Be Creating DOM Elements, Yes We're Back At DOM Manipulation,
// And We Will Work On Our Project In This Subrepo,
// We Will Use The forEach Method We Learnt About With DOM Manipulation Aswell,
// So To Guide You, Do As I Tell You So You Know Where To Begin,
// In The CSS File, Find The .app Area, And In It,
// Comment Out The opacity: 0, This Will Show You The Application,
// I Have Already Done So, But Im Just Telling You Incase Your Using Your Own Folder,
// Now Back To Our Script, We Now Want To Basically Display,
// The Movements In The Data Section Above In The Code,
// In The List In The Application, The List Where Deposits And Withdrawals Are Shown,
// And For Each Movement, We Want One Selected Element Show Deposits Or Withdrawals,
// We Will Do So By Using The forEach Method, So Lets Start,
// By The Way, I Will Start The Coding In The App Part Of This File,
// So Above The Two Commented Lines, Just So You Know If Your Using A Different Folder,

// Analyze And Research The Code Ive Written There, Search In MDN,
// Ask AIs, Watch Youtube Videos, Or Anything Else, Because This,
// Contains Alot Of Useful Information You Should Know,
// But Now, We've Completed The First Part Of Our Userinterface, I'll Cya In The Next One!