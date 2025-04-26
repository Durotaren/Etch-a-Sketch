const container = document.querySelector('#container');
const eraseButton = document.querySelector('.eraseAll');
const basicButton = document.querySelector('.btnBasic');
const rainbowButton = document.querySelector('.btnRainbow');

eraseButton.addEventListener('click', () => {
  container.textContent = '';

  for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    container.append(div);
  };
  
  let boxes = document.querySelectorAll('.box');
  
  boxes.forEach((box) => {
    box.style.opacity = 0.1;
    box.addEventListener('mouseenter', () => {
      let currentOpacity = parseFloat(box.style.opacity);
      currentOpacity = Math.min(currentOpacity + 0.1, 1);
      box.style.opacity = currentOpacity;
      box.style.backgroundColor = 'blue';
    });
  });
})

for (let i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.classList.add('box');
  container.append(div);
};

let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.style.opacity = 0.1;
  box.addEventListener('mouseenter', () => {
    let currentOpacity = parseFloat(box.style.opacity);
    currentOpacity = Math.min(currentOpacity + 0.1, 1);
    box.style.opacity = currentOpacity;
    box.style.backgroundColor = 'blue';
  });
});

function boxCount() {
  let userAnswer = prompt('How many boxes would you like to be on the grid?');
  let boxSize = 640 / userAnswer;
  if (userAnswer > 100) {
    alert('Please enter a number between 1 and 100!');
  } else if (userAnswer === null || userAnswer === '') {
    alert('You didn\'t enter anything.');
  } else {
    container.textContent = '';
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
      box.style.opacity = 0.1;
      box.addEventListener('mouseenter', () => {
        let currentOpacity = parseFloat(box.style.opacity);
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        box.style.opacity = currentOpacity;
        box.style.backgroundColor = 'blue';
        });
    });
  };
};

basicButton.addEventListener('click', boxCount);

function rainbowBoxCount() {
  let userAnswer = prompt('How many boxes would you like to be on the grid?');
  let boxSize = 640 / userAnswer;
  if (userAnswer > 100) {
    alert('Please enter a number between 1 and 100!');
  } else if (userAnswer === null || userAnswer === '') {
    alert('You didn\'t enter anything.');
  } else {
    container.textContent = '';
    for (let i = 0; i < (userAnswer * userAnswer); i++) {
      let div = document.createElement('div');
      div.classList.add('box');
      container.append(div);
    };

    let newBoxes = document.querySelectorAll('.box');

    newBoxes.forEach((box) => {
      box.style.cssText = `width:${boxSize}px; height:${boxSize}px`;
    });

    newBoxes.forEach((box) => {
      box.style.opacity = 0.1;
      box.addEventListener('mouseenter', () => {
        let currentOpacity = parseFloat(box.style.opacity);
        currentOpacity = Math.min(currentOpacity + 0.1, 1);
        box.style.opacity = currentOpacity;
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        box.style.backgroundColor = rgb;
        });
    });
  };
};

rainbowButton.addEventListener('click', rainbowBoxCount);