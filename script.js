console.log('Hello!');

var colors = ['red', 'green', 'blue', 'aqua'];

const heading = document.getElementById('color-heading');

heading.addEventListener('click', function () {
  heading.innerHTML = 'Da stiu daniel este un gras';
  heading.style.color = 'red';
});
