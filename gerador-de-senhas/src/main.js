import './style.css';
import { nanoid } from 'nanoid';
import clipboardCopy from 'clipboard-copy';

const generateBtn = document.querySelector('button');
const displayPass = document.querySelector('h2');

generateBtn.addEventListener('click', () => {
  displayPass.innerHTML = nanoid();
});

displayPass.addEventListener('click', (event) => {
  clipboardCopy(event.target.innerHTML);
});
