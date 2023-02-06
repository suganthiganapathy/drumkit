const appElement=document.getElementById("buttons");
const btElement=document.getElementById("button");
// button one
const buttonClap=document.createElement("button")
appElement.append(buttonClap);
buttonClap.addEventListener("click", audioOne)

function audioOne(){
    let soundOne=document.getElementById("audio1")   
    soundOne.play()
}


// button two
const buttonHiHat=document.createElement("button")
appElement.append(buttonHiHat);
buttonHiHat.addEventListener("click", audioTwo)

function audioTwo(){
    let soundTwo=document.getElementById("audio2")   
    soundTwo.play()
}
// button three

const buttonKick=document.createElement("button")
appElement.append(buttonKick);
buttonKick.addEventListener("click", audioThree)

function audioThree(){
    let soundThree=document.getElementById("audio3")   
    soundThree.play()
}


const buttonOpenHat=document.createElement("button")
appElement.append(buttonOpenHat);
buttonOpenHat.addEventListener("click", audioFour)

function audioFour(){
    let soundFour=document.getElementById("audio4")   
    soundFour.play()
}

const buttonRide=document.createElement("button")
appElement.append(buttonRide);
buttonRide.addEventListener("click", audioFive)

function audioFive(){
    let soundFive=document.getElementById("audio5")   
    soundFive.play()
}

let buttonSnare = document.createElement("button");

btElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});


/*
let buttonSnare = document.createElement("button");

btElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});

let buttonSnare = document.createElement("button");

btElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});

let buttonSnare = document.createElement("button");

btElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});

let buttonSnare = document.createElement("button");

btElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});*/


document.addEventListener("keydown", (event) => console.log(event));


