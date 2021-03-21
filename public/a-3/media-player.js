let mySound;
let playing = false;
let easing = 0.1;
let rateInc = 10;
let t = 0;
const imageScale = 0.2;

let bpm = 151;
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
  const audioEl = document.querySelector('#audio');
  const audioUrl = audioEl.src;

  const imgEl = document.querySelector('#cover');
  const imgUrl = imgEl.src;

  audioEl.hidden = true;
  myImage = loadImage(imgUrl);

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
  // frameRate(fps);
  cover.hidden = true;
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

  noStroke();
  fill(209, 209, 236);
  // scale(1, 1 + Math.sin(t*0.4*targetV/300 - Math.PI/3) * 0.0125);
  // scale(1, 1 + Math.sin(t*0.4*targetV/300 - Math.PI/3) * 0.125);
  scale(1, 1);
  // const s = 0.5;
  // scale(0.5);
  const rate = map(targetV, min, max, -3, 3)
  t = t + deltaTime * rate;
  const playMod = playing ? 0.8 : 0.3;
  const lfo1  = Math.sin(t * Math.PI * bpms * rate / 4 * 4 + Math.PI / 2 - Math.PI * 0.3) * playMod;
  const lfo1a = Math.sin(t * Math.PI * bpms * rate     * 2 + Math.PI / 2 - Math.PI * 0.3) * playMod;
  const lfo2  = Math.sin(t * Math.PI * bpms * rate * 2);
  myImage.resize(666, 666)

  angleMode(DEGREES); 
  translate(666, 666);
  rotate(lfo1a)
  translate(-666, -666);
  scale(1, 1 + lfo1 * 0.04 + lfo1a * 0.02)
  translate(0, 1 + lfo1 * 15 + lfo1a * 15);
  // image(myImage, width/2 - myImage.width/2, height/2 - myImage.height/2 + Math.sin(t*0.4*targetV/300 - Math.PI) * 3);

  // filter(INVERT);
  // if (targetV <= 0) {
  //   background(targetV <= 0 ? "white" : getComputedStyle(document.body).getPropertyValue('--bg'));
  // }
  image(myImage, width/2 - myImage.width/2, height/2 - myImage.height/2);

  // if (targetV <= 0) {
  //   filter(INVERT);
  // }
  // blendMode(MULTIPLY);
}

