let elementTitle = document.createElement('h1');
elementTitle.textContent = 'TrybeTrip - Agência de Viagens';
elementTitle.className = 'title';
document.getElementsByTagName('body')[0].appendChild(elementTitle);

let elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.getElementsByTagName('body')[0].appendChild(elementMain);

let elementSection1 = document.createElement('section');
elementSection1.className = 'center-content';
document.getElementsByTagName('main')[0].appendChild(elementSection1);

let elementPsection1 = document.createElement('p');
elementPsection1.textContent = 'VQV TRYBE VQV';
document.getElementsByClassName('center-content')[0].appendChild(elementPsection1);

let elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
document.getElementsByTagName('main')[0].appendChild(elementSectionLeft);

let elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
document.getElementsByTagName('main')[0].appendChild(elementSectionRight);

let imgLeft = document.createElement('img');
imgLeft.src = 'https://picsum.photos/200';
imgLeft.className = 'small-image';
document.getElementsByClassName('left-content')[0].appendChild(imgLeft);

let ulRight = document.createElement('ul');
ulRight.className = 'ul-right';
document.getElementsByClassName('right-content')[0].appendChild(ulRight);

let listaNaoOrdenada = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (item of listaNaoOrdenada){
    itemAtual = document.createElement('li');
    itemAtual.innerText = item;
    document.getElementsByClassName('ul-right')[0].appendChild(itemAtual);
}

for (index = 0; index < 3; index += 1){
    let h3Main = document.createElement('h3');
    h3Main.innerText = 'H3 H3 H3 H3 H3 H3 H3 H3 H3';
    h3Main.className = 'description';
    document.getElementsByTagName('main')[0].appendChild(h3Main);
}

document.getElementsByTagName('main')[0].removeChild(elementSectionLeft);

document.querySelector('.right-content').style.marginRight = 'auto';