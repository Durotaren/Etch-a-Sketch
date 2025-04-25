const container = document.querySelector('#container');
console.log(container);

for (let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.classList.add('box');
  // div.textContent = 'Hey';
  container.append(div);
}

let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseenter', () => 
    box.style.backgroundColor = 'blue'
  );
})

boxes.forEach((box) => {
  box.addEventListener('mouseleave', () => 
    box.style.backgroundColor = 'aliceblue'
  );
})

