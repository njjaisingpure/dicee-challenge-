//player 1 dice changes
let randomNumber1 = Math.floor((Math.random()*6))+1;
let modstrin1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",modstrin1);

//player 2 dice changes
let randomNumber2 = Math.floor(Math.random()*6)+1;
let modstring2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",modstring2);

//conditions to check who won or its draw
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Won!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Won! 🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}