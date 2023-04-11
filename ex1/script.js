document.getElementById('where-are-you').parentElement.style.backgroundColor = 'green';

document.getElementById('first-child-of-child').innerHTML = 'FirstChildOfChild direct';

document.getElementById('parent').firstElementChild.textContent = 'FirstChild from Parent';

document.getElementById('where-are-you').previousElementSibling.textContent = 'FirstChild from WhereAreYou';

document.getElementById('where-are-you').nextSibling.textContent = 'Attention from WhereAreYou';

document.getElementById('where-are-you').previousElementSibling.textContent = 'ThirdChild from WhereAreYou';


document.getElementById('parent').lastChild.previousElementSibling.textContent = 'ThirdChild from Parent';

document.getElementById('parent').lastChild.textContent = 'LastChild from Parent';
