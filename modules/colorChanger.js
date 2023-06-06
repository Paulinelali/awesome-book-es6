const changeColor = () => {
  const bookWrapper = document.querySelectorAll('.book-inner-wrapper');
  const removeBtn = document.querySelectorAll('.remove-btn');
  bookWrapper.forEach((el) => {
    let elId = el.id;
    elId *= 1;
    if (elId % 2 === 0) {
      el.classList.add('even-white');
      el.classList.add('even-shadow');
    }
    if (elId % 2 !== 0) {
      el.classList.add('odd-teal');
      el.classList.add('odd-shadow');
    }
  });

  removeBtn.forEach((el) => {
    let btnId = el.id;
    btnId *= 1;

    if (btnId % 2 === 0) {
      el.classList.add('odd-teal');
      el.classList.add('odd-shadow');
    }
    if (btnId % 2 !== 0) {
      el.classList.add('even-white');
      el.classList.add('even-shadow');
    }
  });
};

export default changeColor;