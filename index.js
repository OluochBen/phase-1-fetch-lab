function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => renderBooks(books))
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// The total number of pages of all the books
fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => {
    const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
    console.log(`Total Pages: ${totalPages}`);
  })
  .catch(error => console.error('Error fetching books:', error));

  //The 1031st character in the series
  fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(response => response.json())
  .then(character => console.log(character))
  .catch(error => console.error('Error fetching character:', error));

  //The 5th book in the series
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => {
    const fifthBook = books[4]; // Index 4 corresponds to the 5th book
    console.log(fifthBook);
  })
  .catch(error => console.error('Error fetching books:', error));

