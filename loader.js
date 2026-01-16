const loader = document.getElementById("loader");
const bootText = document.getElementById("bootText");
const logo = document.getElementById("loaderLogo");

const lines = [
  "ইসলাম জিন্দাবাদ",
  "নারায়ে তাকবীর, আল্লাহু আকবার",
  "আমি কেরানীগঞ্জ থেকে শেখ সামির আলি আফফান"
];

let line = 0;
let char = 0;
let typingDone = false;

function typeLine() {
  if (!bootText || !loader) return finishLoader();

  if (line < lines.length) {
    if (char < lines[line].length) {
      bootText.textContent += lines[line][char++];
      setTimeout(typeLine, 70);
    } else {
      bootText.textContent += "\n";
      char = 0;
      line++;
      setTimeout(typeLine, 400);
    }
  } else {
    typingDone = true;
    showLogoAndExit();
  }
}

function showLogoAndExit() {
  if (logo) logo.classList.add("show");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1000);
}

/* 🔥 FAIL-SAFE: যেকোনো কারণে typing আটকে গেলে */
function finishLoader() {
  if (!loader) return;
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
}

/* ⏱️ HARD TIMEOUT (গ্যারান্টি) */
setTimeout(() => {
  if (!typingDone) finishLoader();
}, 4500);

/* START */
typeLine();
