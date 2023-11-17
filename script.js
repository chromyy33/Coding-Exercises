"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// /////////////////////////////////////////////////


// // DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     "2019-11-18T21:31:17.178Z",
//     "2019-12-23T07:42:02.383Z",
//     "2020-01-28T09:15:04.904Z",
//     "2020-04-01T10:17:24.185Z",
//     "2020-05-08T14:11:59.604Z",
//     "2020-05-27T17:01:17.194Z",
//     "2020-07-11T23:36:17.929Z",
//     "2020-07-17T10:51:36.790Z",
//   ],
//   currency: "EUR",
//   locale: "pt-PT", // de-DE
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     "2019-11-01T13:15:33.035Z",
//     "2019-11-30T09:48:16.867Z",
//     "2019-12-25T06:04:23.907Z",
//     "2020-01-25T14:18:46.235Z",
//     "2020-02-05T16:33:06.386Z",
//     "2020-04-10T14:43:26.374Z",
//     "2020-06-25T18:49:59.371Z",
//     "2020-07-26T12:01:20.894Z",
//   ],
//   currency: "USD",
//   locale: "en-US",
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// // Functions
// const formatMovements = function (date) {
//   const calcDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); // (s/min/hr/day)
//   const daysPassed = calcDaysPassed(new Date(), date);
//   if (daysPassed === 0) return "Today";
//   if (daysPassed === 1) return "Yesterday";
//   if (daysPassed <= 7) return `${daysPassed} days ago`;

//   return new Intl.DateTimeFormat(currentAccount.locale).format(date);

//   // const day = `${date.getDate()}`.padStart(2, "0");
//   // const month = `${date.getMonth() + 1}`.padStart(2, "0");
//   // const year = date.getFullYear();
//   // return `${day}/${month}/${year}`;
// };

// //start logout timer

// const startLogoutTimer = function () {
//   const tick = function () {
//     const min = String(Math.trunc(timer / 60)).padStart(2, "0");
//     const sec = String(timer % 60).padStart(2, "0");
//     labelTimer.textContent = `${min}:${sec}`;

//     if (timer === 0) {
//       clearInterval(time);
//       labelWelcome.textContent = "Login to get started";
//       containerApp.style.opacity = 0;
//     }
//     timer--;
//   };
//   let timer = 10;

//   tick();
//   const time = setInterval(tick, 1000);
//   return time;
// };
// const displayMovements = function (acc, sort = false) {
//   containerMovements.innerHTML = "";

//   const movs = sort
//     ? acc.movements.slice().sort((a, b) => a - b)
//     : acc.movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const date = new Date(acc.movementsDates[i]); //Movement date
//     const displayDate = formatMovements(date);
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//     <div class="movements__date">${displayDate}</div>
//         <div class="movements__value">${toInternational(mov)}</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = toInternational(acc.balance);
// };

// const toInternational = function (num, acc = currentAccount) {
//   return new Intl.NumberFormat(currentAccount.locale, {
//     style: "currency",
//     currency: currentAccount.currency,
//   }).format(num);
// };
// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = toInternational(incomes);
//   const out = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = toInternational(-out);

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((deposit) => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = toInternational(interest);
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount, time;

// //day/moth/year-format intended

// btnLogin.addEventListener("click", function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     containerApp.style.opacity = 100;
//     const now = new Date();
//     const options = {
//       hour: "numeric",
//       minute: "numeric",
//       day: "numeric",
//       month: "numeric",
//       year: "numeric",
//     };

//     labelDate.textContent = new Intl.DateTimeFormat(
//       currentAccount.locale,
//       options
//     ).format(now);
//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = "";
//     inputLoginPin.blur();
//     if (time) {
//       clearInterval(time);
//     }
//     time = startLogoutTimer();
//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = "";

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     //Add transfer date
//     currentAccount.movementsDates.push(new Date().toISOString());
//     receiverAcc.movementsDates.push(new Date().toISOString());

//     // Update UI
//     updateUI(currentAccount);

//     //Reset timer

//     clearInterval(time);
//     time = startLogoutTimer();
//   }
// });

// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov >= amount * 0.1)
//   ) {
//     // Add movement
//     setTimeout(function () {
//       currentAccount.movements.push(amount);
//       currentAccount.movementsDates.push(new Date().toISOString());

//       // Update UI
//       updateUI(currentAccount);
//     }, 2500);
//   } else {
//     alert("Loan not approved");
//   }
//   inputLoanAmount.value = "";
//   //Reset timer

//   clearInterval(time);
//   time = startLogoutTimer();
// });

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = "";
// });

// let sorted = false;
// btnSort.addEventListener("click", function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount, !sorted);
//   sorted = !sorted;
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Create a date

//Dates
//Timer

// const ingredients = ["spinach", "olives"];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`The ingredients are ${ing1},${ing2}`),
//   2500,
//   ...[ingredients]
// );
// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
// let now = 55;

// setInterval(function () {
//   let now = new Date();
//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const sec = now.getSeconds();

//   console.log(`The time right now is ${hour}:${min}:${sec}`);
// }, 1000);
//

//Problem 1

//Learnings .toFixed works on numbers
// function getTotalPrice(groceries) {
//   let price;
//   return groceries.reduce((acc, item) => {
//     acc = acc + item.price; //+ makes the result a string therefore we need to convert it
//     acc = Number(acc.toFixed(2));
//     return acc;
//   }, 0);
// }
//TESTS

// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Eggs", quantity: 12, price: 0.1 },
//     { product: "Bread", quantity: 2, price: 1.6 },
//     { product: "Cheese", quantity: 1, price: 4.5 },
//   ])
// );
// console.log(
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.1 },
//     { product: "Lollipop", quantity: 1, price: 0.2 },
//   ])
// );

//////////////////////////////////////

//Problem 2

// function getFrequencies(arr) {
//   let freq = {};
//   for (const item of arr) {
//     if (freq[item]) {
//       freq[item]++;
//     } else {
//       freq[item] = 1;
//     }
//   }

//   return freq;
// }

// console.log(getFrequencies([true, false, true, false, false]));

// function getFrequencies(arr) {
//   const freq = {};

//   for (const item of arr) {
//     if (freq[item]) {
//       freq[item]++;
//     } else {
//       freq[item] = 1;
//     }
//   }

//   return freq;
// }
// let i = 0;
// let results = "This, is, an,array";
// console.log(results.split(","));
// const text = setInterval((str) => {
//   let strSplit = results.split(",");
//   if (i > strSplit.length - 1) {
//     clearTimeout(text);
//   } else {
//     console.log(strSplit[i]);
//     i++;
//   }
// }, 1000);

// let alphabets = "abcdefghijklmnopqrstuvwxyz";
// alphabets = alphabets.split("");
// function toBoolArray(str) {
//   let arr = str.split("");
//   arr = arr.map((char, i, arr) => {
//     let a = alphabets.indexOf(char) + 1;
//     console.log(a);
//     return a % 2 !== 0
//   });
//   return arr;
// }

// console.log(toBoolArray("randomize"));

// function getVodkaBottle(obj, num) {
//   let entries = Object.entries(obj);

//   entries = entries
//     .filter((entry) => entry[0].includes("Rammstein") && entry[1] === num)
//     .map((entry) => entry[0]);

//   return entries[0];
// }

// function getVodkaBottle(obj, num) {
//   let entries = Object.entries(obj);

//   entries = entries
//     .filter((entry) => entry[0].includes("Rammstein") && entry[1] === num)
//     .map((entry) => entry[0]);

//   return entries.length > 0 ? entries[0] : "Rammstein bottle not found";
// }

// console.log(
//   getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)
// );

// function mostExpensive(obj) {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);

//   const max = Math.max(...values);
//   const index = values.indexOf(max);
//   return keys[index];
// }
// console.log(
//   mostExpensive({
//     "Diamond Earrings": 980,
//     "Gold Watch": 250,
//     "Pearl Necklace": 4650,
//   })
// );

// function chosenWine(wines) {
//   let winePrices = wines.map((obj) => obj.price);
//   if (winePrices.length === 1) {
//     return wines[0].name;
//   } else if (winePrices.length === 0) {
//     return null;
//   } else winePrices = winePrices.sort((a, b) => a - b);

//   const secCheapest = winePrices[1];
//   let w = wines
//     .filter((obj) => {
//       return obj.price === secCheapest;
//     })
//     .map((obj) => obj.name);
//   return w[0];
// }

// console.log(
//   chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 },
//     { name: "Wine 1", price: 19.99 },
//   ])
// );

// console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));
// console.log(chosenWine([]));
//-------------------------------------------------------------------

//Number of occurrences
// function countNumberOfOccurrences(obj) {
//   let adjectives = Object.values(obj);
//   let adjCount = {};
//   for (const adj of adjectives) {
//     if (adjCount[adj]) {
//       adjCount[adj] += 1;
//     } else {
//       adjCount[adj] = 1;
//     }
//   }

//   return adjCount;
// }
// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   })
// );

// function mapLetters(str) {
//   let strSplit = str.split("");
//   let results = {};

//   strSplit.map((elem, i, arr) => {
//     if (results[elem]) {
//       results[elem].push(i);
//     } else {
//       results[elem] = [i];
//     }
//   });
//   return results;
// }

// console.log(mapLetters("dodo"));

// function determineWhoCursedTheMost(obj) {
//   let value = Object.values(obj);
//   console.log(value);

//   let myScore = 0;
//   let herScore = 0;
//   for (const a of value) {
//     myScore += a.me;
//     herScore += a.spouse;
//   }
//   return myScore === herScore
//     ? "DRAW!"
//     : myScore > herScore
//     ? "ME!"
//     : "SPOUSE!";
// }

// console.log(
//   determineWhoCursedTheMost({
//     round1: {
//       me: 40,
//       spouse: 5,
//     },
//     round2: {
//       me: 9,
//       spouse: 90,
//     },
//     round3: {
//       me: 9,
//       spouse: 10,
//     },
//   })
// );
//------------------------------------------------------------------------

// function signAll(obj, name) {
//   const entries = Object.entries(obj);

//   console.log(entries);

//   let mappedEnt = entries.map((elem, i, arr) => {
//     if (elem[1].hasOwnProperty("signature")) {
//       return (elem[1]["signature"] = name);
//     } else if (elem[1] === "") {
//       return (obj.signature = name);
//     }
//   });
//   return obj;
// }

// const a = {
//   kitchen: {
//     painting: 100,
//     piano: 1000,
//     signature: "",
//   },
//   cellar: {
//     wine: 340,
//     table: 230,
//     signature: "",
//   },
//   bathroom: {
//     stereo: 220,
//     signature: "",
//   },
//   signature: "",
// };
// console.log(signAll(a, "Rocky"));

// function getStudentsWithNamesAndTopNotes(students) {
//   let outcomes = [];
//   for (const stuInfo of students) {
//     let obj = {};
//     obj["name"] = stuInfo.name;
//     Array.isArray(stuInfo.notes) && stuInfo.notes.length === 0
//       ? (obj["topNote"] = 0)
//       : (obj["topNote"] = Math.max(...stuInfo.notes));
//     outcomes.push(obj);
//   }
//   return outcomes;
// }
// console.log(
//   getStudentsWithNamesAndTopNotes([
//     { name: "John", notes: [] },
//     { name: "Max", notes: [1, 4, 6] },
//     { name: "Zygmund", notes: [1, 2, 3] },
//   ])
// );

// function makeChange(c) {
//   let currency = {
//     q: 25,
//     d: 10,
//     n: 5,
//     p: 1,
//   };
//   let outcome = {};

//   for (const [coin, value] of Object.entries(currency)) {
//     if (c >= value) {
//       outcome[coin] = Math.trunc(c / value);
//       c %= value;
//     } else {
//       outcome[coin] = 0;
//     }
//   }
//   return outcome;
// }

// console.log(makeChange(92));

// function parseCode(str) {
//   let outcome = {
//     firstName: "",
//     lastName: "",
//     id: "",
//   };
//   let strSplit = str.split("");
//   let id = strSplit.filter((a) => a > 0).join("");
//   let fName = [];
//   let i = 0;
//   for (i; i < strSplit.length; i++) {
//     if (strSplit[i] === "0") {
//       break;
//     } else {
//       fName.push(strSplit[i]);
//     }
//   }
//   outcome.firstName = fName.join("");
//   let secName = strSplit
//     .slice(i)
//     .filter((a) => {
//       return a !== "0";
//     })
//     .filter((a) => isNaN(a))
//     .join("");

//   outcome.id = id;
//   outcome.lastName = secName;
//   return outcome;
// }

// console.log(parseCode("Sam000Paulo00567234"));

// function sortList(obj) {
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";
//   let sortedObj = {};

//   let keys = Object.entries(obj);
//   console.log(keys);
//   keys = keys.sort((a, b) => {
//     let rankA = [],
//       rankB = [];

//     for (const char of a[0].split("")) {
//       let index = alphabets.indexOf(char);
//       rankA.push(index + 1);
//     }
//     for (const char of b[0].split("")) {
//       let index = alphabets.indexOf(char);
//       rankB.push(index + 1);
//     }
//     return rankB.join("") - rankA.join("");
//   });
//   for (const [key, value] of keys) {
//     sortedObj[key] = value;
//   }
//   return sortedObj;
//}
// function sortList(obj) {
//   const sortedObj = {};

//   const keys = Object.keys(obj).sort((a, b) => {
//     return b.localeCompare(a);
//   });

//   for (const key of keys) {
//     sortedObj[key] = obj[key];
//   }

//   return sortedObj;
// }
// console.log(sortList({ c: 100, a: 50, b: 10, d: 50 }));
// function rgbToHex(num) {
//   num = num
//     .slice(4)
//     .slice(0, -1)
//     .replace(/, /g, ",")
//     .split(",")
//     .map((a) => {
//       a = Number(a).toString(16).padStart(2, "0");
//       return a;
//     })
//     .join("");

//   return "#" + num;
// }
// console.log(rgbToHex("rgb(255, 0, 0)"));

// const months = {
//   1: "A",
//   2: "B",
//   3: "C",
//   4: "D",
//   5: "E",
//   6: "H",
//   7: "L",
//   8: "M",
//   9: "P",
//   10: "R",
//   11: "S",
//   12: "T",
// };

// function fiscalCode(person) {
//   const consonants = "bcdfghjklmnpqrstvwxyz";
//   const vowels = "aeiou";
//   let fiscalID = "";
//   function nameConverter(str) {
//     let fiscalFirst;
//     let fnameConsonants = str
//       .split("")
//       .filter((a) => consonants.includes(a.toLocaleLowerCase()));

//     let fnameVowels = str
//       .split("")
//       .filter((a) => vowels.includes(a.toLocaleLowerCase()));

//     if (fnameConsonants.length > 3) {
//       fiscalFirst = (
//         fnameConsonants[0] +
//         fnameConsonants[2] +
//         fnameConsonants[3]
//       ).toUpperCase();
//     } else if (fnameConsonants.length === 3) {
//       fiscalFirst = fnameConsonants.join("").toUpperCase();
//     } else if (fnameConsonants.length < 3 && str.length >= 3) {
//       fiscalFirst = (fnameConsonants.join("") + fnameVowels[0]).toUpperCase();
//     } else if (str.length <= 2) {
//       fiscalFirst = (fnameConsonants[0] + fnameVowels[0] + "X").toUpperCase();
//     }
//     fiscalFirst.length === 2 ? (fiscalFirst = fiscalFirst + "X") : "";
//     return fiscalFirst;
//   }

//   function birthId(dob) {
//     let year = dob.split("/")[2].slice(2);
//     fiscalID += year;
//     let month = months[dob.split("/")[1]];
//     fiscalID += month;
//     let day = dob.split("/")[0];

//     let gender = person.gender;
//     day =
//       gender === "M"
//         ? day < 10
//           ? day.padStart(2, "0")
//           : day
//         : gender === "F"
//         ? Number(day) + 40
//         : day;

//     return (fiscalID += day);
//   }
//   fiscalID =
//     nameConverter(person.surname) +
//     nameConverter(person.name) +
//     birthId(person.dob);

//   return fiscalID;
// }

// let test_cases = [
//   { name: "John", surname: "Smith", gender: "M", dob: "15/1/1985" },
//   { name: "Emma", surname: "Brown", gender: "F", dob: "8/2/1990" },
//   { name: "Alice", surname: "Adams", gender: "F", dob: "20/3/2000" },
//   { name: "Rob", surname: "Yu", gender: "M", dob: "5/4/1988" },
//   { name: "Sophia", surname: "Davis", gender: "F", dob: "18/5/1982" },
//   { name: "Oliver", surname: "Lee", gender: "M", dob: "23/6/1977" },
//   { name: "Liam", surname: "Moore", gender: "M", dob: "9/7/1999" },
//   { name: "Ella", surname: "White", gender: "F", dob: "12/8/1986" },
//   { name: "William", surname: "Young", gender: "M", dob: "17/9/2001" },
//   { name: "Grace", surname: "Walker", gender: "F", dob: "28/10/1978" },
//   { name: "James", surname: "Turner", gender: "M", dob: "1/11/1983" },
//   { name: "Ava", surname: "Harris", gender: "F", dob: "31/12/1995" },
//   { name: "Daniel", surname: "Clark", gender: "M", dob: "2/1/2002" },
//   { name: "Mia", surname: "Baker", gender: "F", dob: "14/2/1992" },
//   { name: "Ethan", surname: "Lewis", gender: "M", dob: "10/3/1976" },
//   { name: "Isabella", surname: "Evans", gender: "F", dob: "4/4/1997" },
//   { name: "Logan", surname: "Miller", gender: "M", dob: "27/5/1989" },
//   { name: "Sophia", surname: "Taylor", gender: "F", dob: "8/6/1984" },
//   { name: "Michael", surname: "Jackson", gender: "M", dob: "13/7/1998" },
//   { name: "Abigail", surname: "Moore", gender: "F", dob: "16/8/1975" },
// ];

// for (const test of test_cases) {
//   console.log(fiscalCode(test));
// }

// function fiscalCode(person) {
//   const consonants = "bcdfghjklmnpqrstvwxyz";
//   const vowels = "aeiou";
//   const dobParts = person.dob.split("/");
//   const year = dobParts[2].slice(2);
//   const month = months[dobParts[1]];
//   const day = padDay(dobParts[0], person.gender);

//   function nameConverter(str, maxConsonants) {
//     const nameConsonants = str.split("").filter(a => consonants.includes(a.toLowerCase()));

//     if (nameConsonants.length >= maxConsonants) {
//       return (
//         nameConsonants[0] +
//         nameConsonants[2] +
//         nameConsonants[3]
//       ).toUpperCase();
//     } else {
//       const nameVowels = str.split("").filter(a => vowels.includes(a.toLowerCase()));
//       let namePart = nameConsonants.join("").toUpperCase();
//       namePart += nameVowels.slice(0, maxConsonants - namePart.length).join("").toUpperCase();
//       return namePart + "X".repeat(maxConsonants - namePart.length);
//     }
//   }

//   return nameConverter(person.surname, 3) + nameConverter(person.name, 3) + year + month + day;
// }

// function padDay(day, gender) {
//   const dayNum = Number(day);
//   if (gender === "M") {
//     return (dayNum < 10) ? dayNum.toString().padStart(2, "0") : day;
//   } else {
//     return (dayNum + 40).toString();
//   }
// }

// function whoPassed(students) {
//   let passedStudents = [];
//   for (const [student, marks] of Object.entries(students)) {
//     let results = marks.map((a) => Math.floor(eval(a)));
//     !results.includes(0) ? passedStudents.push(student) : "";
//   }
//   return passedStudents.sort();
// }

// function pizzaPoints(customers, minOrders, minPrice) {
//   let qualifiedCust = [];
//   for (const [customer, orderPrice] of Object.entries(customers)) {
//     orderPrice.filter((a) => a >= minPrice).length >= minOrders
//       ? qualifiedCust.push(customer)
//       : "";
//   }
//   return qualifiedCust.sort();
// }

// let obj1 = {
//   Batman: [22, 30, 11, 17, 15, 52, 27, 12],
//   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
// };

// let obj2 = {
//   "Captain America": [10, 10, 54, 14, 51, 33, 42, 73, 66, 33, 55, 42, 47],
//   "Iron Man": [30, 56, 38, 14, 17],
//   Hulk: [53, 25, 13, 7, 61, 16, 17, 29, 64, 8],
//   Superman: [27, 28],
// };

// let obj3 = {
//   Zorro: [13, 53, 10, 51],
//   Wolverine: [16],
//   "Elon Musk": [
//     26,
//     61,
//     23,
//     61,
//     39,
//     50,
//     53,
//     54,
//     45,
//     46,
//     42,
//     49,
//     18,
//     75,
//     11,
//     73,
//     42,
//     61,
//     15,
//     60,
//     70,
//     67,
//     8,
//     9,
//     63,
//     55,
//     55,
//     35,
//     24,
//     59,
//     13,
//     49,
//     46,
//     26,
//     7,
//     8,
//     8,
//     34,
//     73,
//     60,
//     27,
//     28,
//     28,
//     48,
//     10,
//   ],
// };

// console.log(pizzaPoints(obj1, 5, 20));
// console.log(pizzaPoints(obj2, 1, 5));
// console.log(pizzaPoints(obj3, 7, 15));
// console.log(pizzaPoints(obj1, 10, 5));
// console.log(pizzaPoints(obj2, 2, 35));
// console.log(pizzaPoints(obj3, 3, 25));
// console.log(pizzaPoints(obj3, 4, 12));
// console.log(pizzaPoints(obj2, 1, 75));
// console.log(pizzaPoints(obj1, 100, 1));
// console.log(pizzaPoints(obj3, 2, 67));

// function possiblePath(routeArray) {
//   const validTransitions = {
//     "1": [2],
//     "2": [1, "H"],
//     "3": [4],
//     "4": [3, "H"],
//     H: [2, 4],
//   };

//   let currentRoom;
//   for (let i = 0; i < routeArray.length - 1; i++) {
//     currentRoom = routeArray[i];
//     if (validTransitions[currentRoom].includes(routeArray[i + 1])) {
//       currentRoom = routeArray[i + 1];
//     } else {
//       return false; // Invalid movement
//     }
//   }

//   return true; // Route is valid
// }

// function possiblePath(arr) {
//   let impossibleCases = [
//     "H1",
//     "H3",
//     "14",
//     "13",
//     "23",
//     "24",
//     "1H",
//     "3H",
//     "41",
//     "31",
//     "32",
//     "42",
//   ];
//   if (arr.length === 1) return true;
//   let pairs = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     pairs.push(String(arr[i]) + String(arr[i + 1]));
//   }
//   let result = true;
//   for (let i = 0; i < pairs.length; i++) {
//     if (impossibleCases.includes(pairs[i])) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }
// console.log(possiblePath([2, 1]));

// let x;

// x = "" || 6;
// console.log(x);

// function reverseOdd(str) {
//   let words = str.split(" ");
//   words = words.map((word) => {
//     return word.length % 2 !== 0 ? word.split("").reverse().join("") : word;
//   });
//   return words.join(" ");
// }
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
// console.log(reverseOdd("Bananas"))

// function histogram(arr, char) {
//   let finalString = "";
//   for (const rep of arr) {
//     for (let i = 0; i < rep; i++) {
//       finalString += char;
//     }
//     finalString += "\n";
//   }
//   return finalString;
// }
// console.log(histogram([6, 2, 15, 3], "0") )

// function isDisarium(number) {
//   let sumNumber = 0;
//   const numberArr = String(number).split("");

//   for (let i = 0; i < numberArr.length; i++) {
//     sumNumber += numberArr[i] ** (i + 1);
//   }
//   return sumNumber === number;
// }
// console.log(
//   isDisarium(544),

//   isDisarium(518),

//   isDisarium(8),

//   isDisarium(466)
// );

// function doubleSwap(str, c1, c2, c3) {
//   let replace = new RegExp(`${c2}`, "g");
//   console.log(replace);
//   console.log(str);
//   return str.replaceAll(replace, c3);
// }
// console.log(doubleSwap("aabbccc", "a", "c", "b"));

// function isSmooth(sentence) {
//   let words = sentence.split(" ");
//   console.log(words);
//   for (i = 0; i < words.length - 1; i++) {
//     if (words[i].slice(-1) === words[i + 1].slice(0, 1)) {
//     } else return false;
//   }
//   return true;
// }

// console.log(isSmooth("Sarah hurriedly yawned demonstrating graceful light"));

// function uncensor(str, vowels) {
//   let strSplit = str.split(" ");
//   console.log(strSplit);
//   let counter;
//   for (let word of strSplit) {
//     const regex = new RegExp(/[*]/, "g");
//     const matches = word.match(regex);

//     console.log(matches.length);
//     if (matches === null) {
//       return word;
//     } else {
//       for (let i = counter; i < counter; i++) {
//         word = word.replace("*", vowels[i]);
//         console.log(word);
//       }
//     }
//     counter = matches.length;
//   }
// }
// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensor("*PP*RC*S*", "UEAE"))
// console.log(uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee'))
// console.log('abcd', '')
// function uncensor(str, vowels) {
//   let strSplit = str.split(" ");
//   console.log(strSplit);
//   let counter = 0;
//   let fStr = [];
//   for (let word of strSplit) {
//     const regex = new RegExp(/\*/, "g");
//     const matches = word.match(regex);

//     if (matches === null) {
//       fStr.push(word);
//     } else {
//       for (let i = counter; i < matches.length + counter; i++) {
//         word = word.replace("*", vowels[i]);
//       }
//       fStr.push(word);
//       counter += matches.length;
//     }
//   }
//   return fStr.join(" ");
// }

// function uncensor(str, vowels) {
//   const strSplit = str.split(" ");
//   let vowelIndex = 0;

//   const fStr = strSplit.map((word) => {
//     return word.replace(/\*/g, () => {
//       if (vowelIndex < vowels.length) {
//         console.log(vowelIndex);
//         console.log(vowels[vowelIndex]);
//         return vowels[vowelIndex++];
//       } else {
//         // Handle the case where there are more '*' than vowels
//         return "*";
//       }
//     });
//   });

//   return fStr.join(" ");
// }
// let values = {
//   "#": 5,
//   O: 3,
//   X: 1,
//   "!": -1,
//   "!!": -3,
//   "!!!": -5,
// };

// function checkScore(str) {
//   let total = 0;
//   str.flatMap((char) => char.flatMap((elem) => (total += values[elem])));
//   return total > 0 ? total : 0;
// }

// console.log(
//   checkScore([
//     ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
//     [
//       "!!!",
//       "!!!",
//       "!!",
//       "!!",
//       "!",
//       "!",
//       "X",
//       "!",
//       "!!!",
//       "O",
//       "!",
//       "!!!",
//       "X",
//       "#",
//     ],
//     [
//       "#",
//       "X",
//       "#",
//       "!!!",
//       "!",
//       "!!",
//       "#",
//       "#",
//       "!!",
//       "X",
//       "!!",
//       "!!!",
//       "X",
//       "O",
//     ],
//     [
//       "!!",
//       "X",
//       "!!",
//       "!!",
//       "!!!",
//       "#",
//       "O",
//       "O",
//       "!!!",
//       "#",
//       "O",
//       "O",
//       "#",
//       "!!",
//     ],
//     ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
//     [
//       "!!",
//       "!!!",
//       "X",
//       "!!!",
//       "!!",
//       "!!",
//       "!!!",
//       "X",
//       "O",
//       "!",
//       "#",
//       "!!",
//       "!!",
//       "!!!",
//     ],
//     [
//       "!!",
//       "!!",
//       "#",
//       "O",
//       "!",
//       "!!",
//       "!",
//       "!!!",
//       "#",
//       "O",
//       "#",
//       "!",
//       "#",
//       "!!",
//     ],
//     [
//       "X",
//       "X",
//       "O",
//       "X",
//       "!!!",
//       "#",
//       "!!!",
//       "!!!",
//       "X",
//       "X",
//       "X",
//       "!",
//       "#",
//       "!!",
//     ],
//     ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
//     ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
//     [
//       "!",
//       "!!",
//       "!!",
//       "O",
//       "!!",
//       "!!",
//       "#",
//       "#",
//       "!",
//       "!!!",
//       "O",
//       "!",
//       "#",
//       "#",
//     ],
//     [
//       "!",
//       "!!!",
//       "!!",
//       "X",
//       "!!",
//       "!!",
//       "#",
//       "!!!",
//       "O",
//       "!!",
//       "!!!",
//       "!",
//       "!",
//       "!",
//     ],
//     [
//       "!!!",
//       "!!!",
//       "!!",
//       "O",
//       "!",
//       "!",
//       "!!!",
//       "!!!",
//       "!!",
//       "!!",
//       "X",
//       "!",
//       "#",
//       "#",
//     ],
//     ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"],
//   ])
// );

// let values = {
//   "#": 5,
//   O: 3,
//   X: 1,
//   "!": -1,
//   "!!": -3,
//   "!!!": -5,
// };

// function checkScore(arr) {
//   return arr.flatMap(char => values[char]);
// }

// let result = checkScore(['#', 'O', 'X', '!', '!!', '!!!']);
// console.log(result); // Output: 0

// function uniqueStyles(albums) {
//   albums = new Set(albums.join(",").split(","));

//   return albums.size;
// }

// console.log(
//   uniqueStyles([
//     "Dub,Dancehall",
//     "Industrial,Heavy Metal",
//     "Techno,Dubstep",
//     "Synth-pop,Euro-Disco",
//     "Industrial,Techno,Minimal",
//   ])
// );
// console.log(
//   uniqueStyles([
//     "Soul",
//     "House,Folk",
//     "Trance,Downtempo,Big Beat,House",
//     "Deep House",
//     "Soul",
//   ])
// );
// console.log(uniqueStyles(["Funk", "Funk", "Funk", "Funk", "Funk"]));

// let user = "John";

// console.log(user ?? "Anonymous"); // John (user is not null/undefined)
// function sum(...arguments) {

//   return arguments.reduce((acc, val) => acc + val); // What's the issue here?
// }
// console.log(sum(1, 2, 3)); // How can you fix this function?

// function factorial(n) {
//   return n <= 1 ? 1 : factorial(n - 1) * n;
// }

// console.log(factorial(5))

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = "name";
// console.log(user[key]); // undefined
// console.log("name" in user);

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   // ..,
//   "+1": "USA",
// };

// for (let code of Object.values(codes)) {
//   console.log(code); // 1, 41, 44, 49
// }
// console.log(typeof (48 + ""));

// function add(a, b) {
//   return +a + +b;
// }
// const result = add("2", 3); // Coercion of the string '3' to a number
// console.log(result);

// let user = {
//   name: "John",
//   hi() {
//     console.log(this.name);
//     let a = () => console.log(this.name);
//     a();
//   },
// };
// let user2 = {
//   name: "araon",
// };

// let hello = user.hi;
//  hello.call(user);

// let admin = user; // copy the reference
// admin["name"] = "mike";
// let newUser = {};
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(newUser, user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(Number('name'))

//BACKSPACE ATTACK

//Suppose a hash # represents the BACKSPACE key being pressed.
// Write a function that transforms a string containing # into a string without any #.

//erase("he##l#hel#llo") ➞ "hello"
// let a = "s#w#arm###";

// let match = a.match(/#/g);

// for (let i = 0; i < match.length; i++) {
//   a = a.replace(/[a-z]#/g, "");
// }
// a.includes("#") ? (a = a.replace(/#/g, "")) : a;
// console.log(a);
// let counter = 0;

// function numberOfSwaps(arr) {
//   for (let i = 0; i < arr.length; ) {
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       counter++;
//       i = 0;
//     } else i++;
//   }
//   console.log(arr, counter);
// }

// console.log(numberOfSwaps([5, 2, 9, 1, 5, 6, 3, 4, 8, 7]));

// function colorPatternTimes(cols) {
//   let time;
//   time = cols.length * 2;
//   for (let i = 0; i < cols.length - 1; i++) {
//     if (cols[i] !== cols[i + 1]) {
//       time++;
//     }
//   }
//   return time;
// }

// console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));

// function maxItems(prices, budget) {
//   prices = prices
//     .join(" ")
//     .replaceAll(/\$/g, "")
//     .split(" ")
//     .sort((a, b) => a - b);

//   let i;
//   budget = budget.replace(/\$/g, "");
//   for (i = 0; i < prices.length; i++) {
//     budget = budget - prices[i];
//     if (budget < 0) break;
//   }

//   return i > 0 ? i : "Not enough funds";
// }

// console.log(
//   maxItems(
//     ["$59", "$99", "$59", "$90", "$75", "$19", "$36", "$56", "$79", "$5"],
//     "$"
//   )
// );
// console.log(
//   maxItems(
//     ["$20", "$11", "$8", "$59", "$64", "$36", "$41", "$99", "$98"],
//     "$357"
//   )
// );

// let time = new Date();
// let hour = time.toLocaleTimeString(navigator.locale, { hour12: true });
// console.log(time.toLocaleTimeString());
// console.log(new Date("", "", "", 19, 15, 7, 12).toLocaleTimeString());

// function convertTime(str) {
//   str = str.split(":");
//   let [hour, min, second] = str;
//   second.includes("PM") && 1 <= hour && hour < 12
//     ? (hour = Number(hour) + 12)
//     : hour;

//   hour == 12 && second.includes("AM") ? (hour = 0) : hour;
//   let date = new Date("", "", "", hour, min, parseInt(second));
//   [date] = date.toTimeString().split(" ").slice(0, 1);
//   return date;
// }

// console.log(convertTime("1:50:01PM"));

// Certainly! Here's a simplified representation:

// **Hearts:**
// - Ace: A❤️
// - 2: 2❤️
// - 3: 3❤️
// - 4: 4❤️
// - 5: 5❤️
// - 6: 6❤️
// - 7: 7❤️
// - 8: 8❤️
// - 9: 9❤️
// - 10: 10❤️
// - Jack: J❤️
// - Queen: Q❤️
// - King: K❤️

// **Diamonds:**
// - Ace: A♦️
// - 2: 2♦️
// - 3: 3♦️
// - 4: 4♦️
// - 5: 5♦️
// - 6: 6♦️
// - 7: 7♦️
// - 8: 8♦️
// - 9: 9♦️
// - 10: 10♦️
// - Jack: J♦️
// - Queen: Q♦️
// - King: K♦️

// **Clubs:**
// - Ace: A♣️
// - 2: 2♣️
// - 3: 3♣️
// - 4: 4♣️
// - 5: 5♣️
// - 6: 6♣️
// - 7: 7♣️
// - 8: 8♣️
// - 9: 9♣️
// - 10: 10♣️
// - Jack: J♣️
// - Queen: Q♣️
// - King: K♣️

// **Spades:**
// - Ace: A♠️
// - 2: 2♠️
// - 3: 3♠️
// - 4: 4♠️
// - 5: 5♠️
// - 6: 6♠️
// - 7: 7♠️
// - 8: 8♠️
// - 9: 9♠️
// - 10: 10♠️
// - Jack: J♠️
// - Queen: Q♠️
// - King: K♠️

// let deck = [
//   { suit: "Spades", value: "Ace" },
//   { suit: "Diamonds", value: "Ace" },
//   { suit: "Clubs", value: "Ace" },
// ];
// let deck2 = [
//   { suit: "Hearts", value: "King" },
//   { suit: "Diamonds", value: "King" },
//   { suit: "Clubs", value: "King" },
// ];
// const matrix = {
//   Ace: 14,
//   King: 13,
//   Queen: 12,
//   Jack: 11,
//   Hearts: 4,
//   Diamonds: 3,
//   Clubs: 2,
//   Spades: 1,
// };
// function cardSorter(deck) {
//   deck = deck.map((card) => {
//     let cardValue = matrix[card.suit];
//     let cardName = matrix[card.value] ?? card.value;
//     let cardPower = cardValue + String(cardName).padStart(2, "0");
//     card.cardPower = cardPower;
//     return card;
//   });

//   deck = deck.sort((a, b) => {
//     return b.cardPower - a.cardPower;
//   });

//   let sortedCard = [];
//   for (let obj of deck) {
//     let card = `${obj.value} of ${obj.suit}`;
//     console.log(obj.cardPower);
//     sortedCard.push(card);
//   }
//   return sortedCard;
// }
// console.log(cardSorter(deck));
// console.log(cardSorter(deck2));

// function advancedSortDeck(deck) {
//   const suitOrder = { Hearts: 1, Diamonds: 2, Clubs: 3, Spades: 4 };

//   const valueOrder = {
//     King: 13, Queen: 12, Jack: 11, 10: 10, 9: 9, 8: 8, 7: 7, 6: 6, 5: 5, 4: 4, 3: 3, 2: 2, Ace: 1,
//   };

//   deck.sort((card1, card2) => {
//     const suitComparison = suitOrder[card1.suit] - suitOrder[card2.suit];
//     if (suitComparison !== 0) {
//       return suitComparison;
//     }

//     return valueOrder[card2.value] - valueOrder[card1.value];
//   });

//   return deck.map(card => `${card.value} of ${card.suit}`);
// }

// // Example deck of cards
// const deck = [
//   { suit: 'Hearts', value: 'King' },
//   { suit: 'Diamonds', value: '10' },
//   { suit: 'Clubs', value: '7' },
//   { suit: 'Spades', value: 'Ace' },
//   { suit: 'Hearts', value: '3' },
//   { suit: 'Diamonds', value: 'Jack' },
//   // ... more cards
// ];

// // Test the function
// const sortedDeck = advancedSortDeck(deck);
// console.log(sortedDeck);
