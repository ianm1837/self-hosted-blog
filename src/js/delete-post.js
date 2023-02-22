// let deletePostID = null;

// function deletePost(event) {
//   // deletePostID = event.target.id;
//   console.log(event.target.id);
// }

// function cancelDeletePost() {
//   deletePostID = null;
//   console.log(deletePostID);
// }

// function confirmDeletePost() {
//   fetch(`/api/posts/${deletePostID}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(() => {
//     document.location.replace('/dashboard');
//   });
// }

let deletePostButton =
  document.querySelectorAll('.delete-post-button') !== null;
if (deletePostButton) {
  deletePostButton.forEach(function (button) {
    button.addEventListener('click', function () {
      console.log('Delete button clicked: ' + this);
    });
  });
}
