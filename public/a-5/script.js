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
  // e.target.classList.add('down')
  soundTuples['btnLo'][0].play();
  // x = x + 1

  // determine if left or right
  const rect = e.target.getBoundingClientRect()
  // console.log(rect)
  const touchPos = createVector(e.touches[0].clientX, e.touches[0].clientY)
  const elCenterPos = createVector(rect.left + rect.width/2, rect.top + rect.height/2)
  // console.log()
  // console.log(e.touches[0].clientX, rect.left + rect.width/2)
  dpadPress(touchPos.sub(elCenterPos))
  // console.log(touchPos.sub(elCenterPos))

}

function dpadPress(vector) {
  // console.log(Math.abs(vector.x) > Math.abs(vector.y) ? 'x' : 'y')
  if (Math.abs(vector.x) > Math.abs(vector.y)) {
    move(createVector(vector.x > 0 ? 1 : -1, 0))
  } else {
    move(createVector(0, vector.y > 0 ? 1 : -1))
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

function move(dir) {
  pos = pos.add(dir)

  // wrap
  if (pos.y < 0) {
    pos.y = hc;
  }
  pos = createVector(pos.x, pos.y % 7)


  console.log(pos)
}

function btnUp(e) {
  e.preventDefault();
  soundTuples['btnLo'][1].play();
  e.target.classList.remove('down')
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
  dpad.addEventListener('mousedown', btnDown)
  dpad.addEventListener('touchend', btnUp)
  dpad.addEventListener('mouseup', btnUp)

  // dpad.elt.addEventListener('keydown', btnDown)
  // dpad.elt.addEventListener('keyup', btnUp)
  // l.appendChild(dpad.elt);

  mainEl = document.querySelector("main");
  pos = createVector(1, 5)
}

function draw() {
  clear();
  scale(1, 1);

  circle(width/wc * pos.x, height/hc * pos.y, 111);
}

