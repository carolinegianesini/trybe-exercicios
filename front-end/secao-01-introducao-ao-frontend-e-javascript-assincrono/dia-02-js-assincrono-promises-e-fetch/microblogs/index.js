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
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((resposta) => resposta.json)
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;
  fetch(POSTS_API)
    .then((response) => response.json)
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      const [featuredPost] = posts;
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;
      return fetch(COMMENTS_API);
    })
    .then ((response) => response.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    })
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
