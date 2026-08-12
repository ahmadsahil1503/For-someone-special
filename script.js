const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
const startBtn=document.getElementById("startBtn");
const giftBtn=document.getElementById("giftBtn");
const secretMessage=document.getElementById("secretMessage");

for(let i=0;i<55;i++){
  const s=document.createElement("div");
  s.className="star";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*3+"s";
  document.body.appendChild(s);
}

for(let i=0;i<8;i++){
  const b=document.createElement("div");
  b.className="butterfly";
  b.textContent=i%4===0?"✨":"🦋";
  b.style.left=Math.random()*100+"vw";
  b.style.animationDuration=(12+Math.random()*10)+"s";
  b.style.animationDelay=(-Math.random()*15)+"s";
  document.body.appendChild(b);
}

const petalTypes=["🌸","🌷","🌼","✨"];
setInterval(()=>{
  const p=document.createElement("div");
  p.className="petal";
  p.textContent=petalTypes[Math.floor(Math.random()*petalTypes.length)];
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=(5+Math.random()*5)+"s";
  document.body.appendChild(p);
  setTimeout(()=>p.remove(),10000);
},800);

function hearts(){
  const types=["🤍","💗","💖","🦋","✨"];
  for(let i=0;i<14;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="heart";
      h.textContent=types[Math.floor(Math.random()*types.length)];
      h.style.left=Math.random()*100+"vw";
      h.style.animationDuration=(3+Math.random()*2)+"s";
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),5500);
    },i*90);
  }
}

startBtn.addEventListener("click",()=>{
  music.play().then(()=>{
    musicBtn.textContent="🔊 Music";
  }).catch(()=>{
    musicBtn.textContent="🎵 Tap Music";
  });
  hearts();
  document.querySelectorAll("section")[1].scrollIntoView({behavior:"smooth"});
});

musicBtn.addEventListener("click",()=>{
  if(music.paused){
    music.play().then(()=>musicBtn.textContent="🔊 Music").catch(()=>{});
  }else{
    music.pause();
    musicBtn.textContent="🔇 Music";
  }
});

giftBtn.addEventListener("click",()=>{
  secretMessage.classList.add("show");
  hearts();
  giftBtn.textContent="💝";
});
