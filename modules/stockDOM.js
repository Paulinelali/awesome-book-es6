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
    pageWrapper.innerHTML = '<h2 class="page-title">All awesome books</h2>';
    const unOrderList = document.createElement('ul');
    const shelfToArr = JSON.parse(shelf);

    let identity = 0;
    let btnIdentity = 0;
    shelfToArr.forEach((el) => {
      const book = `
            <li class="book-list" id ="${btnIdentity}">
                <div><span class="book-title">"${el.title}"</span> by <span class="book-author">${el.author}</span></div>
                <button class="remove-btn " id ="${btnIdentity}">Remove</button>
            </li>`;
      btnIdentity += 1;
      const div = document.createElement('div');
      div.classList.add('book-inner-wrapper');
      div.id = identity;
      div.innerHTML = book;
      unOrderList.classList.add('book-list-wrapper');
      unOrderList.appendChild(div);
      pageWrapper.appendChild(unOrderList);
      identity += 1;
    });
  }
};

export default stockDom;