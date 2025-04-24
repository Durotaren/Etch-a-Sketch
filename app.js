const container = document.querySelector('#container');
console.log(container);

for (let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.classList.add('box');
  // div.textContent = 'Hey';
  container.append(div);
}