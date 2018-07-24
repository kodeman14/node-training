var books = {};

module.exports.findBook = function(isbn) {
    return books[isbn];
};

module.exports.updateBook = function(isbn, book) {
    books[isbn] = book;
};