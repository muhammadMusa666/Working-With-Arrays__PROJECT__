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
// Today We Will Be Doing The First Challenge Of This Section,
// Here Are Your Tasks:

// Julia And Kate Are Doing A Study On Dogs, So Each Of Them Asked 5 Dog Owners,
// About Their Dog's Age, And Stored The Data Into An Array (One Array For Each),
// For Now, They Are Just Interested In Knowing Whether A Dog Is An Adult Or A Puppy,
// A Dog Is An Adult If It Is At Least 3 Years Old, And Puppy If Its Less Than That,

// Create A Function 'checkDogs', Which Accepts 2 Arrays Of Dog's Ages,
// ('dogsJulia' And 'dogsKate'), And Does The Following Things:

// 1: Julia Found Out That The Owners Of The FIRST And LAST TWO Dogs,
// Also Have Cats, Not Dogs, So, Create A Shallow Copy of Julia's Array,
// And Remove, The Cat Ages From That Copied Array(Because Its A Bad Practice To Mutate Function Parameters),
// 2: Create An Array With Both Julia's(Corrected) And Kate's Data,
// 3: For Each Remaining Dog, Log To The Console Whether It's An Adult,
// ("Dog Number 1 Is An Adult, And Is 5 Years Old"), Or A Puppy,
// ("Dog Number 2 Is Still A Puppy"),
// 4: Run The Function For Both Test Data Sets,

// HINT: Use Tools From All Subrepos In This Section So Far,

// TEST DATA 1: Julia's Data [3, 5, 2, 12, 7], Kate's Data [4, 1, 15, 8, 3],
// TEST DATA 2: Julia's Data [9, 16, 6, 8, 3], Kate's Data [10, 5, 6, 1, 4],

// Do The Challenge Below Here Or In A New File, Dont Froget 'use strict'; At The Top Of New Files,
// The Answer To This Challenge Will Be In answer.js, Good Luck😄!