'use strict'; //! Строгий режим разработки на новом стандарте

// s = 15;

//! переменные
// let number = 5;
// const age = 25;
// console.log(number);
// number = 10;
// console.log(number);

// var name = 'Oleg';

//! Типы данных
// let number = 4.6;
// console.log(4/0);

// const persone = `Oleg`;

// const bool = true;
// const bool2 = false;

// const flex = {
//     name: `oleg`,
//     age: 25,
//     city: `Kharkov`
// };

// console.log(flex.age);
// console.log(flex[`name`]);

// const arr = [`hello`, `hi`, `priv`];
// console.log(arr[1]);


// alert(1);

// const result = confirm('Privet, kak dela?');  // возвращает булиновое значение
// console.log(result);

// const res = prompt('Kak tebya zovut?', 'Oleg'); // возвращает только строку
// console.log(typeof(res));

// const answers = [];

// answers[0] = prompt('Как Ваше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null)); // официально признаная ошибка которая выводит объект


//! Интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}`);

// const user = 'Ivan';
// alert(`Hi, ${user}`);

//! Операторы в JS

// Унарный + - это + который идет ПЕРЕД

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;


// console.log(incr++); // Постфиксная форма декремента - возвращает сначала старое значение
// console.log(decr--); // Постфиксная форма инкремента - возвращает сначала старое значение 

// console.log(++incr); // Префиксная форма декремента - возвращает сразу новое значение
// console.log(--decr); // Префиксная форма инкремента - возвращает сразу новое значение

// console.log(5 % 2); // % - возвращает остаток

// console.log(2 * 4 == '8');

// && - оператор И . работает когда оба варианта правдивы
// || - оператор ИЛИ. Работает когда один из вариантов правдив.

// const isChecked = false,
//     isClose = true;
// console.log(isChecked || !isClose);

//! Работа с git и github + git kraken

// git init
// git add .
// git commit -m "first commit"
// git push

//! Условия 

// if (4 == 9) { // в скобках преобразовывается все к boolean типу false or true
//     console.log('OK');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('no');
// } else {
//     console.log('yes');
// }

//! Тернарный оператор

// (num === 50) ? console.log('Ok') : console.log('no');

//! Switch case
// const num = 50;
// switch (num) { // Проверяет только на строгое сравнение
//     case 49:
//         console.log('No!');
//         break;
//     case 51:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('ok');
//         break;
//     default:
//         console.log('default');
//         break;
// }

//! Циклы 
/*
let num = 50;

// while (num < 55) {  // !пока условие не выполнено , будут происходить действия
//     console.log(num);
//     num++;
// }

do {  //! Сначала делает , а потом проверяет уже условие и при необходимости выходит из цикла
    console.log(num);
    num++;
}
while (num < 55) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) { //! Сначала задается переменная; потом задается условие; что будет проиходить дальше;
    if (i === 6) {
        continue;
    }
    console.log(i); //! само действие 
}
*/

//! Функции (function declaration) - Создается до начала скрипта и можно вызвать перед объявлением.
/*
let num = 10;

function showFirstMessage(text) { //! имя функции должно быть глаголом с припиской над чем выполняется действие
    console.log(text);
    let num = 20; //! переменные внутри функции снаружи не доступны. они видны только внутри блока функции {}
    console.log(num); //! Если локальная переменная внутри блока функции не будет найдена , то будет поиск по остальному коду и искать глобальную переменную с таким именем и использовать ее
}

showFirstMessage('Hello world!');
console.log(num);

//! Замыкание - функция вместе со всеми внешними переменными , которые ей доступны

function calc (a, b) {
    return (a + b); //! return позволяет вернуть значение во внешний мир . 
    console.log('hello'); //! Весь код после return называется Unreachable и он не выполняется , т.е. "мертвый"
}

console.log(calc(2,2));
console.log(calc(4,6));
console.log(calc(10,2));


//! переменная num выводится наружу с помощью return и передается в другую переменную , которую потом можно использовать.
function ret() {
    let num = 50;

    //

    return num;
} //! в function declaration точки с запятой в конце нет.

const anoterNum = ret();
console.log(anoterNum);

//! Function Expression - Создается только тогда , когда доходит поток кода, можно вызвать только после объявления.

const logger = function() {
    console.log('Hello');
}; //! В function expression точка с запятой в конце обязательна!!!

logger();
*/
//! Стрелочная функция Arrow Function
// const calc = (a, b) => { return a + b}; //! Не имеет своего контекста

//! Методы и свойства строк и чисел
/*
const str = 'testik';
// const arr = [1, 2, 3];

// console.log(str[2]); //! Метод length возвращает количество элементов внутри строки / массива
// console.log(arr.length); //! будет 3 . возвращает количество элементов в массиве

console.log(str.toUpperCase()); //! Делает все строчные в заглавные буквы. Возвращает новое значение и не изменяет старую строку к которой применился метод
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //! выводит номер элемента или для поиска . Поиск подстроки

const logg = 'Привет, я Олег и я очень сильно люблю Машу';

const q = logg.slice(10, 14);
const w = logg.slice(32);
const rezalt = `${q} ${w}`;
console.log(rezalt);
// console.log(logg.slice(6, -1));

console.log(logg.substring(6, 11)); //! Тоже самое что и slice но нельзя использвать отрицательные значения

console.log(logg.substr(6, 2)); //! Вторым аргументом укаывается СКОЛЬКО символов нужно вырезать от первого аргумента


const num = 12.2;
console.log(Math.round(num)); //! Метод округляет число

const test = '12.2px';
// console.log(parseInt(test)); //! Переводит число в другую систему вычисления
console.log(parseFloat(test)); //! Возвращает число в десятичном значении
*/