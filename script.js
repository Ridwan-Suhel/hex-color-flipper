const colors = ["red","green","blue","#4caf50","#3f51b5","#9e9e9e","#cddc39","#e91e63"];
const button = document.querySelector("#click-me");
const color = document.querySelector(".color");


button.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor( Math.random() * colors.length);
}


