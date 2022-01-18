import Book from './modules/book.js';
import displayBook from './modules/displayBook.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const booksContainer = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = new Book();
const newBooks = bookList.bookArray;

newBooks.forEach((book) => {
  displayBook(book);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    const id = Date.now();
    const book = {
      id,
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    bookList.addNewBook(book);
    displayBook(book);
  }
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.id === 'remove') {
    const element = e.target.parentNode;
    bookList.removeBook(element.id);
    element.remove();
  }
});

const date = DateTime.now();
const dateFormat = date.toLocaleString(DateTime.DATETIME_MED);
document.querySelector('.date').textContent = dateFormat;
