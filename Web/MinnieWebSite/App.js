let pics = [ "imgs/image.jpg",
    "imgs/image1.jpg",
    "imgs/image2.jpg",
    "imgs/image3.jpg",
    "imgs/image4.jpg",
    "imgs/image5.jpg",
    "imgs/image6.jpg"
    ]

let btn = document.querySelector("button");
let img = document.querySelector("img");
let compteur = 1;
btn.addEventListener("click", function(){
    document.body.style.background = randColor();
    img.src = pics[compteur];
    compteur++;
    if (compteur === 7) {
        compteur = 0;
    }
})

function displayPics(){

}
function randColor(){
    return '#' + (function co(lor){   return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
}





