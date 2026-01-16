const lines=[
 "ইসলাম জিন্দাবাদ",
 "নারায়ে তাকবীর, আল্লাহু আকবার",
 "আমি কেরানীগঞ্জ থেকে শেখ সামির আলি আফফান"
];

let i=0,j=0;
const t=document.getElementById("bootText");
const l=document.getElementById("loader");
const logo=document.getElementById("loaderLogo");

function run(){
 if(i<lines.length){
  if(j<lines[i].length){t.textContent+=lines[i][j++];setTimeout(run,70)}
  else{t.textContent+="\n";j=0;i++;setTimeout(run,600)}
 }else{
  logo.classList.add("show");
  setTimeout(()=>l.style.display="none",2000)
 }
}
run();
