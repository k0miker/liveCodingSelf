// Wie können wir Tasteneingaben bekommen?
// document.addEventListener('keyup')
  // Pfeiltaste nach link => event.code === 'ArrowLeft'
  // Pfeiltaste nach rechts => event.code === 'ArrowRight'
// document.addEventListener('keydown')

// Wie kann sich Mario nach links oder rechts bewegen?
  // <img>
    // Option 1: Mit absoluter Positionierung
    // => style.position = 'absolute'
    // => style.left = '${distance}px' 

    // Option 2: Mit transform
    // => style.transform = `translateX(${distance})`

    // Option 3: Mit margin-Abständen
    // => style.marginLeft = `${distance}px`

    // Option 4: Mit relativer Positionierung
    // => style.position = 'relative';
    // => style.right = `${distance}px`

// Wie kann ich das Mario-Gif horizontal spiegeln?
  // Option 1:
  // => style.transform = 'scale(-1, 1)'

  // Option 2:
  // => style.transform = 'rotateY(180deg)'


document.addEventListener('keydown', event => {
  // console.log(`Position der Taste (event.code): ${event.code}`);
  // console.log(`Wert der Taste (event.key): ${event.key}`);

  switch (event.code) {
    case 'ArrowRight':
      moveMario(10);
      break;
    case 'ArrowLeft':
      moveMario(-10);
      break;
  }
})


document.addEventListener('keyup', event => {
  switch (event.code) {
    case 'ArrowRight':
      stopMario();
      break;
    case 'ArrowLeft':
      stopMario();
      break;
  }
})

const mario = document.querySelector('#mario');
const marioImg = document.querySelector('#mario img');

let marioPosition = 0;
let isWalking = false;

function moveMario(speed) {
  console.log(`moveMario(${speed})`);

  marioPosition += speed;
  mario.style.transform = `translateX(${marioPosition}px) ${speed < 0 ? 'rotateY(180deg)' : 'rotateY(0deg)'}`;

  if (!isWalking) {
    marioImg.src = './assets/mario-walk.gif';
    isWalking = true;
  }
}

function stopMario() {
  marioImg.src = './assets/mario-stand.gif';
  isWalking = false;
}



// Eigenen Animations-Loop

let frameCounter = 0;
function animate() {
  console.log(frameCounter);
  frameCounter++;
  requestAnimationFrame(animate);
}

animate();