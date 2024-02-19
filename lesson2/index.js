// Базовое задание
console.log('Базовое задание')

let getLength = (value) => {
  if (value && value.length  ) {
    console.log(value.length);
  } 
  
  else if(value && value.size){
    console.log(value.size);
  }
  else {
    console.log(0);
  }
};


const map1 = new Map([
  ['name', 'Ivan'],
  ['surname', 'Kovrigin'],
  ['date', '19.02.2024'],
]);
const fruitSet = new Set(['🍉', '🍎', '🍈', '🍏']);
getLength('Hello');
getLength(10);
getLength({});
getLength([1, 2, 3, 4]);
getLength(undefined);
getLength(map1);
getLength(fruitSet);


// Продинутое задание с использованием рекурсии

let compareTree = (node1, node2) => {
  if (!node1 && !node2) {
    return true;
  }

  if (!node1 || !node2) {
    return false;
  }

  if (node1.value !== node2.value) {
    return false;
  }
  return (
    compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right)
  );
};


console.log('продвинутое задание')
// Продинутое задание с использованием обхода в ширину

let compare = (node1, node2) => {
  const queue1 = [node1];
  const queue2 = [node2];

  while (queue1.length && queue2.length) {
    const current1 = queue1.shift();
    const current2 = queue2.shift();

    // Проверка на undefined
    if (!current1 && !current2) {
      continue;
    }

    if (!current1 || !current2 || current1.value !== current2.value) {
      return false;
    }

    queue1.push(current1.left, current1.right);

    queue2.push(current2.left, current2.right);
  }

  return true;
};

const tree1 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: undefined,
      right: undefined,
    },
    right: {
      value: 4,
      left: undefined,
      right: undefined,
    },
  },
  right: {
    value: 5,
    left: undefined,
    right: undefined,
  },
};

const tree2 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: undefined,
      right: undefined,
    },
    right: {
      value: 4,
      left: undefined,
      right: undefined,
    },
  },
  right: {
    value: 5,
    left: undefined,
    right: undefined,
  },
};

console.log(compareTree(tree1, tree2));
console.log(compare(tree1, tree2));
