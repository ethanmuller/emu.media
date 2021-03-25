// this is used as a timestamp, but -1 means
let lastDown = -1;
let lastSound = -1;
let lastGrunt = -1;
let pressed; // :(
let owaCounter = 0;
let gruntCounter = 0;
let gruntTimer;
let flip = 1;

function preload() {

  myImage = loadImage('./img.png');
  myImageB = loadImage('./imgB.png');

  owaTuples = [
    [loadSound('./a.mp3'), loadSound('./b.mp3')],
    [loadSound('./c.mp3'), loadSound('./d.mp3')]
  ];

  gruntList = [loadSound('./e.wav'),
             loadSound('./ee.wav'),
             loadSound('./eee.wav')]
}

function grunt() {
  if (gruntTimer) {
    clearTimeout(gruntTimer);
  }
  
  gruntList[gruntCounter % gruntList.length].play()

  gruntCounter++;

  if (Math.random() > 0.5) {
    gruntTimer = setTimeout(grunt, 7000)
  } else {
    gruntTimer = setTimeout(grunt, 4000)
  }
}

function down(e) {
  e.preventDefault();
  e.target.classList.add('down')
  owaTuples[owaCounter % owaTuples.length][0].play();
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

  if (Math.random() > 0.75) {
    gruntTimer = setTimeout(grunt, 2300)
  } else {
    gruntTimer = setTimeout(grunt, 1500)
  }
}

function setup() {
  document.querySelector('#imgB').hidden = true;

  cnv = createCanvas(666, 666);

  cnv.elt.addEventListener('touchstart', down)
  cnv.elt.addEventListener('mousedown', down)
  cnv.elt.addEventListener('touchend', up)
  cnv.elt.addEventListener('mouseup', up)

  playbtn = createButton('OWA OWA');
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

  // this nasty if block
  // is used instead of a window.setTimeout.
  // i'm doing this because setTimeout was being flaky
  // and making me furious!!!!!!
  if (!pressed &&
      lastDown > -1 &&
      Date.now() - lastDown > 250) {
    owaTuples[(owaCounter-1) % owaTuples.length][1].play();
    lastDown = -1;
    lastSound = Date.now();
  }

  translate(myImage.width, myImage.height);
  scale(1 + Math.random()*0.025);
  // scale(flip, 1);
  translate(-myImage.width, -myImage.height);


  translate(Math.random()*4, Math.random()*2);

  if (Date.now() - lastSound < 150) {
    image(myImageB, width/2 - myImage.width/2, height/2 - myImage.height/2);
  } else {
    image(myImage, width/2 - myImage.width/2, height/2 - myImage.height/2);
  }
}

