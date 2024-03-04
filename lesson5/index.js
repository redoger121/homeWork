// Сортировка пузырьком - Сложность алгоритма: O(n^2)
// Сортировка выбором - Сложность алгоритма: O(n^2).
// Циклическая сортировка - Сложность алгоритма: O(n^2).
// Быстрая сортировка Сложность алгоритма в среднем: O(n log n).
// Сортировка слиянием - Сложность: O(n log n)
// Сортировка кучей -  Сложность: O(n log n)
// Сортировка расческой - сложность: O(n^2)
// Гномья сортировка - сложность: O(n^2)

// Задание 2

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function AnotherPerson(name, age, work) {
  Person.call(this, name, age);
  this.work = work;
}
AnotherPerson.prototype = Object.create(Person.prototype);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class AnotherPersonClass extends PersonClass {
  constructor(name, age, work) {
    super(name, age);
    this.work = work;
  }
}

Object.prototype.logInfo = function () {
  console.log(`log info in class about ${this.name} ${this.age} years old`);
};

console.log('Person and AnotherPerson created as function ');
const person1 = new Person('Ivan', 25);
const anotherPerson = new AnotherPerson('Alex', 30, 'Developer');
person1.logInfo();
anotherPerson.logInfo();

console.log('\nPerson and AnotherPerson created as class ');
const person2 = new PersonClass('Ivan', 25);
person2.logInfo();
const anotherPerson2 = new AnotherPersonClass('Dmitry', 22, 'Stydent');
anotherPerson2.logInfo();

// Задание 3

class SuperPerson {
  #name;
  constructor(name) {
    this.#name = name;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name should be string');
    }
    if (newName.length === 0) {
      throw new Error('Name is too short');
    }
    if (newName.length > 30) {
      throw new Error('Name is too long');
    }
    this.#name = newName;
  }
  get name() {
    return this.#name;
  }
}

class NotOnlySuperPerson extends SuperPerson {
  constructor(name, addres) {
    super(name);
    this.addres = addres;
  }
}

console.log('\nclass SuperPerson');
const superPerson1 = new SuperPerson('Dmitry');
console.log(superPerson1);
console.log(superPerson1.name);
superPerson1.name = 'Ivan';
console.log(superPerson1.name);
console.log('\nclass NotOnlySuperPerson extends by SuperPerson');
const notOnlySuperPerson = new NotOnlySuperPerson('Igor', 'Moscow');
console.log(notOnlySuperPerson);
console.log(notOnlySuperPerson.name);
notOnlySuperPerson.name = 'Egor';
console.log(notOnlySuperPerson.name);

// Продвинутое задание

// алгоритм со сложностью O(n^2) есть вложенный цикл, не очень эффективный так как вложенные циклы
// значительно увеличивают сложность алгоритма делая его менее эффектиным
const firstSum = (arr, total) => {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === total) {
        return [i, j];
      }
    }
  }
};
// Этот алгоритм имеет сложность O(n), где n - количество элементов в массиве,
// что делает его более эффективным в сравнении с предыдущим вариантом с двумя вложенными циклами.
const firstSum2 = (arr, total) => {
  let watchedNumber = new Set(arr);
  for (let i of arr) {
    const difference = total - i;
    if (watchedNumber.has(difference)) {
      return [i, difference];
    }
  }
};
// Алгорит двух указатлей иммет сложность O(n) но тут у нас на входе уже отсортированный масисв
// если бы нам надо было отсортировтаь массив самим то сложность бы уже как я понимаю определялась сложностью стортировки
// насколько я понял метод sort массива исопльзует алгоритм со сложность O(n log n),
const firstSum3 = (arr, total) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === total) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] < total) {
      left++;
    }
    if (arr[left] + arr[right] > total) {
      right--;
    }
  }
};

console.log('\nПродвинутое задание');
let result1 = firstSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 13);
let result2 = firstSum2([1, 2, 3, 4, 5, 6, 7, 8, 9], 13);
let result3 = firstSum3([1, 2, 3, 4, 5, 6, 7, 8, 9], 13);
console.log(result1);
console.log(result2);
console.log(result2);
