const passar = document.querySelector('.passar');

let i = 0;

const keyframes = {
  1: 'translateX(0) translateY(0)',
  2: 'translateX(17px) translateY(3px)',
  3: 'translateX(28px) translateY(9px)',
  4: 'translateX(40px) translateY(18px)',
  5: 'translateX(48px) translateY(28px)',
  6: 'translateX(50px) translateY(50px)',
  7: 'translateX(48px) translateY(72px)',
  8: 'translateX(40px) translateY(82px)',
  9: 'translateX(28px) translateY(91px)',
  10: 'translateX(17px) translateY(97px)',
  11: 'translateX(0) translateY(100px)',
}

passar.addEventListener('click', () => {
  document.querySelector('.corpo-celeste').style.transform = keyframes[++i];
  console.log(keyframes[i]);
  console.log(i);
});