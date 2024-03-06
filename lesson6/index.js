//1)
// Выведется
// 1 3 6 4 2 5

// 2)
// Выведется
//1 3 2

// 3)
// Выведется
//abc

// 4)
// Выведется
//1 123
//2 123
//3 321
//4 undefined

// 5)
// Выведется
// 1 4 3 2

//Продвинутое здание
async function IndexesOfEltments(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(i);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

IndexesOfEltments(array);
