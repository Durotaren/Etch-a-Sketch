const container = document.querySelector('#container');

for (let i = 0; i < 4096; i++) {
  let div = document.createElement('div');
  div.classList.add('box');
  container.append(div);
}

let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseenter', () => 
    box.style.backgroundColor = 'blue'
  );
});

let button = document.querySelector('button');

function boxCount() {
  userAnswer = prompt('How many boxes would you like to be on the grid?');
  let boxSize = 640 / userAnswer;
  boxes.forEach((box) => {
    box.remove();
  });
  for (let i = 0; i < (userAnswer * userAnswer); i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
  }

  let newBoxes = document.querySelectorAll('.box');

  newBoxes.forEach((box) => {
    box.style.cssText = `width:${boxSize}px; height:${boxSize}px`;
  });

  newBoxes.forEach((box) => {
    box.addEventListener('mouseenter', () => 
      box.style.backgroundColor = 'blue'
    );
  });
}

button.addEventListener('click', boxCount);