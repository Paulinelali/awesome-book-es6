// build form
const buildForm = (pageWrapper) => {
  pageWrapper.innerHTML = '';
  const formField = `
    <h2 class="page-title">Add a new book</h2>
    <form action="" id="book-form">
        <input type="text" placeholder="Title" id="book-title" > <br>
        <input type="text" placeholder="Author" id="book-author"> <br>
        <button type="submit" id="add-btn">Add</button>
    </form>`;

  pageWrapper.innerHTML = (formField);
};

function noRefresh() {
  const btn = document.getElementById('add-btn');
  const formReset = document.getElementById('book-form');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    formReset.reset();
  });
}

function noEmptyField() {
  const btn = document.getElementById('add-btn');
  const bookTitle = document.getElementById('book-title');
  const bookAuthor = document.getElementById('book-author');
  setInterval(() => {
    if (bookTitle.value < 1 || bookAuthor.value < 1) {
      btn.disabled = true;
      btn.classList.add('grey-bg');
    } else {
      btn.disabled = false;
      btn.classList.remove('grey-bg');
    }
  }, 250);
}

function onSubmitBtn() {
  const submitBtn = document.getElementById('add-btn');

  submitBtn.addEventListener('click', () => {
    const bookAuthor = document.querySelector('#book-author');
    const bookTitle = document.querySelector('#book-title');
    const arr = [];

    const shelf = localStorage.getItem('bookList');
    if (shelf) {
      const shelfToArr = JSON.parse(shelf);
      shelfToArr.forEach((el) => {
        arr.push(el);
      });
    }

    const newBook = {
      author: bookAuthor.value,
      title: bookTitle.value,
    };

    arr.push(newBook);
    const arrToLocal = JSON.stringify(arr);
    localStorage.setItem('bookList', arrToLocal);
  });
}

export {
  buildForm, noEmptyField, noRefresh, onSubmitBtn,
};