 // Handles loading the events for <model-viewer>'s slotted progress bar
// import url("https://3dymedios.com/AR/Me_Salve/Static/Style/style.css")

// import css from './style.css';

import materialize from "materialize-css";
//   document.querySelector('model-viewer').addEventListener('progress', onProgress);
// $('head').append('<link rel="stylesheet" type="text/css" href="https://3dymedios.com/AR/Me_Salve/Static/Style/style.css">');
// var cssId = 'myCss';  // you could encode the css path itself to generate id..
// if (!document.getElementById(cssId))
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://3dymedios.com/AR/Me_Salve/Static/Style/style.css';
//     link.media = 'all';
//     head.appendChild(link);
// }

document.addEventListener('DOMContentLoaded', ()=>{
  // location.reload();
  const elementosCarusel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarusel, {
    duration:150,
    dist:-40,
    shift:5,
    padding:5,
    numVisible:3,
    indicators:true,
    // noWrap:true
  })
})
  const Trends= document.querySelector("#trends");
  const collectionBtn = document.querySelector("#collection")
  // const Features = document.querySelector("#features")
  const carrusel = document.querySelector('.carrusel')
  const Trends2 = document.querySelector('.Tendencias')
  const Features2 = document.querySelector('.Caracteristicas')
  
  const collection2 = document.querySelector('.Collecion')
  
  const share = document.querySelector(" #trends .material-symbols-outlined");
  const share2 = document.querySelector(" #features .material-symbols-outlined");
  
  
  const text = document.getElementsByClassName("text");
  const text2 = document.getElementsByClassName("text2");
  
  for (let i = 0; i < text.length; i++) {
    text[i].classList.remove("animate__backInRight");   
  }
  for (let i = 0; i < text2.length; i++) {
    text2[i].classList.remove("animate__backInLeft");   
  }
  
  
  const collection = document.getElementsByClassName("botones");
  
  for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click',()=>{
      carrusel.style.display = 'flex';
      collection2.style.display = "none";
  
  
      for (let i = 0; i < text.length; i++) {
        text[i].classList.remove("animate__backInRight");   
      }
      for (let i = 0; i < text2.length; i++) {
        text2[i].classList.remove("animate__backInLeft");   
      }
      
    });
    
  }
  

  
  collectionBtn.addEventListener('click',()=>{
    carrusel.style.display = 'none';
    collection2.style.display = "block";
    
    for (let i = 0; i < text.length; i++) {
      text[i].classList.add("animate__backInRight");   
    }
    for (let i = 0; i < text2.length; i++) {
      text2[i].classList.add("animate__backInLeft");   
    }
  
    
  });
  
  

  
  
  
  
  
  
  