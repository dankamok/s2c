
let tijelo= document.querySelector("#tijelo");

let plava= document.querySelector("#plava");
let zuta= document.querySelector("#zuta");
let crvevena= document.querySelector("#crvevena");
let zelena= document.querySelector("#zelena");
let reset= document.querySelector("#reset");

plava.addEventListener('click', function(){
tijelo.style.background="#0278ae";
});
zuta.addEventListener('click', function(){
tijelo.style.background="#ffd66b";
});
crvevena.addEventListener('click', function(){
tijelo.style.background="#e94560";
});
zelena.addEventListener('click', function(){
tijelo.style.background="#61b15a";
});
reset.addEventListener('click', function(){
tijelo.style.background="white";
});