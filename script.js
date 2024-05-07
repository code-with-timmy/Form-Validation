const Username = document.getElementById('name');
const password = document.getElementById('password');
const cnPassword = document.getElementById('confirm-password');
const errMessage = document.querySelector('.error-message');
const form = document.getElementById('form');
const container = document.querySelector('.container');

form.addEventListener('submit', function (e) {
  let message = [];
  if (Username.value == '' || password.value == '') {
    message.push('Invalid Name or Password');
  }

  if (password.value !== cnPassword.value) {
    message.push('2 passwords do not match');
  }

  if (message.length > 0) {
    e.preventDefault();
    errMessage.textContent = message;
  } else {
    container.innerHTML = '';
    container.innerHTML = 'Welcome Back';
  }
});
