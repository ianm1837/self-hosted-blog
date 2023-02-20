const deliverToast = require('./make-toast');

const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    response.json().then((data) => {
      deliverToast(data.message);
    });
  }
};

document.querySelector('#logout').addEventListener('click', logout);
