let loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function() {
  login();
});

function login() {
  let emailInput = document.getElementById('emailInput');
  let passwordInput = document.getElementById('passwordInput');
  let message = document.querySelector('.message');
  let users = JSON.parse(localStorage.getItem('users'));
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailInput.value && users[i].password === passwordInput.value) {
      localStorage.setItem('userName', users[i].name);
      message.classList.add('d-none');
      window.location = '/home.html';
    } else if (emailInput.value === '' || passwordInput.value === '') {
      message.classList.remove('d-none');
    } else {
      message.innerHTML = 'incorrect email or password';
      message.classList.remove('d-none');
    }
  }
}
