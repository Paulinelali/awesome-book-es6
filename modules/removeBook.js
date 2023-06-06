import stockDom from './stockDOM.js';
import changeColor from './colorChanger.js';

function removeBook() {
  const removeButtons = document.querySelectorAll('.remove-btn');

  const arr = [];
  let inToShelf;
  let identity;
  let inShelf = localStorage.getItem('bookList');
  inShelf = JSON.parse(inShelf);
  inShelf.forEach((el) => {
    arr.push(el);
  });
  removeButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
      identity = e.target.parentNode.id;
      identity *= 1;
      arr.splice(identity, 1);
      inToShelf = JSON.stringify(arr);
      localStorage.setItem('bookList', inToShelf);
      stockDom();
      removeBook();
      changeColor();
    });
  });
}
export default removeBook;