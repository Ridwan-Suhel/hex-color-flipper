const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];
const btn = document.querySelector("#click-me");

const colorCode = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hexCode[getRandomNumber()];
    }
    colorCode.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hexCode.length);
};

/*------------------
Loader vanila js code
-------------------*/ 
let loaderWrapper = document.querySelector(".loader-wrapper");

window.addEventListener("load", function(){
    loaderWrapper.style.display = "none";
});

/*------------------
jQuery code for Loader
-------------------*/ 
// $(window).on("load",function(){
// $(".loader-wrapper").fadeOut(2500);
// });

/*------------------
My Squad
-------------------*/ 
let data = [
    {   
        name: "<a class='ridwan' href='www.ridwansuhel.com'>Ridwan</a>",
        shirt: 1,
        img: "<img class='test' src='img/ridwan.png'>",
    },
    {
        name: "Messi",
        shirt: 10,
        img: "<img class='test' src='img/messi.png'>",
    },
    {
        name: "Ronaldo",
        shirt: 7,
        img: "<img class='test' src='img/ronaldo.png'>",
    },
    {
        name: "Warner",
        shirt: 30,
        img: "<img class='test' src='img/warner.png'>",
    },
    {
        name: "Neymar",
        shirt: 11,
        img: "<img class='test' src='img/neymar.png'>",
    },
    {
        name: "Mash",
        shirt: 2,
        img: "<img class='test' src='img/mash.png'>",
    },
    {
        name: "Alex",
        shirt: 3,
        img: "<img class='test' src='img/alex.png'>",
    },
    {
        name: "Smith",
        shirt: 15,
        img: "<img class='test' src='img/smith.png'>",
    },
    {
        name: "Shakib",
        shirt: 75,
        img: "<img class='test' src='img/shakib.png'>",
    },
    {
        name: "Dybala",
        shirt: 19,
        img: "<img class='test' src='img/dybala.png'>",
    },
]

let info = document.querySelector(".info");

let details = data.map(function(item){
    // return "<div>"+ "Player Name: " + item.name + "<img src='img/img-1.png'>" +"</div>";
    return "<div class='sq-card'>"+ item.img  +
    "Player Name: " + item.name + "<br>" +
    "Player Shirt: " + item.shirt
     +"</div>";
});

info.innerHTML = details.join("\n");




