// typing
const roles=["Cybersecurity Researcher","Ethical Hacker","Web & Software Developer","AI Tool Developer"];
let r=0,c=0,t="",el=document.getElementById("typing");
function type(){if(c<roles[r].length){t+=roles[r][c++];el.textContent=t;setTimeout(type,80)}else setTimeout(erase,1200)}
function erase(){if(c>0){t=t.slice(0,-1);el.textContent=t;c--;setTimeout(erase,40)}else{r=(r+1)%roles.length;setTimeout(type,200)}}
type();

// counters
document.querySelectorAll("[data-count]").forEach(e=>{
 let target=+e.dataset.count,val=0,inc=target/80;
 function run(){if(val<target){val+=inc;e.textContent=Math.floor(val);requestAnimationFrame(run)}else e.textContent=target+"+"}
 run();
});

// terminal
const out=document.getElementById("terminal-output");
const inp=document.getElementById("terminal-input");
inp.addEventListener("keydown",e=>{
 if(e.key==="Enter"){
  let c=inp.value.toLowerCase();
  let m={help:"about | skills | focus | banglasafe",about:"Cybersecurity specialist from Bangladesh",
         skills:"Ethical hacking, Web security, AI tools",focus:"Bangladesh & South Asia",
         banglasafe:"Founder of BanglaSafe"};
  out.innerHTML+=`<p>> ${c}<br>${m[c]||"command not found"}</p>`;
  inp.value="";
 }
});

// music
const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicToggle");
music.volume=0.2;let enabled=false;
function startMusic(){if(enabled){music.play().catch(()=>{})}}
document.addEventListener("click",startMusic);
document.addEventListener("touchstart",startMusic);
btn.onclick=()=>{if(music.paused){enabled=true;music.play().catch(()=>{});btn.textContent="🔊 Music ON"}else{music.pause();enabled=false;btn.textContent="🔇 Music OFF"}};
