let deletePostID = null;

function cancelDeletePost() {
  deletePostID = null;
}

function confirmDeletePost() {
  fetch(`/posts/api/delete-post/${deletePostID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post_id: deletePostID }),
  })
    .then(() => {
      deletePostID = null;
      document.location.replace('/user/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
}

let deletePostButton = document.querySelectorAll('.delete-post-button');
if (deletePostButton) {
  // Add a click event listener to each delete button
  deletePostButton.forEach(function (button) {
    button.addEventListener('click', function () {
      deletePostID = this.id;
    });
  });
}

let confirmDeletePostButton = document.querySelector('#confirm-delete-post');
if (confirmDeletePostButton) {
  confirmDeletePostButton.addEventListener('click', confirmDeletePost);
}

let cancelDeletePostButton = document.querySelector('#cancel-delete-post');
if (cancelDeletePostButton) {
  cancelDeletePostButton.addEventListener('click', cancelDeletePost);
}
