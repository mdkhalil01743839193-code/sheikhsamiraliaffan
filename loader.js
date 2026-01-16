document.addEventListener("DOMContentLoaded",()=>{
  const loader=document.getElementById("loader");
  const boot=document.getElementById("bootText");
  const logo=document.getElementById("loaderLogo");

  const lines=[
    "ইসলাম জিন্দাবাদ",
    "নারায়ে তাকবীর, আল্লাহু আকবার",
    "আমি কেরানীগঞ্জ থেকে শেখ সামির আলি আফফান"
  ];

  let i=0,j=0;

  function type(){
    if(i<lines.length){
      if(j<lines[i].length){
        boot.textContent+=lines[i][j++];
        setTimeout(type,60);
      }else{
        boot.textContent+="\n";
        j=0;i++;
        setTimeout(type,350);
      }
    }else{
      if(logo) logo.classList.add("show");
      setTimeout(hide,900);
    }
  }

  function hide(){
    if(!loader) return;
    loader.style.opacity="0";
    setTimeout(()=>loader.style.display="none",700);
  }

  setTimeout(hide,3500); // hard timeout
  type();
});
