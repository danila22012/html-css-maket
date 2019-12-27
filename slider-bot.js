'use strict'

const sliderbot = document.querySelectorAll('.slider-bot-product');


const slider = document.querySelector('#slider-bot');
const sliderImages = document.querySelectorAll('.slider-bot-product');
//buttons

const prevBtn = document.querySelector("#btn-left");
const nextBtn = document.querySelector("#btn-right");
//counter

let counter = 0;
const size = 401;



nextBtn.onclick = () => {

    slider.style.cssText = ``

    counter++;
    if (counter >= 5)  counter = 0;
       
    slider.style.cssText = `transition: 0.4s ease-in-out;
    transform: translate(${-size * counter}px, 0px);`;
    
}
prevBtn.onclick = () => {

    slider.style.cssText = ``

    counter--;
    if (counter <= -1) counter = 4;
    
    slider.style.cssText = `transition: 0.4s ease-in-out;
    transform: translate(${-size * counter}px, 0px);`;

}
























// 'use strict'
// const images = ['img/products/t-shirt.png',
//         'img/products/t-shirt2.png',
//         'img/products/t-shirt3.png',
//         'img/products/bag.png',
//         'img/products/wallet.png',
//         'img/products/cargo.png',
//         'img/products/shoe.png',
//         'img/products/shoes.png'
// ]

// const btnLeft = document.querySelector('#btn-left');
// const btnRight = document.querySelector('#btn-right');
// const imgSlider = document.querySelectorAll('.slider-img');
// let i = 0;


// btnRight.onclick = ()=>{

//      imgSlider.forEach( image => {
//         if( i==8 )i=0;
//         image.src = images[i++];
//         console.dir(image)
//     })
//     return i;

// }
// btnLeft.onclick = ()=>{

//      imgSlider.forEach( image => {
//         if( i==0 )i=7;
//         image.src = images[i--];
//         console.log(i)
//     })

// }


