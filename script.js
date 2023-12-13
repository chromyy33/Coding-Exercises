"use strict";

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

//---------Mubashir Cipher(Edabit.com)--------

// function mubashirCipher(message) {
//   var key = [
//     ["m", "c"],
//     ["u", "e"],
//     ["b", "g"],
//     ["a", "k"],
//     ["s", "v"],
//     ["h", "x"],
//     ["i", "z"],
//     ["r", "y"],
//     ["p", "w"],
//     ["l", "n"],
//     ["o", "j"],
//     ["t", "f"],
//     ["q", "d"],
//   ];
//   message = message.split(""); //splitting to individual chars(converting to arr)
//   message = message
//     .map((char) => {
//       //looping the keys
//       for (let keys of key) {
//         //Guard Clause
//         if (char === " ") return char;

//         if (keys.includes(char)) {
//           //Return alternate key
//           return char === keys[0] ? keys[1] : keys[0];
//         }
//       }
//     })
//     .join("");
//   //Joining the final solution

//   return message;
// }
// console.log(mubashirCipher("mubashir is not amazing")); //cegkvxzy zv ljf kckizlb
//Tried to make an easy and a concise solution

// Know Your Neighbor(Edabit)

// function plusSign(str) {
//   let alphabets = str.match(/[a-z]/g);
//   let result;
//   for (let i = 0; i < str.length - 1; i++) {
//     if (alphabets.includes(str[i])) {
//       result = str[i - 1] === "+" && str[i + 1] === "+" ? true : false;
//       if (result === false) break;
//     }
//   }
//   return result;
// }

// console.log(plusSign("+f+d+c+#+f+"));
// console.log(plusSign("+s+7+fg+r+8+"));
// console.log(plusSign("f++d+g+8+"));
// console.log(plusSign("+d+=3=+s+"));
// console.log(plusSign("a+"));

//Unique Element

function returnUnique(arr) {
  let isPresent = false;
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        results.push(arr[i]); //finding values that repeat
      }
    }
  }
  arr = arr.filter((char) => !results.includes(char)); //filtered
  return arr;
}

//CHAT GPT Soln
function returnUnique(arr) {
  let charCount = {};

  // Count the occurrences of each character
  for (let char of arr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Filter out characters with count > 1
  let nonRepeatingArr = arr.filter((char) => charCount[char] === 1);

  return nonRepeatingArr;
}

// let createCounter = function (n) {
//   return function () {
//     return [n++];
//   };
// };
// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//2629. Function Composition(LC)

//Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// var compose = function (functions) {
//   const len = functions.length;
//   return function (x) {
//     for (let i = len - 1; i >= 0; i--) {
//       x = functions[i](x);
//     }
//     return x;
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// // console.log(compose([])(42));

// 2634. Filter Elements from Array(LC)

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
// const arr = [-2, -1, 0, 1, 2];

// var filter = function (arr, fn) {
//   const len = arr.length;
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i], i) ? results.push(arr[i]) : arr[i];
//   }
//   return results;
// };

// var filter = function (arr, fn) {
//   let i = 0;
//   let results = [];
//   const len = arr.length;

//   while (i < len) {
//     fn(arr[i], i) ? results.push(arr[i]) : arr[i];
//     i++;
//   }
//   return results;
// };
// console.log(
//   filter(arr, function plusOne(n) {
//     return n + 1;
//   })
// );
// Array.prototype.last = function () {

//   if (arr.length > 0) {
//     return arr[arr.length - 1];
//   }

//   return -1;
// };

// const arr = [];
// console.log(arr.last());

// var createCounter = function (init) {
//   let currentVal = init;
//   return {
//     increment() {
//       return (init = init + 1);
//     },
//     decrement() {
//       return (init = init - 1);
//     },
//     reset() {
//       init = currentVal;
//       return init;
//     },
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// var once = (function () {
//   var executed = false;

//   return function (fn) {
//     return function (...args) {
//       if (!executed) {
//         executed = true;
//         return fn(...args);
//       }

//       return undefined;
//     };
//   };
// })();
// let fn = (a, b, c) => a * b *c;
// let onceFn = once(fn)
// console.log(onceFn( 1, 2, 3)); // logs 6
// console.log(onceFn( 5,7,8)); // logs 6

// var chunk = function (arr, size) {
//   const len = arr.length;
//   let result = [];

//   if (len === 0) return [];
//   for (let i = 0; i < len; i++) {
//     if (arr.length === 0) {
//     } else {
//       let sliced = arr.splice(0, size);
//       result.push(sliced);
//     }
//   }
//   return result;
// };
// console.log(chunk([1, 2, 3, 4, 5], 6));

// var getSumAbsoluteDifferences = function (arr) {
//   const len = arr.length;
//   let result = [];
//   for (let i = 0; i < len; i++) {
//     let sum = 0;
//     for (let k = 0; k < len; k++) {
//       sum += Math.abs(arr[i] - arr[k]);
//     }
//     result.push(sum);
//   }
//   return result;
// };
// var getSumAbsoluteDifferences = function (arr) {
//   let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
//   const len = arr.length;
//   let runningSum = 0;
//   let result = [];

//   for (let i = 0; i < len; i++) {
//     runningSum += arr[i];
//     const leftSum = arr[i] * (i + 1) - runningSum;

//     const rightSum = totalSum - arr[i] * (len - (i + 1)) - runningSum;
//     result.push(leftSum + rightSum);
//   }

//   return result;
// };

// console.log(getSumAbsoluteDifferences([1, 4, 6, 8, 10, 11]));

//  [34, 22, 18, 18, 22, 26]

// var lengthOfLongestSubstring = function (arr) {
//   const len = arr.length;
//   let largestStr = "";
//   let max = 0;
//   let maxStr;

//   for (let i = 0; i < len; i++) {
//     if (!largestStr.includes(arr[i])) {
//       largestStr += arr[i];
//     } else {
//       if (largestStr.length > max) {
//         max = largestStr.length;
//         maxStr = largestStr;
//       }
//       largestStr = "";
//       largestStr += arr[i];
//     }
//   }
//   return;
// };
// var lengthOfLongestSubstring = function (arr) {
//   const len = arr.length;
//   if (len === (0 || 1)) return len;
//   let largestStr = "";
//   let moved = 0,
//     maxLength = 0,
//     elseCounter = 0;
//   for (let i = 0; i < len; i++) {
//     if (!largestStr.includes(arr[i])) {
//       largestStr += arr[i];
//     } else {
//       elseCounter++;
//       if (maxLength < largestStr.length) {
//         maxLength = largestStr.length;
//       }

//       moved = largestStr.length;
//       largestStr = largestStr.slice(i + 1);
//       i = Math.abs(moved - i);
//     }
//   }

//   if (elseCounter || elseCounter === 0) {
//     return Math.max(largestStr.length, maxLength);
//   }
// };
// var lengthOfLongestSubstring = function (arr) {
//   const len = arr.length;
//   if (len === 0 || len === 1) return len;

//   let maxLength = 0;
//   let start = 0;
//   let charIndexMap = {};

//   for (let i = 0; i < len; i++) {
//     const currentChar = arr[i];

//     if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
//       start = charIndexMap[currentChar] + 1;
//     }
// console.log(charIndexMap)
//     charIndexMap[currentChar] = i;
//     console.log(maxLength)
//     maxLength = Math.max(maxLength, i - start + 1);
//   }

//   return maxLength;
// };
// console.log(lengthOfLongestSubstring("aav"));

// function insertWhitespace(s) {
//   let alphabets = s.match(/[A-Z]/g);
//   s = s.split("");
//   for (let i = 1; i < alphabets.length; i++) {
//     let index = s.indexOf(alphabets[i]);
//     s[index-1]=s[index-1]+' '
//     console.log(s);

//   }
//   return s.join('');
// }

//
// function insertWhitespace(s) {
//   let modStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (i === 0) {
//       modStr += s[i];
//     } else {
//       s[i] === s[i].toUpperCase() && isNaN(s[i])
//         ? (modStr = modStr + " " + s[i].toUpperCase())
//         : (modStr += s[i]);
//     }
//   }
//   return modStr;
// }
// console.log(insertWhitespace("She1WalksToTheBeach"));
//--------------------------------------------------------------
// Modify Words
// Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).

// function editWords(arr) {
//   let results = []; // empty array to store results for multiple values
//   for (let i = 0; i < arr.length; i++) {
//     let arrSplit = arr[i].split(""); //converting string to arr
//     let index =
//       arrSplit.length % 2 === 0
//         ? arrSplit.length / 2
//         : Math.trunc(arrSplit.length / 2); // checking for arr middle point for '-' insertion
//     arrSplit.splice(index, 0, "-"); //saying splice 0 items at index 'index'(var) and add '-'

//     results.push(arrSplit.reverse().join("").toUpperCase()); //reverse,join and uppercase and push in results arr
//   }
//   return results;
// }

// console.log(editWords(["new york city"]));
// console.log(editWords([""]));
//--------------------------------------------------------------------

//An Ordered Matrix
//Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on.
// Your function needs to create an a × b matrix. a is the first argument and b is the second.

// function orderedMatrix(a, b) {
//   let results = [];

//   for (let k = 0; k < a; k++) {
//     let nums = [];
//     for (let i = 1; i < b + 1; i++) {
//       nums.push(b * k + i); //5 * 0 + 1 and so on
//     }
//     results.push(nums);
//   }
//   return results;
// }
// console.log(orderedMatrix(3, 5));

//----------------------------------------------
// Even vs. Odds

// Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.

// A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.

// For instance:

// [3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

// [3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
// After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

// For instance:

// [3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
// Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).

// Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

// Given an array, calculate the number of liked spots.

//Soln

// function availableSpots(arr, num) {
//   let counter = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let type = num % 2 == 0 ? "even" : "odd";

//     if (type === "even") {
//       let isNeighbor = arr[i] % 2 === 0 || arr[i + 1] % 2 === 0;
//       isNeighbor ? counter++ : counter;
//     }

//     if (type === "odd") {
//       let isNeighbor = arr[i] % 2 !== 0 || arr[i + 1] % 2 !== 0;
//       isNeighbor ? counter++ : counter;
//     }
//   }
//   return counter;
// }

// --------------------------------------------------------------------------
// Concatenate to Form Target Array
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

// Examples
// canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

// canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// // Duplicate 7s not found in target array.

// canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.

// function canConcatenate(arr, target) {
//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     finalArr = [...finalArr, ...arr[i]];
//   }
//   function arrMatch(a, b) {
//     return a.every((val, index) => val === b[index]);
//   }
//   function sort(arr) {
//     return arr.sort((a, b) => a - b);
//   }
//   return arrMatch(sort(finalArr), sort(target));
// }
// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6],
//     ],
//     [7, 6, 5, 4, 3, 2, 1]
//   )
// );
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6, 7],
//     ],
//     [1, 2, 3, 4, 5, 6, 7]
//   )
// );

// Imaginary Coding Interview
// Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

// The criteria for a candidate to be qualified in the coding interview is:

// The candidate should have complete all the questions.
// The maximum time given to complete the interview is 120 minutes.
// The maximum time given for very easy questions is 5 minutes each.
// The maximum time given for easy questions is 10 minutes each.
// The maximum time given for medium questions is 15 minutes each.
// The maximum time given for hard questions is 20 minutes each.
// If all the above conditions are satisfied, return "qualified", else return "disqualified".

// You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

// Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

// The maximum time to complete the interview includes a buffer time of 20 minutes.

//-----------------------------------------------------------------------------------

// function interview(arr, tot) {
//   const answerKey = {
//     "very easy": 5,
//     easy: 10,
//     medium: 15,
//     hard: 20,
//   };
//   const questionsType = [
//     "very easy",
//     "very easy",
//     "easy",
//     "easy",
//     "medium",
//     "medium",
//     "hard",
//     "hard",
//   ];
//   let i;
//   let question;
//   if (arr.length !== questionsType.length)
//     return "Disqualified, cause missing a question";

//   let passed = false;
//   for (i = 0; i < arr.length; i++) {
//     if (answerKey[questionsType[i]] >= arr[i]) {
//       passed = true;
//     } else {
//       question = i;

//       passed = false;
//       break;
//     }
//   }

//   let a;
//   return (a =
//     passed === false
//       ? `Disqualified, Candidate took extra time in ${questionsType[i]} question`
//       : tot <= 120
//       ? "Qualified"
//       : "Disqualified, Candidate took more than 120 minutes");
// }
// console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120));
// console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130));
// console.log(interview([5, 5, 10, 10, 15, 20, 20], 120));
//----------------------------------------------------------------

// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false
// Notes
// 0 counts as neither a positive nor a negative value.

// function isPositiveDominant(arr) {
//   let uniqueNumbers = [];
//   let counterPos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) continue;

//     if (!uniqueNumbers.includes(arr[i])) {
//       uniqueNumbers.push(arr[i]);
//       arr[i] > 0 ? counterPos++ : counterPos--;
//     }
//   }
//   return counterPos > 0 ? true : false;
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 0]));
// console.log(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]));
// console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]));

// Swapping Cards
// Two players draw a pair of numbered cards so that both players can form a 2 digit number. A winner can be decided if one player's number is larger than the other.

// However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! Note that it is illegal to swap the order of your own cards. That means if you draw a 1 then a 9, you cannot swap them to get 91.

// Numbered Cards

// Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.

// n1 is Paul's number
// n2 is his opponent's number

// Worked Example
// swap_cards(41, 79) ➞ true
// Paul's lowest number is 1
// The opponent's ten's digit is 7
// After the swap: 47 > 19
// Paul wins the round

// function swapCards(n1, n2) {
//   n1 = String(n1).split("");
//   let lowestCard;
//   let tensCard = String(n2)[0];
//   if (n1[0] === n1[1]) {
//     lowestCard = n1[1];
//     n1.splice(1, 1, tensCard);
//     n1 = n1.join("");
//   } else {
//     lowestCard = n1[0] > n1[1] ? n1[1] : n1[0];
//     const index = n1.indexOf(lowestCard);
//     n1.splice(index, 1, tensCard);
//     n1 = n1.join("");
//   }
//   n2 = lowestCard + String(n2)[1];
//   return n1 > n2 ? true : false;
// }
// console.log(swapCards(41, 98));
// console.log(swapCards(88, 54));
// console.log(swapCards(48, 14));

//------------------------------------------------------
// Sort Authors Last Names Alphabetically
// Today you volunteered as a librarian.
// You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.

// Examples
// sortByLastName([
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ]) ➞ [
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]
// Notes
// There will always be a name, rating, and author property on each object.
// The array will never be empty.
// The author property will always feature only a first and last name.

// function sortByLastName(books) {
//   let sortedBooks = books.sort((a, b) => {
//     let lastNameA = a.author.split(" ")[1];
//     let lastNameB = b.author.split(" ")[1];
//     return lastNameA.localeCompare(lastNameB);
//   });

//   return sortedBooks;
// }

// console.log(
//   sortByLastName([
//     { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//     { name: "Warcross", rating: "13+", author: "Marie Lu" },
//     { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   ])
// );
// console.log(
//   sortByLastName([
//     { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
//     { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
//   ])
// );
// console.log(
//   sortByLastName([
//     { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
//     { name: "The Selection", rating: "13+", author: "Kiera Cass" },
//     {
//       name: "The School for Good and Evil",
//       rating: "11+",
//       author: "Soman Chainani",
//     },
//     { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   ])
// );

//-----------------------------------
// Current Streak
// Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

// Examples
// currentStreak("2019-09-23", [
//   {
//     "date": "2019-09-18"
//   },
//   {
//     "date": "2019-09-19"
//   },
//   {
//     "date": "2019-09-21"
//   },
//   {
//     "date": "2019-09-22"
//   },
//   {
//     "date": "2019-09-23"
//   }
// ])
// Notes
// The array of dates is sorted chronologically.
// The today parameter will always be greater than or equal to the last date in the array.
// An empty array should return 0.

// function currentStreak(today, arr) {
//   let currentDay = new Date(today).getDate() + 1;
//   let streakCounter = 0;

//   // Ensure the array is not empty
//   if (arr.length === 0) {
//     return 0;
//   }

//   let lastDay = new Date(arr[arr.length - 1].date).getDate() + 1;
//   if (currentDay !== lastDay) {
//     return 0; // No streak if the last recorded day is not today
//   }
//   streakCounter++;
//   for (let i = arr.length - 2; i >= 0; i--) {
//     let day = new Date(arr[i].date).getDate() + 1;

//     if (lastDay - day === 1) {
//       // Update lastDay to the current day in the loop
//       lastDay = day;
//       streakCounter++;
//     } else {
//       break;
//     }
//   }

//   return streakCounter;
// }

// console.log(
//   currentStreak("2019-09-24", [
//     {
//       date: "2019-09-18",
//     },
//     {
//       date: "2019-09-19",
//     },
//     {
//       date: "2019-09-21",
//     },
//     {
//       date: "2019-09-22",
//     },
//     {
//       date: "2019-09-23",
//     },
//     {
//       date: "2019-09-24",
//     },
//   ])
// );
//-----------------------------------------
// Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
// Notes
// Arrays are sorted.
// Try doing this problem with O(n + m) time complexity.

// function commonElements(arr1, arr2) {
//   let setArr2 = new Set(arr2);
//   let commonElements = [];
//   for (let i = 0; i < arr1.length; i++) {
//     setArr2.has(arr1[i]) ? commonElements.push(arr1[i]) : "";
//   }
//   return commonElements;
// }
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
//-------------------------------------------------------

// Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero three") ➞ ""

// textToNumberBinary("one one") ➞ ""
//-----------------------------------------------------------------
// function textToNumberBinary(str) {
//   let numKey = {
//     one: 1,
//     zero: 0,
//   };
//   let strArr = str.split(" ");

//   if (strArr.length < 8) return "Less than 8 words";
//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] = strArr[i].toLowerCase();
//   }
//   let strSet = new Set(strArr);

//   if (strSet.size !== 2 && strArr.length < 8 + strSet.size - 2)
//     return "Argument not equal to zero or one";
//   let finalStr = "";
//   for (let i = 0; i < strArr.length; i++) {
//     if (numKey[strArr[i]] === undefined) continue;
//     finalStr += numKey[strArr[i]];
//   }
//   let rem = finalStr.length % 8;

//   return finalStr.slice(0, finalStr.length - rem);
// }
// console.log(textToNumberBinary("zero one zero one Zero one zero one"));

// console.log(textToNumberBinary("one one"));
// console.log(textToNumberBinary("zero one zero one zero one zero one one two"));
// console.log(
//   textToNumberBinary(
//     "One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero"
//   )
// );
// console.log(textToNumberBinary('Two one zero one one zero one zero'))
//--------------------------------------------------------------------------------------------
// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

//---------------------------------------------------
// function countBoomerangs(arr) {
//   let numBoom = 0;
//   for (let i = 0; i < arr.length - 2; ) {
//     if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
//       numBoom++;
//       i++;
//     } else i++;
//   }
//   return numBoom;
// }
// console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
// console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));

//------------
// Pandigital Numbers
// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

// Examples
// isPandigital(98140723568910) ➞ true

// isPandigital(90864523148909) ➞ false
// // 7 is missing.

// isPandigital(112233445566778899) ➞ false

// function isPandigital(num) {
//   let numBig = BigInt(num)
//   const pandigitalStr = "0123456789";
//   let numArr = String(numBig).split("");

//   const numSet = new Set(numArr);
//   numArr = [...numSet];
//   numArr = numArr.sort((a, b) => a - b).join("");
//   return numArr === pandigitalStr ? true : false;
// }

// console.log(isPandigital(98140723568910));
// console.log(isPandigital(112233445566778899))
// console.log(isPandigital(647380265483206))
///

// Cup Swapping
// There are three cups on a table, at positions A, B, and C. At the start, there is a ball hidden under the cup at position B.

// Image of cups where ball is under middle cup

// However, I perform several swaps on the cups, which is notated as two letters. For example, if I swap the cups at positions A and B, I could notate this as AB or BA.

// Create a function that returns the letter position that the ball is at, once I finish swapping the cups. The swaps will be given to you as an array.

// Worked Example
// cupSwapping(["AB", "CA", "AB"]) ➞ "C"

// Ball begins at position B.
// Cups A and B swap, so the ball is at position A.
// Cups C and A swap, so the ball is at position C.
// Cups A and B swap, but the ball is at position C, so it doesn't move.

// function cupSwapping(swaps) {
//   let currentCup = "B";

//   for (let i = 0; i < swaps.length; i++) {
//     if (swaps[i].includes(currentCup)) {
//       let index = swaps[i].indexOf(currentCup);
//       index = index === 0 ? 1 : 0;
//       currentCup = swaps[i][index];
//     }
//   }
//   return currentCup;
// }
// console.log(cupSwapping(["BA", "AC", "CA", "BC"]));
// console.log((cupSwapping([]), "B"));
// console.log(cupSwapping(["AC", "CA", "CA", "AC"]));

const products = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Condoms" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];

// //I want to now start adding comments for cleaner code.
// function vendingMachine(products, money, productNumber) {
//   //Checking for a valid product.
//   if (productNumber > products.length || productNumber < 1)
//     return "Enter a valid product number";
//   //Getting the product from the product obj based on index.
//   const productInfo = products[productNumber - 1];
//   //Checking if the user has enough money.
//   if (money < productInfo.price) return "Not enough money for this product";
//   let changeArr = [];
//   //Initial change
//   let change = money - productInfo.price;
//   //Coins to use.
//   const coins = [500, 200, 100, 50, 20, 10];
//   //If change is greater or equal to coin, pushing it to the change arr and subtracting it for remaining amount
//   for (let i = 0; i < coins.length; i++) {
//     if (change >= coins[i]) {
//       changeArr.push(coins[i]);
//       change = change - coins[i];
//     }
//   }
//   //Preparing for output.
//   let outputObj = {
//     change: changeArr,
//     product: productInfo.name,
//   };
//   return outputObj;
// }
// console.log(vendingMachine(products, 100, 9));
// console.log(vendingMachine(products, 250, 7));

// Still working on it

// function maximumSeating(arr) {
//   let count = 0;
//   const seatsNeeded = 5;
//   for (let i = 1; i < arr.length; i += 3) {

//     let j = i - 1;
//     if (arr[j] === (0 || 1) && arr[j + 1] === 0 && arr[j + 2] === 0) {
//       if (arr[j + seatsNeeded] !== undefined) {
//         arr[j + 3] === 0 && arr[j + 4] === 0 && arr[j + 5] === 0
//           ? count++
//           : count;
//       } else if (arr[j + seatsNeeded] === undefined) {
//         if (arr[j + seatsNeeded - 1] === undefined) {
//           arr[j + 3] === 0 ? count++ : count;
//         } else {
//           arr[j + 3] === 0 && arr[j + 4] === 0 ? count++ : count;
//         }
//       } else {
//         arr[j + 3] === 0 ? count++ : count;
//       }
//     }
//   }

//   return count;
// }

// function maximumSeating(arr) {
//   let count = 0;
//   const seatsNeeded = 5;
//   for (let i = 1; i < arr.length; i += 3) {
//     let j = i - 1;
//     if (arr[j] === (0 || 1) && arr[j + 1] === 0 && arr[j + 2] === 0) {
//       if (arr[j + seatsNeeded] !== undefined) {
//         arr[j + 3] === 0 && arr[j + 4] === 0 && arr[j + 5] === 0
//           ? count++
//           : count;
//       } else if (arr[j + seatsNeeded] === undefined) {
//         if (arr[j + seatsNeeded - 1] === undefined) {
//           arr[j + 3] === 0 ? count++ : count;
//         } else {
//           arr[j + 3] === 0 && arr[j + 4] === 0 ? count++ : count;
//         }
//       } else {
//         arr[j + 3] === 0 ? count++ : count;
//       }
//     }
//   }

//   return count;
// }

// function maximumSeating(arr) {
//   let count = 0;
//   for (let i = 1; i < arr.length; i += 3) {
//     let j = i - 1;
//     if (arr[j] === 0) {
//       if (i - 2 < 0 && i + 2 < arr.length) {
//         let arrSliced = arr.slice(0, j + 3);
//         arrSliced.every((val) => val === 0) ? count++ : count;
//         console.log(arrSliced);
//       }

//       else if (i - 2 > 0 && i + 2 > arr.length) {
//         let arrSliced = arr.slice(-3);
//         console.log(arrSliced);
//         arrSliced.every((val) => val === 0) ? count++ : count;
//       }

//       else if (i - 2 > 0 && i + 2 < arr.length) {
//         let arrSliced = arr.slice(j - 2, j + 3);
//         arrSliced.every((val) => val === 0) ? count++ : count;
//         console.log(arrSliced);
//       }
//     }
//   }
//   return count;
// }
// function maximumSeating(arr) {
//   let count = 0;

//   for (let i = 1; i <= arr.length; i += 3) {
//     let j = i - 1;
//     if (arr[j] === 0) {
//       if (i - 2 < 0 && i + 2 < arr.length) {
//         console.log(i);

//         let arrSliced = arr.slice(0, j + 3);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//         console.log(arrSliced);
//       } else if (i - 2 > 0 && i + 2 < arr.length) {
//         console.log(i);

//         let arrSliced = arr.slice(j - 2, j + 3);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//         console.log(arrSliced);
//       } else if (i - 2 > 0 && i + 2 > arr.length) {
//         console.log(i);

//         let arrSliced = arr.slice(i, i - 3, -1);
//         console.log(arrSliced);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//       }
//     }
//   }

//   return count;
// }
// //I did not think it would take this much efforts but here I am, after 5 hours :(
// function maximumSeating(arr) {
//   //Initialize count
//   let count = 0;
//   //starting at 1 and looping over seats in a series of 1,4,7....
//   for (let i = 1; i <= arr.length; i += 3) {
//     //actual index
//     let j = i - 1;

//     //checking if seat is empty
//     if (arr[j] === 0) {
//       //checking if we have seats on our left and right,case where we have no seat on left but 2 seats on right
//       if (i - 2 < 0 && i + 2 < arr.length) {
//         let arrSliced = arr.slice(0, j + 3);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//       }
//       //checking if we have seats on our left and right,case where we have seats on both left and right
//       else if (i - 2 > 0 && i + 2 < arr.length) {
//         let arrSliced = arr.slice(j - 2, j + 3);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//       }
//       //checking if we have seats on our left and right,case where we have no seat on right but 2 seats on left
//       else if (i - 2 > 0 && i + 2 > arr.length) {
//         let arrSliced = arr.slice(i - 3, i);
//         if (arrSliced.every((val) => val === 0)) {
//           count++;
//         }
//       }
//     }
//   }

//   return count;
// }
// console.log(maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(maximumSeating([1]));
// console.log(maximumSeating([1, 0, 0, 0, 0, 1]));
// console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));
// console.log(maximumSeating([1, 0, 0, 0, 0, 0, 1]));
// console.log(
//   maximumSeating([
//     0,
//     1,
//     0,
//     0,
//     0,
//     1,
//     1,
//     0,
//     0,
//     0,
//     0,
//     1,
//     1,
//     0,
//     0,
//     1,
//     0,
//     1,
//     1,
//     0,
//     1,
//     1,
//     0,
//     0,
//     0,
//     0,
//   ])
// );
// Working 9 to 5
// Write a function that calculates overtime and pay associated with overtime.

// Working 9 to 5: regular hours
// After 5pm is overtime
// Your function gets an array with 4 values:

// Start of working day, in decimal format, (24-hour day notation)
// End of working day. (Same format)
// Hourly rate
// Overtime multiplier
// Your function should spit out:

// $ + earned that day (rounded to the nearest hundredth)
// Examples
// overTime([9, 17, 30, 1.5]) ➞ "$240.00"

// overTime([16, 18, 30, 1.8]) ➞ "$84.00"

// overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
// 2nd example explained:

// From 16 to 17 is regular, so 1 * 30 = 30
// From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
// 30 + 54 = $84.00

// function overTime(arr) {
//   //destructuring the array
//   const [timeStart, timeEnd, regularPay, overTimeMul] = arr;
//   let totalPay = 0;
//   //Calculating regular hours worked
//   //If we start between 9 and 5p
//   if (timeStart > 9 && timeStart < 17) {
//     const regularHours = 17 - timeStart;
//     //checking overtime if any
//     const overTimeHours = timeEnd > 17 ? timeEnd - 17 : 0;
//     const regularHoursPay = regularPay * regularHours;
//     totalPay = (
//       overTimeHours * overTimeMul * regularPay +
//       regularHours * regularPay
//     ).toFixed(2);
//   }
//   //checking if we worked overtime, after 5 and till 9
//   else if (timeStart < 9 || timeStart >= 17) {
//     const overTimeHours = timeEnd - timeStart;
//     const overTimePay = overTimeHours * overTimeMul * regularPay;

//     totalPay = Math.abs(overTimePay).toFixed(2);
//   }
//   return totalPay;
// }
// console.log(overTime([13, 21, 38.6, 1.8]));
// console.log(overTime([18, 6, 19, 1.5]));
// console.log(overTime([3, 4, 1, 2]));

// function getCoinBalances(arr1, arr2) {
//   //Declaring variables
//   //Starting coins
//   let coinsGreen = 3;
//   let coinsRed = 3;

//   const possibleActions = ["stealshare", "sharesteal", "shareshare"];

//   function shareORsteal(coinsGreen, coinsRed, action, response) {
//     let responses = action + response;
//     switch (responses) {
//       case possibleActions[0]:
//         coinsGreen += 3;
//         coinsRed--;
//         break;
//       case possibleActions[1]:
//         coinsGreen--;
//         coinsRed += 3;
//         break;
//       case possibleActions[2]:
//         coinsGreen += 2;
//         coinsRed += 2;
//         break;
//     }
//     return [coinsGreen, coinsRed];
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     [coinsGreen, coinsRed] = shareORsteal(
//       coinsGreen,
//       coinsRed,
//       arr1[i],
//       arr2[i]
//     );
//   }
//   return [coinsGreen, coinsRed];
// }

// console.log(
//   getCoinBalances(
//     ["share", "steal", "steal", "steal"],
//     ["share", "share", "steal", "share"]
//   )
// );

function stringExpansion(txt) {
  const regex = /\d+[a-zA-Z]+/g;
  let a = [];

  let matches = txt.match(regex);
 
  function repeater(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      let match;
      match = arr[i];

      const matchNum = match[0];
      const matchChar = match.slice(1);

      if (matchChar.length > 1) {
        for (let i = 0; i < matchChar.length; i++) {
          a.push(matchNum + matchChar[i]);
          str = repeater(a);
        }
      } else {
        for (let i = 0; i < matchNum; i++) {
          str += match[1];
        }
      }
    }
    return str;
  }

  const replacedStr = repeater(matches);
  return replacedStr;
}

console.log(stringExpansion("3n6s7f3n"));
console.log(stringExpansion("3Mat2f2"));
console.log(stringExpansion('0c3b1n7m'))
// console.log(stringExpansion("3M2u5b2a1s1h2i1r"));
