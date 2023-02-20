const deliverToast = require('./make-toast');

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/create', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

let signupButton = document.querySelector('.signup-button') !== null;
if (signupButton) {
  document
    .querySelector('.signup-button')
    .addEventListener('click', signupFormHandler) !== null;
}
