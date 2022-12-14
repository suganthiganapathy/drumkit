const appElement=document.getElementById("buttons");
const buttonClap=document.createElement("button")
appElement.append(buttonClap);
appElement.addEventListener("click", audioOne)

function audioOne(){
    let soundOne=document.getElementById("audio1")   
    soundOne.play()
}

const buttonHiHat=document.createElement("button")
appElement.append(buttonHiHat);
appElement.addEventListener("click", audioTwo)

function audioTwo(){
    let soundTwo=document.getElementById("audio2")   
    soundTwo.play()
}

const buttonKick=document.createElement("button")
appElement.append(buttonKick);
appElement.addEventListener("click", audioThree)

function audioThree(){
    let soundThree=document.getElementById("audio3")   
    soundThree.play()
}



const buttonOpenHat=document.createElement("button")
appElement.append(buttonOpenHat);
appElement.addEventListener("click", audioFour)

function audioFour(){
    let soundFour=document.getElementById("audio4")   
    soundFour.play()
}

const buttonRide=document.createElement("button")
appElement.append(buttonRide);
appElement.addEventListener("click", audioFive)

function audioFive(){
    let soundFive=document.getElementById("audio5")   
    soundFive.play()
}
let buttonSnare = document.createElement("button");

appElement.append(buttonSnare);
window.addEventListener("keydown", () => {
    
  let soundSix = new Audio("sounds/snare.wav")
  soundSix.play();
});





