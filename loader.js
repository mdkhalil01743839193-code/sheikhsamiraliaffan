const lines = [
  "ইসলাম জিন্দাবাদ",
  "নারায়ে তাকবীর, আল্লাহু আকবার",
  "আমি কেরানীগঞ্জ থেকে শেখ সামির আলি আফফান"
];

const bootText = document.getElementById("bootText");
const loader = document.getElementById("loader");
const logo = document.getElementById("loaderLogo");

let i = 0, j = 0;
let loaderFinished = false;

function typeLine() {
  if (i < lines.length) {
    if (j < lines[i].length) {
      bootText.textContent += lines[i][j++];
      setTimeout(typeLine, 70);
    } else {
      bootText.textContent += "\n";
      j = 0;
      i++;
      setTimeout(typeLine, 500);
    }
  } else {
    finishLoader();
  }
}

function finishLoader() {
  if (loaderFinished) return;
  loaderFinished = true;

  logo.classList.add("show");

  setTimeout(() => {
    loader.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
}

// 🔐 FAIL-SAFE: যাই হোক 5 সেকেন্ড পর loader বন্ধ হবে
setTimeout(finishLoader, 5000);

typeLine();
