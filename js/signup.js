let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signupBtn = document.getElementById('signup');
let message = document.querySelector('.message');

let users = [];

if (localStorage.getItem('users') != null) {
  users = JSON.parse(localStorage.getItem('users'));
}

signupBtn.addEventListener('click', function () {
  if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
    message.classList.remove('d-none');
  } else if (validateEmail() && !isEmailFound()) {
    signup();
    window.location = '/';
  } 
  else if (isEmailFound()) {
    message.innerHTML = 'email already exists!';
    message.classList.remove('d-none');
  }
});

function signup() {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  clearData();
}

function validateEmail() {
  let regex = /^\w+@\w+\.\w+$/;
  if (regex.test(emailInput.value)) {
    return true;
  } else {
    message.innerHTML = 'email not valid!';
    message.classList.remove('d-none');
    return false;
  }
}

function isEmailFound() {
  return users.some((user) => user.email === emailInput.value);
}

function clearData() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;
  message.classList.add('d-none');
}
