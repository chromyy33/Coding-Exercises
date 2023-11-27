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

function editWords(arr) {
  let results = []; // empty array to store results for multiple values
  for (let i = 0; i < arr.length; i++) {
    let arrSplit = arr[i].split(""); //converting string to arr
    let index =
      arrSplit.length % 2 === 0
        ? arrSplit.length / 2
        : Math.trunc(arrSplit.length / 2); // checking for arr middle point for '-' insertion
    arrSplit.splice(index, 0, "-"); //saying splice 0 items at index 'index'(var) and add '-'

    results.push(arrSplit.reverse().join("").toUpperCase()); //reverse,join and uppercase and push in results arr
  }
  return results;
}

// console.log(editWords(["new york city"]));
console.log(editWords([""]));
