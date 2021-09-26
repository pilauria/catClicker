// let cat = document.querySelector('.cat');
// const main = document.querySelector('main');
// let countEl = document.createElement('div');

// let count = 0;
// cat.addEventListener('click', () => {
//   count += 1;
//   // create a new div
//   countEl.innerHTML = `<h3>Cat image clicked: <strong>${count}</strong> times</h3>`;
//   main.appendChild(countEl);
// });

// function updateDOM() {
//   countEl.innerHTML = '';
//   // Clear main div
//   // countEl.innerHTML = '<h3>Cat image clicked: <strong></strong>times</h3>`';
// }

// updateDOM();

// let img1 = document.getElementById('btn-1');
// let img2 = document.getElementById('btn-2');
let counter;

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let counter1 = document.getElementById('btn-1-counter');
let counter2 = document.getElementById('btn-2-counter');
let name1 = document.getElementById('name-1');
let name2 = document.getElementById('name-2');

name1.innerHTML = 'Mimmo';
name2.innerHTML = 'Chris';

let inc_counter = function (event) {
  let id = event.target.id;
  let counter = document.getElementById(`${id}-counter`);
  counter.innerHTML++;
};

counter1.innerHTML = 0;
btn1.addEventListener('click', inc_counter);

counter2.innerHTML = 0;
btn2.addEventListener('click', inc_counter);
