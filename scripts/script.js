function atload() {dom_rdy()}window.onload=atload;

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){
hamburger.classList.toggle("on");
nav.classList.toggle("on");

})

// var pictureGaleryToggle = document.getElementsByClassName("galeryPictures");
// function scalePicture(){
//     this.classList.toggle('makePictureBigger');
// }
// var i;
// function addClickToPhoto(){
//     for(i = 0; i < pictureGaleryToggle.length; i++) {
//         pictureGaleryToggle[i].addEventListener('click',scalePicture);
//       } 
// }

// addClickToPhoto();

// var pictureGaleryToggle = document.getElementsByClassName('galeryPictures');

// function removeClass(){
//     this.classList.remove('makePictureBigger');
// }

// var i;
// function removeClickToPhoto(){
//     for(i = 0; i < pictureGaleryToggle.length; i++) {
//         if (pictureGaleryToggle[i].classList.contains('makePictureBigger')==true)
//         {pictureGaleryToggle[i].addEventListener('click',removeClass);}
//       } 
// }

// removeClickToPhoto();

// var pictureGaleryToggle2 = document.getElementsByClassName('galeryPictures');

// function addClass(){
//     this.classList.add('makePictureBigger');
// }

// var j;
// function addClickToPhoto(){
//     for(j = 0; j < pictureGaleryToggle2.length; j++) {
//         if (pictureGaleryToggle2[j].classList.contains('makePictureBigger')==false)
//         {pictureGaleryToggle2[j].addEventListener('click',addClass);}
//       } 
// }

// addClickToPhoto(); 

// var pictureGaleryToggle = document.getElementsByClassName("galeryPictures");
// function scalePicture(event){
//     event.stopPropagation()
//     event.target.classList.toggle('makePictureBigger');
// }
// var i;
// function addClickToPhoto(){
//     for(i = 0; i < pictureGaleryToggle.length; i++) {
//         pictureGaleryToggle[i].addEventListener('click', function(e) {
//             scalePicture(e);
//         });
//       } 
// }
// addClickToPhoto(); 

// function atload() {dom_rdy()}window.onload=atload;

// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector("nav");
// let isImageAlreadyOpened = false;

// hamburger.addEventListener("click", function(){
// hamburger.classList.toggle("on");
// nav.classList.toggle("on");

// })

// const pictureGaleryToggle = document.getElementsByClassName("galeryPictures");

// function handlePictureScaling(event){
//     for (const span of pictureGaleryToggle) {
//         span.classList.remove('makePictureBigger')
//     }
//     if (!isImageAlreadyOpened) {
//         event.target.classList.add('makePictureBigger');
//         isImageAlreadyOpened = true;
//     } else {
//         event.target.classList.remove('makePictureBigger');
//         isImageAlreadyOpened = false;
//     }
// }
// function addClickToPhoto(){
//     for(let i = 0; i < pictureGaleryToggle.length; i++) {
//         pictureGaleryToggle[i].addEventListener('click',function(event) {
//             handlePictureScaling(event);
//         });
//       } 
// }

// addClickToPhoto();