function toggle(selector) {
  const buttonElement = document.querySelector(selector);

  if (buttonElement.classList.contains('is-toggled')) {
    buttonElement.classList.remove('is-toggled');
  } else {
    buttonElement.classList.add('is-toggled');
  }
}