const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container'); /*é onde vai armazenar tanto as classes armazenadas como removidas */

left.addEventListener('mouseenter', () => container.classList.add('hover-left')) /*tem a responsabilidade de captar toda vez que um evento acontecer, 
ele vai captar e está pronto para fazer algo de acordo com o que vamos programar */
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))