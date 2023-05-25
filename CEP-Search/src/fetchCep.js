export default async function fetchCep(inputCEP) {
  if (!inputCEP) throw new Error ("Você precisa digitar um CEP")

  const filterCEP = inputCEP.replaceAll('-', '');  

  const  fetchResponse = await fetch(`https://viacep.com.br/ws/${filterCEP}/json/`);
  const fetchData = await fetchResponse.json();

  return fetchData;
}