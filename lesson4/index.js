// Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массивы в JS являются неправильными так как они  могут хранить в себе данные разных типов, и в JS возможно изменять длину массива. Реализованы как частный случай хэш-таблиц.

// Упорядоченный список: JavaScript массивы, как упорядоченные списки, хранят элементы в порядке их добавления, что обеспечивает доступ к элементам по их индексам.
// Стек: Методы push и pop позволяют использовать массивы как стек, где элементы добавляются и извлекаются с конца.
// Очередь: Методы push и shift можно использовать для реализации структуры данных очереди, где элементы добавляются в конец, а извлекаются из начала.
// Двусторонняя очередь: Методы push, pop, unshift, и shift позволяют использовать массивы в качестве двусторонней очереди, где элементы могут добавляться и извлекаться с обоих концов.

const obj = {
  item: 'some value',
};

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.apply(obj);
logger.bind(obj)();
logger.call(obj);

Function.prototype.customBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('no function in context');
  }
  const targetFn = this;
  const args = Array.from(arguments).slice(1);
  return function () {
    return targetFn.apply(context, args);
  };
};


Function.prototype.customBind2 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('no function in context');
      }
    let object = {...context};
    object.func = this;
    return function() {
      return object.func(arguments);
    };
  };
console.log('_________________________________________________________________')
console.log('используя apply')
logger.customBind(obj)();
console.log('без  apply и call')
logger.customBind2(obj)();


