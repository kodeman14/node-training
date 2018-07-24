var books = [];
books[1] = {title: 'Lord of the rings', author: 'J. R. R. Tolkien'};
books[2] = {title: 'Under the dome', author: 'Stephen King'};

module.exports.findBook = function(isbn) {
  return books[isbn];
};

module.exports.updateBook = function(isbn, book) {
  books[isbn] = book;
};