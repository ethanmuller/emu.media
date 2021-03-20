let mySound;
let easing = 0.1;
let rateInc = 10;

function preload() {
  const audioEl = document.querySelector('#audio');
  const audioUrl = audioEl.src;

  audioEl.hidden = true;
  mySound = loadSound(audioUrl);

  clickA = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-b.mp3?v=1600992753524"
  );
  clickB = loadSound(
    "https://cdn.glitch.com/0dc0bcbe-e4c8-44c2-8133-b1249eaa273b%2Fclick-a.mp3?v=1600992749379"
  );
}

function setup() {
  if (navigator.userAgent.match("Firefox")) {
    const msg = document.createElement("P");
    msg.innerHTML =
      "Sorry, this player is a little buggy in Firefox.<br />Player may crash or sound demonic at <50% speed.";
    // document.querySelector(".cta").insertAdjacentElement("afterend", msg);
    // alert('Heads up: this player is a little buggy in Firefox. Sorry.')
  }

  targetV = 100;
  v = targetV;

  // art = document.querySelector("#art");

  cnv = createCanvas(240, 50);
  // const toolbar = document.querySelector("#toolbar");
  // toolbar.prepend(cnv.canvas);

  // slider = createSlider(-200, 200, v)
  // controls.appendChild(slider.elt)

  playbtn = createButton(
    '<svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 16.5L0.249998 32.5215L0.25 0.47853L28 16.5Z" fill="#fff"/></svg>'
  );
  playbtn.elt.id = "play";
  playbtn.elt.classList.add("throb");
  playbtn.elt.setAttribute("aria-label", "play/pause");
  playbtn.mouseClicked(() => {
    playbtn.elt.classList.remove("throb");
    if (mySound.isPlaying()) {
      mySound.pause();
      // art.style.animationPlayState = "paused";
    } else {
      mySound.loop();
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

  fb = createButton("faster");
  fb.elt.id = "fast";
  fb.elt.setAttribute("aria-label", "speed up");
  // fb.elt.style.transform = "scaleX(-1)";
  fb.mouseClicked(() => {
    targetV = targetV + rateInc;

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

    if (targetV === 300) {
      var t = setInterval(function() {
        if (window.goatcounter && window.goatcounter.count) {
          clearInterval(t);
          goatcounter.count({
            event: true,
            path: "omg-max-speed"
          });
        }
      }, 100);
    }
  });
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
  controls.appendChild(fb.elt);

  sb = createButton("slower");
  sb.elt.id = "slow";
  sb.elt.setAttribute("aria-label", "slow down");
  sb.mouseClicked(() => {
    targetV = targetV - rateInc;

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
  });
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
  controls.appendChild(sb.elt);

  //canvasSizeToParentSize()

  //mySound.loop();

  mainEl = document.querySelector("main");
  // mainEl.appendChild(toolbar);
}

function draw() {
  clear();

  targetV = Math.min(Math.max(targetV, -300), 300);

  dv = targetV - v;
  v += dv * easing;
  if (Math.abs(v) < 0.001) {
    v = 0;
  }

  const playbackRate = v / 100;
  mySound.rate(playbackRate);

  noStroke();

  const w = 200;
  const hw = w / 2;

  fill(209, 209, 236);
  rect(width / 2 - hw, height - 16, w, 1);

  for (let i = 0; i <= 6; i++) {
    rect((w / 6) * i + width / 2 - hw, height - 21, 1, 12);
  }

  fill(255);
  stroke(209, 209, 236);
  circle(width / 2, height - 15, 13);

  fill(255, 0, 0);
  noStroke(0);
  circle(
    map(targetV, -300, 300, width / 2 - hw, width / 2 + hw),
    height - 15,
    9
  );

  textSize(12);
  textFont("monospace");
  textAlign(CENTER);
  text(
    Math.round(v) + "%",
    map(targetV, -300, 300, width / 2 - hw, width / 2 + hw) + 2,
    height - 30
  );
}
