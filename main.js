'strict'
const images = ['img/products/t-shirt.png',
        'img/products/t-shirt2.png',
        'img/products/t-shirt3.png',
        'img/products/bag.png',
        'img/products/wallet.png',
        'img/products/cargo.png',
        'img/products/shoe.png',
        'img/products/shoes.png'
]

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');
const imgSlider = document.querySelectorAll('.slider-img');
let i = 0;


btnRight.onclick = ()=>{
    
     imgSlider.forEach( image => {
        if( i==8 )i=0;
        image.src = images[i++];
        console.dir(image)
    })
    return i;

}
btnLeft.onclick = ()=>{

     imgSlider.forEach( image => {
        if( i==0 )i=7;
        image.src = images[i--];
        console.log(i)
    })

}


