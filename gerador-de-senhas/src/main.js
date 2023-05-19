import { nanoid } from "nanoid";

const generateBtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

generateBtn.addEventListener('click', () => {
  displayPass.innerHTML = nanoid();
});