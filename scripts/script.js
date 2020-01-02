// function atload() {dom_rdy()}window.onload=atload;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
hamburger.classList.toggle("on");
nav.classList.toggle("on");

})

var pictureGaleryToggle = document.getElementsByClassName("galeryPictures");
function scalePicture(){
    this.classList.toggle('makePictureBigger');
}
var i;
function addClickToPhoto(){
    for(i = 0; i < pictureGaleryToggle.length; i++) {
        pictureGaleryToggle[i].addEventListener('click',scalePicture);
      } 
}

addClickToPhoto();