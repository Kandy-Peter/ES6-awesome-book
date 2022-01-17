export default class Book {
  constructor() {
    this.bookArray = localStorage.getItem('bookstore') ? JSON.parse(localStorage.getItem('bookstore')) : [];
  }

  addNewBook(book) {
    this.bookArray.push(book);
    localStorage.setItem('bookstore', JSON.stringify(this.bookArray));
  }

  removeBook(id) {
    this.bookArray = this.bookArray.filter((book) => book.id !== Number(id));
    localStorage.setItem('bookstore', JSON.stringify(this.bookArray));
  }
}