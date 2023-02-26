const makeToast = require('./make-toast.js');

function editPostSubmit(title, content) {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  fetch(`/posts/api/edit-post/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        document.location.replace('/user/dashboard');
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((err) => {
      console.log(err);
      makeToast('Something went wrong. Please try again later.');
    });
}

const editPostButton = document.querySelector('#edit-post-button');
if (editPostButton) {
  editPostButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.querySelector('#editPostTitle').value.trim();
    const content = document.querySelector('#editPostContent').value.trim();

    if (title && content) {
      editPostSubmit(title, content);
    } else {
      makeToast('Please fill out all fields.');
    }
  });
}
