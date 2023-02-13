const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

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
      document.location.replace('/');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);

let loginButton = document.querySelector('.login-button') !== null;
if (loginButton) {
  document
    .querySelector('.login-button')
    .addEventListener('click', loginFormHandler);
}

let signupButton = document.querySelector('.signup-button') !== null;
if (signupButton) {
  document
    .querySelector('.signup-button')
    .addEventListener('click', signupFormHandler) !== null;
}

function deliverToast(message) {
  const toastLiveExample = document.getElementById('error-toast');
  const toastBody = document.getElementById('toast-body');
  toastBody.innerText = message;
  const toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}
