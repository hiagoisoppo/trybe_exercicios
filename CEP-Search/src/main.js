import Swal from 'sweetalert2'
import './style.css'
import fetchCep from './fetchCep';


const searchBtn = document.querySelector('button');
const result = document.querySelector('p');
const inputCep = document.querySelector('input');

searchBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const fetchData = await fetchCep(inputCep.value);
    result.innerText = `CEP: ${fetchData.cep}
                        DDD: ${fetchData.ddd}
                        UF: ${fetchData.uf}
                        Localidade: ${fetchData.localidade}
                        Bairro: ${fetchData.bairro}
                        Logradouro: ${fetchData.logradouro}
                        IBGE: ${fetchData.ibge}`
  } catch (error) {
    Swal.fire({
      title: 'ERRO!',
      text: error.message,
      confirmButtonText: 'Ok'
    })
  }
});