let username = document.getElementById('username');
let logoutBtn = document.querySelector('.logout');

username.innerHTML = `Welcome ${localStorage.getItem('userName')}`;

logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('userName');
  window.location = '/';
});
