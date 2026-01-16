const lines = [
  "Establishing Secure Connection...",
  "Authenticating Identity...",
  "Initializing Cybersecurity Systems...",
  "Session Authorized"
];

const bootText = document.getElementById("bootText");
const loader = document.getElementById("loader");
const logo = document.getElementById("loaderLogo");
const sound = document.getElementById("bootSound");

let lineIndex = 0;
let charIndex = 0;

sound.play().catch(()=>{});

function typeLine() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      bootText.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeLine, 45);
    } else {
      if (lineIndex === lines.length - 1) {
        bootText.classList.add("shift");
      }
      bootText.textContent += "\n";
      charIndex = 0;
      lineIndex++;
      if (lineIndex === lines.length) {
        setTimeout(revealLogo, 900);
      } else {
        setTimeout(typeLine, 500);
      }
    }
  }
}

function revealLogo() {
  logo.classList.add("show");
  setTimeout(() => loader.classList.add("fade"), 1200);
  setTimeout(() => {
    loader.style.display = "none";
    sound.pause();
  }, 2300);
}

typeLine();
