'use strict'; //! Строгий режим разработки на новом стандарте

// s = 15;

//! переменные
// let number = 5; //? let - можно изменить. нельзя вызвать до объявления(ошибка будет). работает в своей области видимости.
// const age = 25; //? const - нельзя изменить на примитивных типах данных. Нет прямых констант . можно переназначить внутри объекта . желательно все переменные объявлять константой
// console.log(number); //? output: 5
// number = 10;
// console.log(number); //? output 10 потому что переназначили переменную на строке 9
// var name = 'Oleg'; //? var - можно вызывать откуда захочешь. если вызывать до объявления выведет undefined. работает в любой области видимости . устаревшая хуйня

//! Типы данных
// let number = 4.6;
// console.log(4/0); //? выведет Infinity. при делении на 0 выводит Infinity .

// const persone = `Oleg`;

// const bool = true; //? Булевое значение правды
// const bool2 = false; //? Булевое значение лжи

// const flex = { //? Объект - тип данных , который содержит пары ключ:значение.
//     name: `oleg`,
//     age: 25,
//     city: `Kharkov`
// };

// console.log(flex.age); //? number 25
// console.log(flex[`name`]); //? string oleg

// const arr = [`hello`, `hi`, `priv`]; //? массив - который содержит строки , идущие строго по порядку начиная с индекса 0
// console.log(arr[1]); //? string hi


// alert(1); //? modal window 1

// const result = confirm('Privet, kak dela?');  //? возвращает булиновое значение по нажатию кнопки отмены или ок
// console.log(result); //? булиновое значение . ок - true , cancel - false

// const res = prompt('Kak tebya zovut?', 'Oleg'); //? возвращает всегда строчный тип данных
// console.log(typeof(res)); //? присваивает ввиде строки то , что ответили в модальном окне

// const answers = []; //? пустой массив

// answers[0] = prompt('Как Ваше имя?', ''); //? записывает в пустой массив на 0 индекс строку , которую ввел пользователь
// answers[1] = prompt('Как Ваша фамилия?', ''); //? записывает в пустой массив на 1 индекс строку , которую ввел пользователь
// answers[2] = prompt('Сколько вам лет?', ''); //? записывает в пустой массив на 2 индекс строку , которую ввел пользователь

// console.log(typeof(answers)); //? метод typeof показывает тип данных который передается в скобках(аргументом)
// console.log(typeof(null)); //? официально признаная ошибка которая выводит объект


//! Интерполяция (бектики.) Внутри интерполяции можно вставлять переменные(ссылки) на переменные
// const category = 'toys'; //? строка toys в переменной category

// console.log(`https://someurl.com/${category}`); //? output https://someurl.com/toys

// const user = 'Ivan'; //? строка Ivan в переменной user
// alert(`Hi, ${user}`); //? output Hi, Ivan

//! Операторы в JS (+, -, %, /, *, **)
//! Унарный + - это + который идет ПЕРЕД 

// let incr = 10,
//     decr = 10;

// incr++; //? выведет 10. Сначала выводится значение , которое записано изначально.
// decr--; //? выведет 10. Сначала выводится значение , которое записано изначально.


// console.log(incr++); //? Постфиксная форма декремента - возвращает сначала старое значение (10)
// console.log(decr--); //? Постфиксная форма инкремента - возвращает сначала старое значение (10)

// console.log(++incr); //? Префиксная форма декремента - возвращает сразу новое значение (11)
// console.log(--decr); //? Префиксная форма инкремента - возвращает сразу новое значение (9)

// console.log(5 % 2); //? % - возвращает остаток при делении (1)

// console.log(2 * 4 == '8'); //? true

//! && - оператор И . работает когда оба варианта правдивы . Прерывается на лжи . и выводит значение подобно return
//! || - оператор ИЛИ. Работает когда один из вариантов правдив. Прерывается на правде . и выводит значение подобно return

// const isChecked = false,
//     isClose = true;
// console.log(isChecked || !isClose); //? выведет false. ! перед булевым значением переворачивает его . !true = false / !false = true. !! перед типом конвертирует в булевое значение. !!'string' = true. 
// console.log(typeof(!!'string')); //? output true в типе boolean

//! Работа с git и github + git kraken

// git init //? инициализирует папку для работы с гитом .
// git add . //? помечает в каких файлах отслеживать изменения. точка означает следить за всеми файлами. Можно указать явно
// git commit -m "first commit" //? приписывает сообщение о изменении в файлах
// git push //? пушит изменения.

//! Условия . проверка . Условные операторы

// if (4 == 9) { //? в скобках преобразовывается все к boolean типу false or true
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
// switch (num) { //? Проверяет только на строгое сравнение
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

// let num = 50;

// while (num < 55) {  //! пока условие не выполнено , будут происходить действия
//     console.log(num);
//     num++;
// }

// do {  //! Сначала выполняет действие в блоке do {} , а потом проверяет уже условие и при необходимости выходит из цикла
//     console.log(num);
//     num++;
// }
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) { //! Сначала задается переменная; потом задается условие; что будет проиходить дальше;
//     if (i === 6) {
//         continue; //! если даже верно , пропускает блок кода и выполнятся последующий. противоположность break;
//     }
//     console.log(i); //! само действие 
// }


//! Функции (function declaration) - можно вызвать перед блоком функции как переменную var.

// let num = 10;

// function showFirstMessage(text) { //! имя функции должно быть глаголом(действие или изменяющееся состояние) с припиской над чем выполняется действие
//     console.log(text);
//     let num = 20; //! переменные внутри функции снаружи не доступны. они видны только внутри блока функции {}
//     console.log(num); //! Если локальная переменная внутри блока функции не будет найдена , то будет поиск по остальному коду и искать глобальную переменную с таким именем и использовать ее
// }

// showFirstMessage('Hello world!');
// console.log(num);

//! Замыкание - функция вместе со всеми внешними переменными , которые ей доступны.

// function calc (a, b) {
//     return (a + b); //! return позволяет вернуть значение во внешний мир . 
//     console.log('hello'); //! Весь код после return называется Unreachable и он не выполняется , т.е. "мертвый"
// }

// console.log(calc(2,2));
// console.log(calc(4,6));
// console.log(calc(10,2));


//! переменная num выводится наружу с помощью return и передается в другую переменную , которую потом можно использовать.
// function ret() {
//     let num = 50;

//     //

//     return num;
// } //! в function declaration точки с запятой в конце нет.

// const anoterNum = ret(); //? Так можно достать переменную , объявленную локально в функции. через return
// console.log(anoterNum); //? output 50

//! Function Expression - Создается только тогда , когда доходит поток кода, можно вызвать только после объявления.

// const logger = function() {
//     console.log('Hello');
// }; //! В function expression точка с запятой в конце обязательна!!!

// logger();

//! Стрелочная функция Arrow Function
// const calc = (a, b) => { return a + b}; //! Не имеет своего контекста

//! Методы и свойства строк и чисел

// const str = 'testik';
// const arr = [1, 2, 3];

// console.log(str[2]); //! output: s. здесь обращение к символу строки по индексу 2. отсчет всегда с нуля.
// console.log(arr.length); //! Метод length возвращает количество элементов внутри строки / массива

// console.log(str.toUpperCase()); //! Делает все строчные в заглавные буквы. Возвращает новое значение и не изменяет старую строку к которой применился метод
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit')); //! выводит индекс элемента или для поиска . Поиск подстроки

// const logg = 'Привет, я Олег и я очень сильно люблю Машу';

// const q = logg.slice(10, 14); //! .slice(a, b) Метод позволяющий обрезать строку. аргумент а - индекс с которого будет идти обрезание, b - конец индекса ДО которого будет обрезана строка. 
// const w = logg.slice(32);
// const rezalt = `${q} ${w}`;
// console.log(rezalt);
// console.log(logg.slice(6, -1));

// console.log(logg.substring(6, 11)); //! Тоже самое что и slice но нельзя использвать отрицательные значения

// console.log(logg.substr(6, 2)); //! Вторым аргументом укаывается СКОЛЬКО символов нужно вырезать от первого аргумента


// const num = 12.2;
// console.log(Math.round(num)); //! Метод округляет число

// const test = '12.2px';
// console.log(parseInt(test)); //! Преобразует в типд данных number и выводит только численные значения
// console.log(parseFloat(test)); //! Возвращает число в десятичном значении

//! CallBack функции - должна выполниться сразу после того , как другая функция завершила свое выполнение
/*
function first() {
    // code
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learJS(`Javascript`, function() {
    console.log('Я прошел этот урок!');
});
*/
//! Объекты, деструктуризация(вынос свойств из объектов) объектов (ES6)
//! Объекты - это структуры , которые позволяют сохранять в себе любые типы данных в виде ключ: значение
//! Методы - встроенное свойство/функция внутрь объекта , который выполняет какое - либо действие
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() { //! Создали метод внутри объекта options
        console.log('test');
    }
};

options.makeTest();

const {border, background} = options.colors; //! Деструктуризация объекта . вынесли свойства из объекта в отдельные переменные.
console.log(border);
*/

// console.log(Object.keys(options)); //! Выведет массив со всеми ключами внутри объекта. Возвращает имена перечислимых строковых свойств и методов объекта.
/*
console.log(options.name);

delete options.name; //! Метод позволяет удалить пару ключ:значение с объекта
console.log(options);
//! Прямых констант не существует !!!!

let counter = 0;
for (let key in options) { //! in позволяет перебрать значения внутри объекта
    if (typeof(options[key]) === 'object') {
        for ( let i in options[key]) {
            console.log(`Свойствой ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);
*/
// console.log(Object.keys(products).length); //! Подсчет ключей в объекте


//! Массивы и псевдомассивы (у псевдомассивов не будет никаких методов!!!!)
/*
const arr = [1, 2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { //! функция чтобы сортировать числа по порядку вызывается как аргумент в методе .sort();
    return a - b;
}

/*
arr[99] = 0;

console.log(arr.length); //! последний индекс массива + 1 . Могут спросить на собеседовании
*/
/*
arr.forEach(function(item, i, arr) { //! Более настраивыемый перебор как for только имеет внутри callback функцию. Принимает до 3 аргументов (1. то что мы будем перебирать т.е. тело массива(назвать можно как угодно). 2. Номер по порядку. 3. Ссылка на массив , который перебираем )

    console.log(`${i}: ${item} внутри массива ${arr}`);

});

// arr.pop(); //! Удаляет последний элемент из массива
arr.push(10); //! добавляет в конец массива элемент

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for ( let value of arr) { //! работает только с масивоподобными сущностями
    console.log(value); 
}

const str = prompt('', '');
const products = str.split(', '); //! Метод split указывает разделитель и превращает строку в массив.
products.sort(); //! Сортирует массив и если не передавать никаких аргументов , сортировка происходит по алфавиту .
console.log(products.join('; ')); //! Метод join() указывает разделитель и превращает массив в строку .
*/

//! Передача по ссылке или по значению. Spread оператор (ES6 - ES9)
//! Примитивные типы данных (строки, числа, булеаны) передаются по знаку равно(присваиванию)
//! Типы данных вроде объектов , массивов , функций и т.п. передаются только по ссылке

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //! Ссылка передается

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) { //! Функция для копирования объекта , при этом сохраняет старые значения , а новые переносит в новый объект
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// console.log(newNumbers);

//! При клонировании создаются глубокие или поверхностные копии . Пример выше - поверхностная копия.

// const add = {
//     d: 17,
//     e: 20
// };

 //console.log(Object.assign(numbers, add)); //! Метод объекта .assign позволяет объединять один объект с другим(первый аргумент - куда будет внесен, второй откуда)| Object.assign(a, b) - копирует значения всех перечислимых собственных свойств из одного или нескольких исходных объектов в целевой объект. Возвращает целевой объект. (a - куда будут перенесены свойства, b - откуда).

// const clone = Object.assign({}, add); //! Здесь переносятся свойства из объекта add в пустой объект с переменной clone. 

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //! .slice(a,b) - обрезает массив, a - старт , b - конец

// newArray[1] = 'dfgfdgdfg';
// console.log(newArray);
// console.log(oldArray);

//! ES6 - ES9 copy obj , arr. Spread (...) - вытаскивает внутринности массива и соединяет все в один массив 
// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const valka = [2, 5, 7];

// log(...valka);

// const array = ['a', 'b'];

// const newAarray = [...array];


// const jh = {
//     one: 1,
//     two: 2
// };

// const newJh = {...jh};
// console.log(newJh);


//! Основы ООП, прототипно-ориентированное наследование
/*
let str = 'some'; //! примитивная строка
let strObj = new String(str); //! строка обернутая в объект

console.log(typeof(str)); //! вернет тип строка
console.log(typeof(strObj)); //! вернет тип объект

console.dir([1,2,3,4]);


const soldier = {
    health: 400,
    armor: 100,
    amo: 89,
    sayPrivet: function() {
        console.log('privet');
    }
};


const jonh = Object.create(soldier); //! Создает переменную john и передает ей доступ ко всем свойствам от переменной soldier(протитипирование).

console.log(jonh.amo);




/*
const jonh = {
    health: 100
};

jonh.__proto__ = soldier; //! позволяет наследовать все ключ значения с одного объекта для другого(старый формат использования)

Object.setPrototypeOf(jonh, soldier); //! Новый стандарт прототипирование объектов. Первый аргумент указывает куда будут помещены прототипы, второй указывает от куда их взаимствовать.


console.log(jonh.amo);
jonh.sayPrivet();
*/

//! Работа с консолью , отлавливаем ошибки. Breakpoints
//! debugger; - в консоли отладчика стопает код на это месте , устанавливает брейкпоинт для дебага


//! Динамическая типизация
//* To String
//* 1)Через объект String
// console.log(typeof(String(1)));

//* 2) Конкатенация со строкой
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

//* To Number
//* 1) Через объект Number
// console.log(typeof(Number('fgh')));

//* 2) Унарный плюс
// console.log(typeof(+'fgh'));

//* 3) parseInt
// console.log(typeof(parseInt('15px', 10)));

//* 4) Унарный плюс
// let answer = +prompt("hello", "");

//! Все данные , которые будут получены от пользователя всегда будут приходить в виде строки!!

//* To Boolean
//! Всегда неправда False - 0, null, '', undefined, NaN;  Остальное , что есть - ПРАВДА TRUE!!!
//* 1)
// let switcher = null;

// if (switcher) {
//     console.log('working...'); // false
// }

// switcher = 1;

// if (switcher) {
//     console.log('working...'); // true
// }

//* 2)
// console.log(typeof(Boolean('4')));

//* 3)
// console.log(typeof(!!"33333"));

//! Задачи, которые могут быть на собеседованиях у Junior JavaScript Developer;
// Какое будет выведено значение: let x = 5; alert( x++ ); //? 5 +

//? [] + false - null + true = '' + false - null + true = 'false' - null + true = NaN + true = NaN;
// Чему равно такое выражение: [ ] + false - null + true //? Будет NaN потому что пустой массив = пустая строка. к пустой строке прибаляют false и оно преобразуется в строку 'false', далее отнимают null (математические действия не со строкой = NaN) и дальше прибавляется true что равно тоже NaN.-

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); //* 2+
//? у примитивов ссылочное присваивание

// Чему равна сумма [ ] + 1 + 2 //? ''+1+2 = '1'+2 = '12'+

// Что выведет этот код: alert( "1"[0] ) //?10- это обращение к индексу 0, а в строке '1' и так единственный индекс под нулем . правильный ответ - 1

// Чему равно 2 && 1 && null && 0 && undefined //? false- Правильный ответ будет null! Оператор && всегда запинается на лжи(false) и на чем запнулся , то и выводит в консоль

// Есть ли разница между выражениями? !!( a && b ) и (a && b) //? нет-  два знака !! превращает выражение в Булиновое и булиновое выражение не равны второму сука!!!!!

// Что выведет этот код: alert( null || 2 && 3 || 4 ); //? true- Вернется тройка .

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b //? нет+

// Что выведет этот код: alert( +"Infinity" ); //? NaN-  Infinity выведет !!!! Дибил ты сука !!! Учи матчасть ! и унарный + идет перед строкой , который строку преобразует в тип данных число. ебаааа ты тупой нахуй

// Верно ли сравнение: "Ёжик" > "яблоко" //? да- Будет false сука . 

// Чему равно 0 || "" || 2 || undefined || true || falsе //? true-   Ответ будет 2. Ты даун.

//! &&(И) - Запинается на лжи !!!
//! ||(ИЛИ) - Запинается на правде !!!
