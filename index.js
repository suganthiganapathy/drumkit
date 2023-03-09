const appElement=document.getElementById("buttons");
const btElement=document.getElementById("button");

// button one
const buttonClap=document.createElement("button");
buttonClap.classList.add("cllickevent")
appElement.append(buttonClap);
buttonClap.addEventListener("click", audioOne)

function audioOne(){
    let soundOne=document.getElementById("audio1")   
    soundOne.play()
}


// button two
const buttonHiHat=document.createElement("button")
buttonHiHat.classList.add("cllickevent")
appElement.append(buttonHiHat);
buttonHiHat.addEventListener("click", audioTwo)

function audioTwo(){
    let soundTwo=document.getElementById("audio2")   
    soundTwo.play()
}
// button three

const buttonKick=document.createElement("button")
buttonKick.classList.add("cllickevent")
appElement.append(buttonKick);
buttonKick.addEventListener("click", audioThree)

function audioThree(){
    let soundThree=document.getElementById("audio3")   
    soundThree.play()
}


const buttonOpenHat=document.createElement("button")
buttonOpenHat.classList.add("cllickevent")
appElement.append(buttonOpenHat);
buttonOpenHat.addEventListener("click", audioFour)

function audioFour(){
    let soundFour=document.getElementById("audio4")   
    soundFour.play()
}

const buttonRide=document.createElement("button")
buttonRide.classList.add("cllickevent")
appElement.append(buttonRide);
buttonRide.addEventListener("click", audioFive)

function audioFive(){
    let soundFive=document.getElementById("audio5")   
    soundFive.play()
}

// keydown event

let buttonSnare = document.createElement("button");
buttonSnare.textContent="a"
buttonSnare.classList.add("keypress");
btElement.append(buttonSnare);
window.addEventListener("keydown", (event) => {
    
  if(event.key==="a"){
  const soundSix = new Audio("sounds/snare.wav");
  soundSix.play();}
});



let clapButton = document.createElement("button");

clapButton.textContent="b"
clapButton.classList.add("keypress");
btElement.append(clapButton);
window.addEventListener("keydown", (event) => {
    
  if(event.key==="b"){
  const soundSeven = new Audio("sounds/clap.wav");
  soundSeven.play();}
});

let buttonOpenhat = document.createElement("button");

buttonOpenHat.textContent="c"
buttonOpenHat.classList.add("keypress");
btElement.append(buttonOpenHat);
window.addEventListener("keydown", (event) => {
    
  if(event.key==="c"){
  const soundEight = new Audio("sounds/Openhat.wav");
  soundEight.play();}
});


let tinkButton = document.createElement("button");

tinkButton.textContent="d";
tinkButton.classList.add("keypress");
btElement.append(tinkButton);
window.addEventListener("keydown", (event) => {
    
  if(event.key==="d"){
  const soundNine = new Audio("sounds/tink.wav");
  soundNine.play();}
});

let tomButton = document.createElement("button");

tomButton.textContent="e"
tomButton.classList.add("keypress");
btElement.append(tomButton);
window.addEventListener("keydown", (event) => {
    
  if(event.key==="e"){
  const soundTen = new Audio("sounds/tom.wav");
  soundTen.play();}
});


