// function atload() {dom_rdy()}window.onload=atload;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
hamburger.classList.toggle("on");
nav.classList.toggle("on");

})

var fotka = document.getElementsByClassName("galeryPictures");
function scalePicture(){
    this.classList.toggle('picUp');
}
var i;
function powFot(){
    for(i = 0; i < fotka.length; i++) {
        fotka[i].addEventListener('click',scalePicture);
      } 
}

powFot();