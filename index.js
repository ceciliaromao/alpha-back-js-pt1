const button = document.querySelector('button');

button.addEventListener('click', logHello);

function logHello() {
  const message = 'Olá Console!';
  console.log(message);
}