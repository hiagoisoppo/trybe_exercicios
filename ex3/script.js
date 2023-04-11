let brother = document.createElement('section');
brother.className = 'quintoENOvoUltimoFilho';
document.getElementById('elementoOndeVoceEsta').parentElement.appendChild(brother);


let child = document.createElement('section');
child.className = 'terceiroFilhoDoFilho';
document.getElementById('elementoOndeVoceEsta').appendChild(child);

let sonOfSon = document.createElement('section');
sonOfSon.className = 'FilhoDoFilho';
document.getElementById('primeiroFilhoDoFilho').appendChild(sonOfSon);

let neto = document.getElementsByClassName('FilhoDoFilho');
let tio = neto[0].parentElement.nextElementSibling.nextElementSibling;