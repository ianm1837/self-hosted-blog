const deliverToast = require('./make-toast');

const loginFormHandler = async (event) => {
  event.preventDefault();



  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/user/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/user/dashboard');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

let loginForm = document.getElementById('login-form')
if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
}
