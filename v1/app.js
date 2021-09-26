let cat = document.querySelector('.cat');
const main = document.querySelector('main');
let countEl = document.createElement('div');

let count = 0;
cat.addEventListener('click', () => {
  count += 1;
  // create a new div
  countEl.innerHTML = `<h3>Cat image clicked: <strong>${count}</strong> times</h3>`;
  main.appendChild(countEl);
});

function updateDOM() {
  countEl.innerHTML = count;
}

updateDOM();
