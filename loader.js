const lines = [
  "ইসলাম জিন্দাবাদ",
  "নারায়ে তাকবীর, আল্লাহু আকবার",
  "আমি কেরানীগঞ্জ থেকে শেখ সামির আলি আফফান"
];

let lineIndex = 0;
let charIndex = 0;

const bootText = document.getElementById("bootText");
const loader = document.getElementById("loader");
const logo = document.getElementById("loaderLogo");

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      bootText.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeLine, 70);
    } else {
      bootText.textContent += "\n";
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 600);
    }
  } else {
    // logo reveal
    logo.classList.add("show");

    // loader fade out
    setTimeout(() => {
      loader.classList.add("fade");
    }, 1200);

    setTimeout(() => {
      loader.style.display = "none";
    }, 2300);
  }
}

typeLine();
