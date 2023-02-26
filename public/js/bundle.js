/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/create-account.js":
/*!**********************************!*\
  !*** ./src/js/create-account.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst signupFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-signup').value.trim();\n  const password = document.querySelector('#password-signup').value.trim();\n\n  if (username && password) {\n    const response = await fetch('/user/api/create-account', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/user/dashboard');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('.signup-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('.signup-button')\n    .addEventListener('click', signupFormHandler) !== null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWFjY291bnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbGYtaG9zdGVkLWJsb2cvLi9zcmMvanMvY3JlYXRlLWFjY291bnQuanM/YjQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxpdmVyVG9hc3QgPSByZXF1aXJlKCcuL21ha2UtdG9hc3QnKTtcblxuY29uc3Qgc2lnbnVwRm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZS1zaWdudXAnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLXNpZ251cCcpLnZhbHVlLnRyaW0oKTtcblxuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvdXNlci9hcGkvY3JlYXRlLWFjY291bnQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy91c2VyL2Rhc2hib2FyZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxubGV0IHNpZ251cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXAtYnV0dG9uJykgIT09IG51bGw7XG5pZiAoc2lnbnVwQnV0dG9uKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXAtYnV0dG9uJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWdudXBGb3JtSGFuZGxlcikgIT09IG51bGw7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/create-account.js\n");

/***/ }),

/***/ "./src/js/create-comment.js":
/*!**********************************!*\
  !*** ./src/js/create-comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst commentFormHandler = async (event) => {\n  event.preventDefault();\n\n  const commentData = document.querySelector('#comment-content').value.trim();\n  const postId = document.querySelector('#post-title').dataset.postNumber;\n\n  if (commentData) {\n    const response = await fetch('/posts/api/create-comment', {\n      method: 'POST',\n      body: JSON.stringify({ commentData, postId }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.reload();\n\n      // console.log('response ok');\n      // return;\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet signupButton = document.querySelector('#post-comment-button') !== null;\nif (signupButton) {\n  document\n    .querySelector('#post-comment-button')\n    .addEventListener('click', commentFormHandler) !== null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLWNvbW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VsZi1ob3N0ZWQtYmxvZy8uL3NyYy9qcy9jcmVhdGUtY29tbWVudC5qcz83YmViIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGl2ZXJUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdCcpO1xuXG5jb25zdCBjb21tZW50Rm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjb21tZW50RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LWNvbnRlbnQnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHBvc3RJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0LXRpdGxlJykuZGF0YXNldC5wb3N0TnVtYmVyO1xuXG4gIGlmIChjb21tZW50RGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9wb3N0cy9hcGkvY3JlYXRlLWNvbW1lbnQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudERhdGEsIHBvc3RJZCB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIG9rJyk7XG4gICAgICAvLyByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGl2ZXJUb2FzdChkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5sZXQgc2lnbnVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bvc3QtY29tbWVudC1idXR0b24nKSAhPT0gbnVsbDtcbmlmIChzaWdudXBCdXR0b24pIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignI3Bvc3QtY29tbWVudC1idXR0b24nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbW1lbnRGb3JtSGFuZGxlcikgIT09IG51bGw7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/create-comment.js\n");

/***/ }),

/***/ "./src/js/create-post.js":
/*!*******************************!*\
  !*** ./src/js/create-post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst newPostFormHandler = async (event) => {\n  event.preventDefault();\n\n  const title = document.querySelector('#new-post-title').value.trim();\n  const content = document.querySelector('#new-post-content').value.trim();\n  const timestamp = Date.now();\n\n  if (title && content) {\n    const response = await fetch('/posts/api/create-post', {\n      method: 'POST',\n      body: JSON.stringify({ title, timestamp, content }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/user/dashboard');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet newPostButton = document.querySelector('.new-post-button') !== null;\nif (newPostButton) {\n  document\n    .querySelector('.new-post-button')\n    .addEventListener('click', newPostFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY3JlYXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQkFBMkI7QUFDeEQsaUJBQWlCLG9DQUFvQztBQUNyRCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VsZi1ob3N0ZWQtYmxvZy8uL3NyYy9qcy9jcmVhdGUtcG9zdC5qcz85NGIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlbGl2ZXJUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdCcpO1xuXG5jb25zdCBuZXdQb3N0Rm9ybUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcG9zdC10aXRsZScpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcG9zdC1jb250ZW50JykudmFsdWUudHJpbSgpO1xuICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gIGlmICh0aXRsZSAmJiBjb250ZW50KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3Bvc3RzL2FwaS9jcmVhdGUtcG9zdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZSwgdGltZXN0YW1wLCBjb250ZW50IH0pLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy91c2VyL2Rhc2hib2FyZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxubGV0IG5ld1Bvc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXBvc3QtYnV0dG9uJykgIT09IG51bGw7XG5pZiAobmV3UG9zdEJ1dHRvbikge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcubmV3LXBvc3QtYnV0dG9uJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQb3N0Rm9ybUhhbmRsZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/create-post.js\n");

/***/ }),

/***/ "./src/js/delete-post.js":
/*!*******************************!*\
  !*** ./src/js/delete-post.js ***!
  \*******************************/
/***/ (() => {

eval("let deletePostID = null;\n\nfunction cancelDeletePost() {\n  deletePostID = null;\n}\n\nfunction confirmDeletePost() {\n  fetch(`/posts/api/delete-post/${deletePostID}`, {\n    method: 'DELETE',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ post_id: deletePostID }),\n  })\n    .then(() => {\n      deletePostID = null;\n      document.location.replace('/user/dashboard');\n    })\n    .catch((err) => {\n      console.log(err);\n    });\n}\n\nlet deletePostButton = document.querySelectorAll('.delete-post-button');\nif (deletePostButton) {\n  // Add a click event listener to each delete button\n  deletePostButton.forEach(function (button) {\n    button.addEventListener('click', function () {\n      deletePostID = this.id;\n    });\n  });\n}\n\nlet confirmDeletePostButton = document.querySelector('#confirm-delete-post');\nif (confirmDeletePostButton) {\n  confirmDeletePostButton.addEventListener('click', confirmDeletePost);\n}\n\nlet cancelDeletePostButton = document.querySelector('#cancel-delete-post');\nif (cancelDeletePostButton) {\n  cancelDeletePostButton.addEventListener('click', cancelDeletePost);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGVsZXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCwyQkFBMkIsdUJBQXVCO0FBQ2xELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VsZi1ob3N0ZWQtYmxvZy8uL3NyYy9qcy9kZWxldGUtcG9zdC5qcz9kZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBkZWxldGVQb3N0SUQgPSBudWxsO1xuXG5mdW5jdGlvbiBjYW5jZWxEZWxldGVQb3N0KCkge1xuICBkZWxldGVQb3N0SUQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb25maXJtRGVsZXRlUG9zdCgpIHtcbiAgZmV0Y2goYC9wb3N0cy9hcGkvZGVsZXRlLXBvc3QvJHtkZWxldGVQb3N0SUR9YCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwb3N0X2lkOiBkZWxldGVQb3N0SUQgfSksXG4gIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgZGVsZXRlUG9zdElEID0gbnVsbDtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy91c2VyL2Rhc2hib2FyZCcpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSk7XG59XG5cbmxldCBkZWxldGVQb3N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wb3N0LWJ1dHRvbicpO1xuaWYgKGRlbGV0ZVBvc3RCdXR0b24pIHtcbiAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBkZWxldGUgYnV0dG9uXG4gIGRlbGV0ZVBvc3RCdXR0b24uZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlUG9zdElEID0gdGhpcy5pZDtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxldCBjb25maXJtRGVsZXRlUG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLWRlbGV0ZS1wb3N0Jyk7XG5pZiAoY29uZmlybURlbGV0ZVBvc3RCdXR0b24pIHtcbiAgY29uZmlybURlbGV0ZVBvc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25maXJtRGVsZXRlUG9zdCk7XG59XG5cbmxldCBjYW5jZWxEZWxldGVQb3N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1kZWxldGUtcG9zdCcpO1xuaWYgKGNhbmNlbERlbGV0ZVBvc3RCdXR0b24pIHtcbiAgY2FuY2VsRGVsZXRlUG9zdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbERlbGV0ZVBvc3QpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/delete-post.js\n");

/***/ }),

/***/ "./src/js/edit-post.js":
/*!*****************************!*\
  !*** ./src/js/edit-post.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const makeToast = __webpack_require__(/*! ./make-toast.js */ \"./src/js/make-toast.js\");\n\nfunction editPostSubmit(title, content) {\n  const id = window.location.toString().split('/')[\n    window.location.toString().split('/').length - 1\n  ];\n\n  fetch(`/posts/api/edit-post/${id}`, {\n    method: 'PATCH',\n    body: JSON.stringify({ title, content }),\n    headers: { 'Content-Type': 'application/json' },\n  })\n    .then((response) => {\n      if (response.ok) {\n        document.location.replace('/user/dashboard');\n      } else {\n        throw new Error(response.statusText);\n      }\n    })\n    .catch((err) => {\n      console.log(err);\n      makeToast('Something went wrong. Please try again later.');\n    });\n}\n\nconst editPostButton = document.querySelector('#edit-post-button');\nif (editPostButton) {\n  editPostButton.addEventListener('click', (event) => {\n    event.preventDefault();\n\n    const title = document.querySelector('#editPostTitle').value.trim();\n    const content = document.querySelector('#editPostContent').value.trim();\n\n    if (title && content) {\n      editPostSubmit(title, content);\n    } else {\n      makeToast('Please fill out all fields.');\n    }\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZWRpdC1wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixtQkFBTyxDQUFDLCtDQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLEdBQUc7QUFDbkM7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLGVBQWUsb0NBQW9DO0FBQ25ELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWxmLWhvc3RlZC1ibG9nLy4vc3JjL2pzL2VkaXQtcG9zdC5qcz9hMjZhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1ha2VUb2FzdCA9IHJlcXVpcmUoJy4vbWFrZS10b2FzdC5qcycpO1xuXG5mdW5jdGlvbiBlZGl0UG9zdFN1Ym1pdCh0aXRsZSwgY29udGVudCkge1xuICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnNwbGl0KCcvJylbXG4gICAgd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkuc3BsaXQoJy8nKS5sZW5ndGggLSAxXG4gIF07XG5cbiAgZmV0Y2goYC9wb3N0cy9hcGkvZWRpdC1wb3N0LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlLCBjb250ZW50IH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy91c2VyL2Rhc2hib2FyZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBtYWtlVG9hc3QoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgIH0pO1xufVxuXG5jb25zdCBlZGl0UG9zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXBvc3QtYnV0dG9uJyk7XG5pZiAoZWRpdFBvc3RCdXR0b24pIHtcbiAgZWRpdFBvc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFBvc3RUaXRsZScpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRQb3N0Q29udGVudCcpLnZhbHVlLnRyaW0oKTtcblxuICAgIGlmICh0aXRsZSAmJiBjb250ZW50KSB7XG4gICAgICBlZGl0UG9zdFN1Ym1pdCh0aXRsZSwgY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ha2VUb2FzdCgnUGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHMuJyk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/edit-post.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./login */ \"./src/js/login.js\");\n__webpack_require__(/*! ./logout */ \"./src/js/logout.js\");\n__webpack_require__(/*! ./create-account */ \"./src/js/create-account.js\");\n__webpack_require__(/*! ./create-post */ \"./src/js/create-post.js\");\n__webpack_require__(/*! ./create-comment */ \"./src/js/create-comment.js\");\n__webpack_require__(/*! ./delete-post */ \"./src/js/delete-post.js\");\n__webpack_require__(/*! ./edit-post */ \"./src/js/edit-post.js\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsbUJBQU8sQ0FBQyxrQ0FBUztBQUNqQixtQkFBTyxDQUFDLG9DQUFVO0FBQ2xCLG1CQUFPLENBQUMsb0RBQWtCO0FBQzFCLG1CQUFPLENBQUMsOENBQWU7QUFDdkIsbUJBQU8sQ0FBQyxvREFBa0I7QUFDMUIsbUJBQU8sQ0FBQyw4Q0FBZTtBQUN2QixtQkFBTyxDQUFDLDBDQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VsZi1ob3N0ZWQtYmxvZy8uL3NyYy9qcy9pbmRleC5qcz83YmE1Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vbG9naW4nKTtcbnJlcXVpcmUoJy4vbG9nb3V0Jyk7XG5yZXF1aXJlKCcuL2NyZWF0ZS1hY2NvdW50Jyk7XG5yZXF1aXJlKCcuL2NyZWF0ZS1wb3N0Jyk7XG5yZXF1aXJlKCcuL2NyZWF0ZS1jb21tZW50Jyk7XG5yZXF1aXJlKCcuL2RlbGV0ZS1wb3N0Jyk7XG5yZXF1aXJlKCcuL2VkaXQtcG9zdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst loginFormHandler = async (event) => {\n  event.preventDefault();\n\n  const username = document.querySelector('#username-login').value.trim();\n  const password = document.querySelector('#password-login').value.trim();\n\n  if (username && password) {\n    const response = await fetch('/user/api/login', {\n      method: 'POST',\n      body: JSON.stringify({ username, password }),\n      headers: { 'Content-Type': 'application/json' },\n    });\n\n    if (response.ok) {\n      document.location.replace('/user/dashboard');\n    } else {\n      response.json().then((data) => {\n        deliverToast(data.message);\n      });\n    }\n  }\n};\n\nlet loginButton = document.querySelector('.login-button') !== null;\nif (loginButton) {\n  document\n    .querySelector('.login-button')\n    .addEventListener('click', loginFormHandler);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsNENBQWM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CO0FBQ2pELGlCQUFpQixvQ0FBb0M7QUFDckQsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbGYtaG9zdGVkLWJsb2cvLi9zcmMvanMvbG9naW4uanM/ZGQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxpdmVyVG9hc3QgPSByZXF1aXJlKCcuL21ha2UtdG9hc3QnKTtcblxuY29uc3QgbG9naW5Gb3JtSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lLWxvZ2luJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1sb2dpbicpLnZhbHVlLnRyaW0oKTtcblxuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvdXNlci9hcGkvbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlcGxhY2UoJy91c2VyL2Rhc2hib2FyZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxpdmVyVG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxubGV0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpICE9PSBudWxsO1xuaWYgKGxvZ2luQnV0dG9uKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idXR0b24nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luRm9ybUhhbmRsZXIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/login.js\n");

/***/ }),

/***/ "./src/js/logout.js":
/*!**************************!*\
  !*** ./src/js/logout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const deliverToast = __webpack_require__(/*! ./make-toast */ \"./src/js/make-toast.js\");\n\nconst logout = async () => {\n  const response = await fetch('/user/api/logout', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n  });\n\n  if (response.ok) {\n    document.location.replace('/');\n  } else {\n    response.json().then((data) => {\n      deliverToast(data.message);\n    });\n  }\n};\n\ndocument.querySelector('#logout').addEventListener('click', logout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQixtQkFBTyxDQUFDLDRDQUFjOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VsZi1ob3N0ZWQtYmxvZy8uL3NyYy9qcy9sb2dvdXQuanM/NTI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWxpdmVyVG9hc3QgPSByZXF1aXJlKCcuL21ha2UtdG9hc3QnKTtcblxuY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvdXNlci9hcGkvbG9nb3V0Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICB9KTtcblxuICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRlbGl2ZXJUb2FzdChkYXRhLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nb3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dvdXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/logout.js\n");

/***/ }),

/***/ "./src/js/make-toast.js":
/*!******************************!*\
  !*** ./src/js/make-toast.js ***!
  \******************************/
/***/ ((module) => {

eval("function deliverToast(message) {\n  const toastLiveExample = document.getElementById('error-toast');\n  const toastBody = document.getElementById('toast-body');\n  toastBody.innerText = message;\n  const toast = new bootstrap.Toast(toastLiveExample);\n\n  toast.show();\n}\n\nmodule.exports = deliverToast;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFrZS10b2FzdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZWxmLWhvc3RlZC1ibG9nLy4vc3JjL2pzL21ha2UtdG9hc3QuanM/NDNiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWxpdmVyVG9hc3QobWVzc2FnZSkge1xuICBjb25zdCB0b2FzdExpdmVFeGFtcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLXRvYXN0Jyk7XG4gIGNvbnN0IHRvYXN0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1ib2R5Jyk7XG4gIHRvYXN0Qm9keS5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBjb25zdCB0b2FzdCA9IG5ldyBib290c3RyYXAuVG9hc3QodG9hc3RMaXZlRXhhbXBsZSk7XG5cbiAgdG9hc3Quc2hvdygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGl2ZXJUb2FzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/make-toast.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;