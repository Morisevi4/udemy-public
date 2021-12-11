"use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// //start();

// const personMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false};

// function rememberMyFilms() {
//     let i = 0;
// while (i < 2) {
//     const ans1 = prompt('Один из последних просмотренных фильмов?', ''),
//           ans2 = prompt('На солько оцените его?', '');
//     if (ans1 != '' && ans2 != '' && ans1 != null && ans2 != null && ans1.length <= 50) {
//         console.log('done');
// } else {
//     console.log('error');
//     i--;
// } i++; }}

// //rememberMyFilms();

// function detectPersonaLevel () {
//     if (personMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personMovieDB.count > 10 && personMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personMovieDB.count > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка, попробуйте ввести данные снова');
//     }
// }

// //detectPersonaLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personMovieDB);
//     }
// }
// //showMyDB(personMovieDB.privat);

// function wrightYourGenres() {
//     for (let i=1; i<=3; i++) {
//         personMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
// }
// wrightYourGenres();

// console.log(personMovieDB);

// for (let i = 0; i < 2; i++) {
//     const ans1 = prompt('Один из последних просмотренных фильмов?', ''),
//           ans2 = prompt('На солько оцените его?', '');
    
//     if (ans1 != null && ans2 != null && ans1 != '' && ans2 != '' && ans1.length < 50) {      
//         personMovieDB.movies [ans1] = ans2;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--; 
//     }
// }

// if (4 === 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Перебор');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch (num) {
//     case '50': 
//         console.log('incorrect');
//         break;
//     case '100':
//         console.log('incorrect');
//         break;
//     case 50:
//         console.log('correct');
//         break;
//     default:
//         console.log('try again');
//         break;
// }

//let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// } 

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i<9; i++) {
//     if (i === 6){
//         //break;
//         continue;
//     }
//     console.log(i);
// }


// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     console.log(num);
// }
// showFirstMessage('Hello World!');
// console.log(num);

// const logger = function () {
//     console.log('hello');
// };

// const calc = (a, b) => {
//     return a + b;
// };
// console.log(calc(4, 4))s;

// let str = 'TeSt';
// str = str.toUpperCase();
// str = str.toLowerCase();
// str = str.indexOf('S'); // если -1, значит символ или кусочек строки не найден
// str = str.slice(1, 3); // строка начнется с 1 индекса и закончится индексом 2. индекс 3 не включается. 
// str = str.substring(1, 3); // тоже самое что и slice
//str = str.substr (1, 3); // оставляем 3 символа начиная с индекса 1
//
// console.log(str);

// let num = 3.33;
// num = Math.floor(num);
// console.log(num);

// let test = '12.2px';
// console.log(parseInt(test));

// function first () {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log('Я прошел эток урок!');
// }

// learnJS('JS', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// //options.makeTest();

// const {border} = options.colors;
// console.log(border);

//console.log(Object.keys(options));

//console.log(options['colors']['border']);
//delete options.name;

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойтво ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойтво ${key} имеет значение ${options[key]}`);
//     }
//     counter++;
// }
// console.log(counter);

// const arr = [21, 12, 3, 51, 8];
// arr.sort(compareNums);

// function compareNums(a, b) {
//     return a - b;
// }
// console.log(arr.sort(compareNums));


// const arr = ['dd', 'cc', 'aa', 'bb'];
// const sort = arr.sort();
// console.log(sort);
//const str = 'aa bb cc dd';
//const arr = prompt('', '');
//const newArr = str.split('');
//const newArr = arr.join('');
//console.log(newArr);
//console.log(newArr.length);

// arr.forEach(function(item, index, arr) {
//     console.log(`индекс: ${index}; элемент: ${item}; массив: ${arr}`);
// });
 
// arr[19] = 456;
// console.log(arr.length);
// console.log(arr);

//arr.push(13);

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let j of arr) {
//     console.log(j);
// }

// const str = prompt ('', '');
// const products = str.split(', ');
// console.log(products.join('; '));
// products.sort();