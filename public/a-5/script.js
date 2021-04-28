// this is used as a timestamp, but -1 means
let lastDown = -1;
let lastSound = -1;
let pressed; // :(
let pos;
wc = 6;
hc = 6;

function preload() {

  myImage = loadImage('./owaowa1.png');
  myImageB = loadImage('./owaowa2.png');


  clickA = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-b.mp3?v=1600992753524"
  );
  clickB = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-a.mp3?v=1600992749379"
  );
  soundTuples = {
    btn: [loadSound('./btn-01.wav'), loadSound('./btn-02.wav')],
    btnLo: [loadSound('./btn-03.wav'), loadSound('./btn-04.wav')],
    sfxr: [loadSound('./blip.wav'), loadSound('./crunch.wav')]
  };
}

// function touchScreenDown(e) {
//   soundTuples['btn'][0].play();
// }

// function touchScreenUp(e) {
//   soundTuples['btn'][1].play();
// }

function btnDown(e) {
  e.preventDefault();
  soundTuples['btnLo'][0].play();
  // x = x + 1

  // determine if left or right
  const rect = e.target.getBoundingClientRect()
  // console.log(rect)
  const touchPos = createVector(e.touches[0].clientX, e.touches[0].clientY)
  const elCenterPos = createVector(rect.left + rect.width/2, rect.top + rect.height/2)
  // console.log()
  // console.log(e.touches[0].clientX, rect.left + rect.width/2)
  dpadPress(touchPos.sub(elCenterPos), e.target)
  // console.log(touchPos.sub(elCenterPos))

}

// function keyTyped(e) {
//   if (key === 'a') {
//   } else if (key === 'b') {
//     value = 0;
//   }
//   // uncomment to prevent any default behavior
//   // return false;
// }
// function keyReleased() {
//   dpadRelease(dpad)
// }

function dpadPress(vector, el) {
  el.classList.add('active')
  // console.log(Math.abs(vector.x) > Math.abs(vector.y) ? 'x' : 'y')
  if (Math.abs(vector.x) > Math.abs(vector.y)) {
    if (vector.x > 0) {
      el.classList.add('right')
      move(createVector(1, 0))
    } else {
      el.classList.add('left')
      move(createVector(-1, 0))
    }
  } else {
    if (vector.y > 0) {
      el.classList.add('down')
      move(createVector(0, 1))
    } else {
      el.classList.add('up')
      move(createVector(0, -1))
    }
  }
    
  // if (dir.x > 0) {
  //   x = x + 1
  // } else {
  //   x = x - 1
  // }
  // if (dir.y > 0) {
  //   y = y + 1
  // } else {
  //   y = y - 1
  // }
}

function dpadRelease(el) {
  el.classList.remove('active', 'up', 'down', 'left', 'right')
}

function move(dir) {
  pos = pos.add(dir)

  // wrap
  if (pos.y < 0) {
    pos.y = hc;
  }

  if (pos.x < 0) {
    pos.x = wc;
  }

  pos = createVector(pos.x % 7, pos.y % 7)

  // console.log(pos)
}

function btnUp(e) {
  e.preventDefault();
  soundTuples['btnLo'][1].play();
  dpadRelease(e.target)
}

function handleKeydown(e) {
  switch(e.key) {
    case 'w':
    case 'ArrowUp':
      dpadPress(createVector(0, -1), dpad)
      break;
    case 'a':
    case 'ArrowLeft':
      dpadPress(createVector(-1, 0), dpad)
      break;
    case 's':
    case 'ArrowDown':
      dpadPress(createVector(0, 1), dpad)
      break;
    case 'd':
    case 'ArrowRight':
      dpadPress(createVector(1, 0), dpad)
      break;
  }
}

function handleKeyup(e) {
  dpadRelease(dpad)
}

function setup() {
  noStroke();
  document.querySelector('#imgB').hidden = true;

  cnv = createCanvas(666, 666);

  // cnv.elt.addEventListener('touchstart', touchScreenDown)
  // cnv.elt.addEventListener('mousedown', touchScreenDown)
  // cnv.elt.addEventListener('touchend', touchScreenUp)
  // cnv.elt.addEventListener('mouseup', touchScreenUp)

  // playbtn = createButton('Be');
  // playbtn.elt.id = "play";
  // playbtn.elt.addEventListener('touchstart', btnDown)
  // playbtn.elt.addEventListener('mousedown', btnDown)
  // playbtn.elt.addEventListener('touchend', btnUp)
  // playbtn.elt.addEventListener('mouseup', btnUp)

  // playbtn.elt.addEventListener('keydown', btnDown)
  // playbtn.elt.addEventListener('keyup', btnUp)
  // r.appendChild(playbtn.elt);

  // dpad = createButton('+');
  // dpad.elt.id = "dpad";
  dpad.addEventListener('touchstart', btnDown)
  // dpad.addEventListener('mousedown', btnDown)
  dpad.addEventListener('touchend', btnUp)
  // dpad.addEventListener('mouseup', btnUp)

  // dpad.elt.addEventListener('keydown', btnDown)
  // dpad.elt.addEventListener('keyup', btnUp)
  // l.appendChild(dpad.elt);

  mainEl = document.querySelector("main");
  pos = createVector(1, 5)

  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('keyup', handleKeyup)
}

function draw() {
  clear();
  scale(1, 1);

  circle(width/wc * pos.x, height/hc * pos.y, 111);
}

