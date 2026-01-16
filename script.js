// Typing roles
const roles=["Cybersecurity Researcher","Ethical Hacker","Web & Software Developer","AI Tool Developer"];
let r=0,c=0,t="",el=document.getElementById("typing");
function type(){
  if(!el) return;
  if(c<roles[r].length){
    t+=roles[r][c++];el.textContent=t;setTimeout(type,80);
  }else setTimeout(erase,1200);
}
function erase(){
  if(c>0){
    t=t.slice(0,-1);el.textContent=t;c--;setTimeout(erase,40);
  }else{r=(r+1)%roles.length;setTimeout(type,200);}
}
type();

// Counters
document.querySelectorAll("[data-count]").forEach(e=>{
  let target=+e.dataset.count,val=0,inc=target/80;
  function run(){
    if(val<target){val+=inc;e.textContent=Math.floor(val);requestAnimationFrame(run);}
    else e.textContent=target+"+";
  }
  run();
});

// Music
const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicToggle");
music.volume=0.2;let enabled=false;
document.addEventListener("click",()=>{if(enabled) music.play().catch(()=>{})},{once:true});
btn.onclick=()=>{
  if(music.paused){
    enabled=true;music.play().catch(()=>{});
    btn.textContent="🔊 Music ON";
  }else{
    music.pause();enabled=false;
    btn.textContent="🔇 Music OFF";
  }
};
