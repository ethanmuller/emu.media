let mySound;
let playing = false;
let easing = 0.1;
let rateInc = 10;
let t = 0;
const imageScale = 0.2;

let bpm = 81;
let bps = bpm / 60;
let bpms = bps / 1000;

let fpb = 2;
let fps = fpb * bps;
fps = 60;
let fpms = fps / 1000;

let timeMultiplier = 0.055;

let  min = -300;
let  max = 300;
let  targetV = 100;
let  v = targetV;

function preload() {

  myImage = loadImage('./img.png');
  myImageB = loadImage('./imgB.png');

  mySound = loadSound('./a.mp3');

  clickA = loadSound('./a.mp3');
  clickB = loadSound('./b.mp3');
}

function handleFlip() {
  if (targetV <= 0) {
    return document.body.classList.add("flip");
  }
    return document.body.classList.remove("flip");
}

function speedUp() {
  targetV = targetV + rateInc;
  if (Math.abs(targetV) < rateInc) {
    targetV = rateInc;
  }
  handleFlip();
  rateMeter.setAttribute("value", targetV);
  // frameRate(fps);


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

  if (targetV < 0) {
    document.body.classList.add("reverse");
  } else {
    document.body.classList.remove("reverse");
  }

  // if (targetV === 300) {
  //   var t = setInterval(function() {
  //     if (window.goatcounter && window.goatcounter.count) {
  //       clearInterval(t);
  //       goatcounter.count({
  //         event: true,
  //         path: "omg-max-speed"
  //       });
  //     }
  //   }, 100);
  // }
}

function slowDown() {
    // t = t - deltaTime * timeMultiplier * 5;
    targetV = targetV - rateInc;

  if (Math.abs(targetV) < rateInc) {
    targetV = -rateInc;
  }

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

    // if (targetV < 0) {
    //   document.body.classList.add("reverse");
    // } else {
    //   document.body.classList.remove("reverse");
    // }
}

function setup() {

  // myImage.resize(358, 0)
  // myImageB.resize(358, 0)
  // frameRate(fps);
  document.querySelector('#imgB').hidden = true;

  if (navigator.userAgent.match("Firefox")) {
    const msg = document.createElement("P");
    msg.innerHTML =
      "Sorry, this player is a little buggy in Firefox.<br />Player may crash or sound demonic at <50% speed.";
    // document.querySelector(".cta").insertAdjacentElement("afterend", msg);
    // alert('Heads up: this player is a little buggy in Firefox. Sorry.')
  }

  // art = document.querySelector("#art");

  cnv = createCanvas(666, 666);
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


  playbtn = createButton('OWA OWA 📣');
  playbtn.elt.id = "play";
  playbtn.elt.classList.add("throb");
  playbtn.mouseClicked(() => {
    playbtn.elt.classList.remove("throb");
    if (mySound.isPlaying()) {
      mySound.stop();
      playing = false;
      // art.style.animationPlayState = "paused";
    } else {
      // mySound.loop();
      // mySound.play();
      // playing = true;
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
    // clickA.stop();
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

}

function audioDraw() {
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
  audioDraw();



  // scale(1, 1 + Math.sin(t*0.4*targetV/300 - Math.PI/3) * 0.0125);
  // scale(1, 1 + Math.sin(t*0.4*targetV/300 - Math.PI/3) * 0.125);
  scale(1, 1);
  // const s = 0.5;
  // scale(0.5);
  const rate = map(targetV, min, max, -3, 3)
  t = t + deltaTime * rate;

  const bounceLFO  = Math.sin(t * Math.PI * bpms + Math.PI / 2 - Math.PI * 0.3);
  const rockLFO = Math.sin(t * Math.PI * bpms / 2 * 2 + Math.PI / 2 - Math.PI * 0.3);
  const lfo3  = Math.sin(t*2 * Math.PI * bpms + Math.PI / 2 - Math.PI * 0.3);

  image(myImage, width/2 - myImage.width/2, height/2 - myImage.height/2);

  // if (targetV <= 0) {
  //   filter(INVERT);
  // }
  // blendMode(MULTIPLY);
}

