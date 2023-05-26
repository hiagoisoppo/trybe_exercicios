import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => fillUsersSelect(data.users));

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  const userID = usersSelect.value;
  const postsApi = `https://dummyjson.com/posts/user/${userID}`;
  fetch(postsApi)
    .then((response) => response.json())
    .then((data) => {
      fillPosts(data.posts);
      const featuredPost = data.posts[0];
      return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`);
    })
    .then((response2) => response2.json())
    .then((comments) => {
      fillFeaturedPostComments(comments.comments);
    })
    .catch((error) => fillErrorMessage(error.message));
});
