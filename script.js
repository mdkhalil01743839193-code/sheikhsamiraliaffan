// TYPING EFFECT
const roles = [
  "Cybersecurity Researcher",
  "Ethical Hacker",
  "Web & Software Developer",
  "AI Tool Developer"
];
let r = 0, c = 0, current = "";
const typing = document.getElementById("typing");

function type() {
  if (c < roles[r].length) {
    current += roles[r][c++];
    typing.textContent = current;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (c > 0) {
    current = current.slice(0, -1);
    typing.textContent = current;
    c--;
    setTimeout(erase, 40);
  } else {
    r = (r + 1) % roles.length;
    setTimeout(type, 200);
  }
}
type();

// COUNTERS
document.querySelectorAll('[data-count]').forEach(el => {
  let target = +el.dataset.count;
  let count = 0;
  let inc = target / 100;
  function update() {
    if (count < target) {
      count += inc;
      el.textContent = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      el.textContent = target + "+";
    }
  }
  update();
});

// TERMINAL
const out = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    let cmd = input.value.toLowerCase();
    const map = {
      help: "about | skills | focus | banglasafe | clear",
      about: "Cybersecurity specialist from Bangladesh",
      skills: "Ethical hacking, Web security, AI tools",
      focus: "Bangladesh & South Asia",
      banglasafe: "Founder of BanglaSafe initiative"
    };
    if (cmd === "clear") out.innerHTML = "";
    else out.innerHTML += `<p>> ${cmd}<br>${map[cmd] || "command not found"}</p>`;
    input.value = "";
  }
});

// MODE
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("cyber");
};
