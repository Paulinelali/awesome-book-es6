import dateNow from './date.js';
import contactPage from './contactPage.js';
import stockDom from './stockDOM.js';
import {
  buildForm, noRefresh, noEmptyField, onSubmitBtn,
} from './form.js';

import removeBook from './removeBook.js';

const header = document.getElementById('header');
const pageWrapper = document.getElementById('main');

const navbar = () => {
  const navbar = `<nav class="nav">
<h2 class="logo">Awesome Books</h2>
<ul class="nav-list">
    <li class="nav-list" id="list">List</li>
    <li class="nav-list" id="add-new">Add new</li>
    <li class="nav-list" id="contact">Contact</li>
</ul>
</nav>
<section id="date-time"></section>`;
  header.innerHTML = navbar;
};

const changePage = () => {
  const navList = document.querySelectorAll('.nav-list');
  navList.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.id === 'list') {
        stockDom();
        removeBook();
      }
      if (e.target.id === 'add-new') {
        buildForm(pageWrapper);
        noEmptyField();
        onSubmitBtn();
        noRefresh();
      }
      if (e.target.id === 'contact') {
        contactPage();
      }
    });
  });
};

const displayNavbar = () => {
  navbar();

  setInterval(() => {
    document.getElementById('date-time').innerHTML = dateNow();
  }, 1000);
};

export { displayNavbar, changePage };
