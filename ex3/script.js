document.getElementsByTagName('header')[0].style.backgroundColor = '#00b069';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#ff9f84';
let sub1 = document.querySelectorAll('.emergency-tasks h3')
for (i = 0; i <sub1.length; i += 1){
      sub1[i].style.backgroundColor = '#a500f3';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#f9db5e';
let sub2 = document.querySelectorAll('.no-emergency-tasks h3')
for (i = 0; i <sub2.length; i += 1){
      sub2[i].style.backgroundColor = '#232525';
}

document.getElementsByTagName('footer')[0].style.backgroundColor = '#003533';