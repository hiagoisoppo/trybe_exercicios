import './style.css'

const displayImg = document.querySelector('#image');
const displayName = document.querySelector('#name');
const displayFullName = document.querySelector('#fullname');
const displayAlterEgo = document.querySelector('#alterego');
const buttonRandom = document.querySelector('#button');

const acessToken = '6171734162893036';
const baseUrl = `https://superheroapi.com/api.php/${acessToken}`;
const maxHeroes = 731;

const randomId = () => Math.floor(Math.random() * maxHeroes);


buttonRandom.addEventListener('click', (event) => {
  event.preventDefault();
  const actualId = randomId();

  fetch(`${baseUrl}/${actualId}`)
  .then((result) => result.json())
  .then((data) => {
    displayImg.src = data.image.url;
    displayFullName.innerHTML = data.biography['full-name'];
    displayAlterEgo.innerHTML =data.biography['alter-egos'];
    displayName.innerHTML = data.name;
  })
})