import './style.css';
import validator from 'validator';

const button = document.querySelector('button');

const validate = (input, type) => {
  switch (type) {
  case 'email':
    return validator.isEmail(input);
  case 'cpf':
    return validator.isTaxID(input, 'pt-BR');
  case 'hexColor':
    return validator.isHexColor(input);
  case 'url':
    return validator.isURL(input);
  default:
    return false;
  }
};

button.addEventListener('click', (event) => {
  event.preventDefault();
  const select = document.querySelector('select').value;
  const input = document.querySelector('input').value;
  const h4 = document.querySelector('h4');
  if (validate(input, select)) {
    h4.innerHTML = 'A validação retornou true';
  } else {
    h4.innerHTML = 'A validação retornou false';
  }
});
