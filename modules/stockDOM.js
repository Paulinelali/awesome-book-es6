const pageWrapper = document.getElementById('main');

const stockDom = () => {
  const shelf = localStorage.getItem('bookList');
  if (shelf.length < 4 || shelf == null) {
    pageWrapper.innerHTML = '';
    pageWrapper.innerHTML = `
        <div>
            <h2>You don't have any book in your library!</h2>
        </div>
        `;
  }
  if (shelf.length > 4) {
    pageWrapper.innerHTML = '';
    const shelfToArr = JSON.parse(shelf);

    let identity = 0;
    shelfToArr.forEach((el) => {
      const book = `
            <span class="book-title">${el.title}</span> by <span class="book-author">${el.author}</span>
            <button class="remove-btn">Remove</button>`;
      const div = document.createElement('div');
      div.classList.add('book-inner-wrapper');
      div.id = identity;
      div.innerHTML = book;
      pageWrapper.appendChild(div);
      identity += 1;
    });
  }
};

export default stockDom;