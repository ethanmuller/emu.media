// this is used as a timestamp, but -1 means
let lastDown = -1;
let lastSound = -1;
let pressed; // :(
let owaCounter = 0;
let flip = 1;

function preload() {

  myImage = loadImage('./owaowa1.png');
  myImageB = loadImage('./owaowa2.png');

  soundTuples = [
    [loadSound('./a.wav'), loadSound('./b.wav')],
  ];
}

function down(e) {
  e.preventDefault();
  e.target.classList.add('down')
  soundTuples[0][0].play();
  lastDown = Date.now();
  lastSound = Date.now();
  pressed = true;

  flip = flip * -1;
}

function up(e) {
  e.preventDefault();
  e.target.classList.remove('down')
  pressed = false;

  owaCounter++
}

function setup() {
  document.querySelector('#imgB').hidden = true;

  cnv = createCanvas(666, 666);

  cnv.elt.addEventListener('touchstart', down)
  cnv.elt.addEventListener('mousedown', down)
  cnv.elt.addEventListener('touchend', up)
  cnv.elt.addEventListener('mouseup', up)

  playbtn = createButton('⚡');
  playbtn.elt.id = "play";
  playbtn.elt.addEventListener('touchstart', down)
  playbtn.elt.addEventListener('mousedown', down)
  playbtn.elt.addEventListener('touchend', up)
  playbtn.elt.addEventListener('mouseup', up)

  playbtn.elt.addEventListener('keydown', down)
  playbtn.elt.addEventListener('keyup', up)
  controls.appendChild(playbtn.elt);

  mainEl = document.querySelector("main");
}

function draw() {
  clear();
  scale(1, 1);

  if (!pressed &&
      lastDown > -1 &&
      Date.now() - lastDown > 150) {
    soundTuples[0][1].play();
    lastDown = -1;
    lastSound = Date.now();
  }
}

