const pattern = (number) => {
  let string = '';

  for (let i = 1; i <= number; i++) {
    for (let s = 1; s <= number - i; s++) {
      string += ' ';
    }
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    for (k = i - 1; k >= 1; k--) {
      string += k;
    }

    string += '\n';
  }

  for (let i = number-1; i >= 1; i--) {
    for (let s = 1; s <= number - i; s++) {
      string += ' ';
    }
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    for (k = i - 1; k >= 1; k--) {
      string += k;
    }

    string += '\n';
  }

  console.log(string);
};
pattern(5);



// продвинутое
class PaginationUtil {
  constructor(items, itemsOnPage) {
    if( !Array.isArray(items)){
        throw new Error('элементы должны быть переданны массивом')
    }
    this.items = items;
    this.itemsOnPage = itemsOnPage;
  }
  pageCount() {
    return Math.ceil(this.items.length / this.itemsOnPage)
  }
  itemCount() {
    return this.items.length;
  }
  pageItemCount(pageNumber) {
    const pageCount = this.pageCount();
    if (pageNumber >= pageCount || pageNumber < 0) {
      return '-1 так как такой страницы нет';
    } else if (pageNumber === pageCount - 1) {
      return `на последней странице - ${ this.items.length % this.itemsOnPage || this.itemsOnPage}`;
    } else {
      return this.itemsOnPage;
    }
  }

  pageIndex(index) {
    if (index >= this.items.length || index < 0) {
      return -1
    } else {
    return Math.floor(index / this.itemsOnPage)
    }
  }
}

const helper = new PaginationUtil(['a','b','c','d','e','f'], 4);

console.log(helper);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(1));
console.log(helper.pageIndex(2));
