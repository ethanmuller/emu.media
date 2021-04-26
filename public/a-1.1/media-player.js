let mySound;
let playing = false;
let easing = 0.5;
let rateInc = 10;
const imageScale = 0.2;

let bpm = 205;
let bars = 64;
let bps = bpm / 60;
let bpms = bps / 1000;

let fpb = 2;
let fps = fpb * bps;
fps = 60;
let fpms = fps / 1000;

let timeMultiplier = 0.055;

let  min = -200;
let  max = 200;
let  targetV = 100;
let  v = targetV;

let pg;

let pos = 0;

let playheadThickness = 3;
let playheadOffset = playheadThickness;

function preload() {
  const audioEl = document.querySelector('#audio');
  const audioUrl = audioEl.src;

  const imgUrlHead = document.querySelector('#head').src;
  const imgUrlWaves = document.querySelector('#waves').src;

  audioEl.hidden = true;
  head = loadImage(imgUrlHead);
  waves = loadImage(imgUrlWaves);

  mySound = loadSound(audioUrl);

  clickA = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-b.mp3?v=1600992753524"
  );
  clickB = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-a.mp3?v=1600992749379"
  );
}

function handleFlip() {
  if (targetV <= 0) {
    return document.body.classList.add("flip");
  }
    return document.body.classList.remove("flip");
}

function speedUp() {
  targetV = Math.max(Math.min(targetV + rateInc, max), min);
  if (Math.abs(targetV) < rateInc) {
    targetV = rateInc;
  }
  handleFlip();
  rateMeter.setAttribute("value", targetV);

  if (mySound.isPlaying()) {
    // need to do this or ios safari won't update speed
    // art.style.animationPlayState = "paused";
    // window.setTimeout(
    //   () => (art.style.animationPlayState = "running"),
    //   0
    // );
  }

  if (targetV < 0) {
    document.body.classList.add("reverse");
  } else {
    document.body.classList.remove("reverse");
  }
}

function slowDown() {
    targetV = Math.max(Math.min(targetV - rateInc, max), min);

    handleFlip();
    rateMeter.setAttribute("value", targetV);

    // art.style.animationDuration =
    //   Math.abs(mySound.duration() / (targetV / 100) / 2) + "s";

    if (mySound.isPlaying()) {
      // need to do this or ios safari won't update speed
      // art.style.animationPlayState = "paused";
      // window.setTimeout(
      //   () => (art.style.animationPlayState = "running"),
      //   0
      // );
    }
}

function setup() {
  frameRate(fps);
  head.resize(240, 0)
  // waves.resize(waves.width, 64*64*2*2)

  cover.hidden = true;
  if (navigator.userAgent.match("Firefox")) {
    const msg = document.createElement("P");
    msg.innerHTML =
      "Sorry, this player is a little buggy in Firefox.<br />Player may crash or sound demonic at <50% speed.";
    // document.querySelector(".cta").insertAdjacentElement("afterend", msg);
    // alert('Heads up: this player is a little buggy in Firefox. Sorry.')
  }

  // art = document.querySelector("#art");

  // pg = createGraphics(666, 666);
  // const toolbar = document.querySelector("#toolbar");
  // toolbar.prepend(cnv.canvas);

  // slider = createSlider(-200, 200, v)
  // controls.appendChild(slider.elt)

  const rate = document.createElement("DIV");
  rate.id = "rate";
  controls.appendChild(rate);

  const rateMeter = document.createElement("METER");
  rateMeter.id = "rateMeter";
  rateMeter.setAttribute("value", targetV);
  rateMeter.setAttribute("min", min);
  rateMeter.setAttribute("max", max);
  rate.appendChild(rateMeter);


  playbtn = createButton(
    '<svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 16.5L0.249998 32.5215L0.25 0.47853L28 16.5Z" fill="currentColor"/></svg>'
  );
  playbtn.elt.id = "play";
  playbtn.elt.classList.add("throb");
  playbtn.elt.setAttribute("aria-label", "play/pause");
  playbtn.mouseClicked(() => {
    playbtn.elt.classList.remove("throb");
    if (mySound.isPlaying()) {
      mySound.stop();
      playing = false;
      // art.style.animationPlayState = "paused";
    } else {
      mySound.loop();
      playing = true;
      // art.style.animationDuration =
      //   Math.abs(mySound.duration() / (targetV / 100) / 2) + "s";
      // art.style.animationPlayState = "running";
    }
  });
  playbtn.touchStarted(() => {
    clickA.setVolume(0.1);
    clickA.stop();
    clickA.play();
  });
  playbtn.touchEnded(() => {
    clickB.setVolume(0.1);
    clickB.stop();
    clickB.play();
  });
  controls.appendChild(playbtn.elt);
  sb = createButton("<< SPEED");
  sb.elt.id = "slow";
  sb.elt.setAttribute("aria-label", "slow down");
  sb.mouseClicked(slowDown);
  sb.touchStarted(() => {
    clickA.setVolume(0.1);
    clickA.stop();
    clickA.play();
  });
  sb.touchEnded(() => {
    clickB.setVolume(0.1);
    clickB.stop();
    clickB.play();
  });

  rate.appendChild(sb.elt);

  //canvasSizeToParentSize()

  //mySound.loop();

  mainEl = document.querySelector("main");
  // mainEl.appendChild(toolbar);

  fb = createButton("SPEED >>");
  fb.elt.id = "fast";
  fb.elt.setAttribute("aria-label", "speed up");
  // fb.elt.style.transform = "scaleX(-1)";
  fb.mouseClicked(speedUp);
  fb.touchStarted(() => {
    clickA.setVolume(0.1);
    clickA.stop();
    clickA.play();
  });
  fb.touchEnded(() => {
    clickB.setVolume(0.1);
    clickB.stop();
    clickB.play();
  });

  rate.appendChild(fb.elt);

  // to size this properly, run this code after injecting controls
  const rect = document.querySelector('main').getBoundingClientRect()
  cnv = createCanvas(rect.width, rect.height);

  // playheadOffset = height / 2;
}

function audioUpdate() {
  newPos = mySound.currentTime() / mySound.duration();

  if (newPos !== 0) {
    // smooth pos
    let dp = pos - newPos;
    pos = pos - dp * 0.2;
  }

  targetV = Math.min(Math.max(targetV, -300), 300);
  dv = targetV - v;
  v += dv * easing;
  if (Math.abs(v) < 0.001) {
    v = 0;
  }

  const playbackRate = v / 100;
  mySound.rate(playbackRate);
}

function draw() {
  clear();
  audioUpdate();

  translate(0, waves.height/2 + map(v, min, max, -66, 66));
  // scale(1, 2);
  image(waves, width - waves.width, -waves.height * pos + playheadOffset);
  // blendMode(DIFFERENCE)
  blendMode(MULTIPLY)
  // blendMode(BLEND)
  fill('red');
  rect(110, playheadOffset - playheadThickness + 20, width, playheadThickness);
  // translate(0, map(v, min, max, -100, 100));
  textSize(12);
  blendMode(BLEND)
  fill('black');
  textFont('IBM Plex Mono');
  text(`RATE: ${Math.round(v)}%`, 10, 25);

fill(0, 102, 153);

  noStroke();
  const rate = map(targetV, min, max, -3, 3)


  // translate(0, );
  // fill('#FFD400bb');
  // rect(width - waves.width, playheadOffset - playheadThickness - 20, waves.width, height);

  let LFOSway  = Math.sin((Math.PI * pos * 64 * 5 / 4  + Math.PI/2 * Math.PI/2*0.3)) * 0.2;

  let bopMult = 0;
  let juiceMult = 0;

  let LFOBop = Math.sin((Math.PI * pos * 80 + Math.PI/2 * 0.3)) * bopMult;

  let LFOJuiceA = Math.sin((Math.PI * pos * 64 * 4 + Math.PI/2 * Math.PI/2*0.1)) * juiceMult;
  let LFOJuiceB = Math.cos((Math.PI * pos * 64 * 4 + Math.PI/2 * Math.PI/2*0.1)) * juiceMult;

  // calibration circle
  // let lfoC = Math.sin((Math.PI * pos * 64 * 4 + Math.PI/2));
  // circle(width/2 + width / 2 * lfoC, height/2 + height/2 * lfoC, 100);

  // LFOSway  = 0
  // lfo1a = 0


  angleMode(DEGREES); 
  translate(head.width * 0.3, head.height/2);
  rotate(LFOSway - LFOJuiceA * 8)
  translate(-head.width * 0.3, -head.height/2);
  // translate(0, -head.height);

  // image(head, -20 + LFOBop * 2 + LFOJuiceA * 12, playheadOffset - head.height * 1.3 + map(v,min,max,-40,20) + LFOSway * 5 + LFOJuiceB * 20);


}

