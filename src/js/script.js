const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const line1 = document.querySelector('.menu-line1');
const line2 = document.querySelector('.menu-line2');
const line3 = document.querySelector('.menu-line3');
const content = document.querySelector('.content');

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const link5 = document.querySelector('.link5');

function toggleMenu() {
  menuIcon.classList.toggle('open');
  line1.classList.toggle('open');
  line2.classList.toggle('open');
  line3.classList.toggle('open');
  menu.classList.toggle('open');
}

menuIcon.addEventListener('click', toggleMenu);

link1.addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();

  ReactDOM.render(
    <h1 id='link1'>Link1</h1>,
    content
  );
});

link2.addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();

  ReactDOM.render(
    <h1 id='link2'>Link2</h1>,
    content
  );
});

link3.addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();

  ReactDOM.render(
    <h1 id='link3'>Link3</h1>,
    content
  );
});

link4.addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();

  ReactDOM.render(
    <h1 id='link4'>Link4</h1>,
    content
  );
});

link5.addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();

  ReactDOM.render(
    <h1 id='link5'>Link5</h1>,
    content
  );
});
