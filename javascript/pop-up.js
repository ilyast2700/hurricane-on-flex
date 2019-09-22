inputOne.onblur = function() {
  if (inputOne.value === '') {
    inputOne.classList.add('form-first-warning-active');
    errorOne.innerHTML = 'Please enter your name.';
  }
};

inputOne.onfocus = function() {
  if (this.classList.contains('form-first-warning-active')) {
    this.classList.remove('.form-first-warning-active');
    errorOne.innerHTML = "";
  }
