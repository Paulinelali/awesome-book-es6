const changeColor = () => {
  const bookWrapper = document.querySelectorAll('.book-inner-wrapper');
  const removeBtn = document.querySelectorAll('.remove-btn');
  bookWrapper.forEach((el) => {
    let elId = el.id;
    elId *= 1;
    if (elId % 2 === 0) {
      el.classList.add('even-white');
    }
    if (elId % 2 !== 0) {
      el.classList.add('odd-teal');
    }
  });

  removeBtn.forEach((el) => {
    let btnId = el.id;
    btnId *= 1;

    if (btnId % 2 === 0) {
      el.classList.add('odd-teal');
    }
    if (btnId % 2 !== 0) {
      el.classList.add('even-white');
    }
  });
};

export default changeColor;