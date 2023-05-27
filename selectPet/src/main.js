import './style.css'

const btnGetDog = document.querySelector('#btnDog');
const btnGetCat = document.querySelector('#btnCat');
const btnGetRandom = document.querySelector('#btnRandom');
const imgSlot = document.querySelector('img');

btnGetCat.addEventListener('click', async (event) => {
  event.preventDefault();
  const fetchResponse = await fetch('https://api.thecatapi.com/v1/images/search');
  const fetchData = await fetchResponse.json();
  imgSlot.src = fetchData[0].url;
})

btnGetDog.addEventListener('click', async (event) => {
  event.preventDefault();
  const fetchResponse = await fetch('https://dog.ceo/api/breeds/image/random');
  const fetchData = await fetchResponse.json();
  imgSlot.src = fetchData.message;
})

// btnGetRandom.addEventListener('click', async (event) => {
//   event.preventDefault();
//   const fetchResponse = await fetch('https://dog.ceo/api/breeds/image/random');
//   const fetchData = await fetchResponse.json();

//   const fetchResponse2 = await fetch('https://api.thecatapi.com/v1/images/search');
//   const fetchData2 = await fetchResponse2.json();
  
//   const randomNum = Math.floor(Math.random() * 3);

//   if (randomNum === 1) imgSlot.src = fetchData.message;
//   if (randomNum === 2) imgSlot.src = fetchData2[0].url;
// })

btnGetRandom.addEventListener('click', async (event) => {
  event.preventDefault();
  const fetchResponse = await Promise.any([
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://api.thecatapi.com/v1/images/search"),
    ]);
  const fetchData = await fetchResponse.json();
  const randomUrl = fetchData.message || fetchData[0].url;
  imgSlot.src = randomUrl;
})

