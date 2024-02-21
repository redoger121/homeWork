// Задание 1
// конструктор Map
console.log('Задание 1');

let counter1 = new Map();
// метод массива reduce
let iterable = [1, 2, 3, 1, 2, 1, 4, 5, 4];
let counter2 = iterable.reduce((map, item) => {
  return map.set(item, (map.get(item) || 0) + 1);
}, new Map());
// используя аргументы
let counter3 = new Map([
  ['a', 3],
  ['b', 2],
  ['c', 1],
]);

// ипользуя Objec.entries
let keys = ['a', 'b', 'c'];
let counter4 = Object.entries(keys).reduce((map, key) => {
  return map.set(key, 0);
}, new Map());

// используя строку и другой итерируемый объект
let str = 'Hello world';
let counter5 = Array.from(str).reduce((map, char) => {
  return map.set(char, (map.get(char) || 0) + 1);
}, new Map());

const counter6 = {
  a: 3,
  b: 2,
  c: 1,
};

const counter7 = new Object({ count: 0 });

const counter8 = Object.create(
  {},
  {
    count: {
      enumerable: true,
      value: 0,
    },
  }
);

console.log(counter1);
console.log(counter2);
console.log(counter3);
console.log(counter4);
console.log(counter5);
console.log(counter6);
console.log(counter7);
console.log(counter8);

//Задание 2
console.log('\nЗадание 2');
//счтетчики которые будут копироваться
let originalCounter1 = new Map([
  ['a', 3],
  ['b', 2],
  ['c', 1],
]);

const originalCounter2 = {
  a: 3,
  b: 2,
  c: 1,
};

let copiedCounter2 = new Map(Object.entries(originalCounter2));
console.log(copiedCounter2);
//Используя JSON-парсинг
let copiedCounter3 = new Map(JSON.parse(JSON.stringify([...originalCounter1])));
console.log(copiedCounter3);
//используя spread не копирует в глубину
let copiedCounter4 = { ...originalCounter2 };
console.log(copiedCounter4);
// используя цикл for
let copiedCounter5 = new Map();
for (let [key, value] of originalCounter1) {
  copiedCounter5.set(key, value);
}
console.log(copiedCounter5);
//используя метод Object.assign()
const copiedCounter6 = Object.assign({}, originalCounter2);
console.log(copiedCounter6);
//используя конструктор объекта:
const copiedCounter7 = new Object(originalCounter2);
console.log(copiedCounter7);
//используя Object.create() не полная копия так как изменения могут отразиться на
//исходном объекте через прототипное наследование
const copiedCounter8 = Object.create(originalCounter2);

//Задание 3
//Объявляемая функция
console.log('\nЗадание 3');

function makeCounter1() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter9 = makeCounter1();
console.log('Объявляемая функция')
console.log(counter9());
console.log(counter9());

//Функциональное выражение
const makeCounter2 = function () {
  let count = 0;
  return function () {
    return count++;
  };
};
let counter10 = makeCounter2();
console.log('Функциональное выражение')
console.log(counter10());
console.log(counter10());

//Стрелочная функция
const makeCounter3 = () => {
  let count = 0;
  return () => count++;
};
let counter11 = makeCounter3();
console.log('Стрелочная функция')
console.log(counter11());
console.log(counter11());

//Именованное функциональное выражение
const makeCounter4 = function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
};

let counter12 = makeCounter4();
console.log('Именованное функциональное выражение')
console.log(counter12());
console.log(counter12());



//Callback-функция
function mainFunction(callback) {
  return callback();
}

const makeCounter5 = function () {
  let count = 0;
  return function () {
    return count++;
  };
};

let counter14 = mainFunction(makeCounter5);
console.log('Callback-функция');
console.log(counter14());
console.log(counter14());


//Функция-конструктор
function MakeCounter7() {
  let count = 0;
  this.increment = function () {
    return count++;
  };
  this.getCount = function () {
    return count;
  };
}
const counter15 = new MakeCounter7();
console.log('Функция-конструктор')
console.log(counter15.getCount());
counter15.increment();
console.log(counter15.getCount());


//Продвинутое задание
//Задание 1

console.log('\nПродвинутое задание');
let str2 = 'hello world';
console.log(str2);
function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr(str2));

//Задание 2
const obj1 = { here: { is: 'on', other: '3' }, object: 'Z' };
const obj2 = { here: { is: 'on', other: '2' }, object: 'Z' };

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(obj1, obj2));
