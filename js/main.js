import { Time } from "./time.js"        //Import Time class

//Get HTML elements
let digitalHour = document.getElementById("Digital-Hour");
let digitalMinute = document.getElementById("Digital-Minute");
let digitalSecond = document.getElementById("Digital-Second");
let analogHour = document.getElementById("Arm-Hour");
let analogMinute = document.getElementById("Arm-Minute");
let analogSecond = document.getElementById("Arm-Second");

//Get the time
let t = new Time();

//Set the time's current rotation degrees
let dHr = (t.currentHour() * 30) + (t.currentMinute() * 0.5);
let dMin = t.currentMinute() * 6;
let dSec = t.currentSecond() * 6;

//Update the HTML elements
updateElements(dHr, dMin, dSec);

//Clock update function
function updateClocks() {
    //Get time
    t = new Time();

    //Update analog clock
    //Set the current rotation degrees
    dHr = (t.currentHour() * 30) + (t.currentMinute() * 0.5);
    dMin = t.currentMinute() * 6;
    //Increase seconds rotation by 6 deg
    dSec += 6;

    //Update the HTML elements
    updateElements(dHr, dMin, dSec);
}

//Update the clock every second
setInterval(updateClocks, 1000);

function updateElements(dHr, dMin, dSec) {
    //Update digital clock
    digitalHour.innerHTML = t.currentHour();
    digitalMinute.innerHTML = t.currentMinute();
    digitalSecond.innerHTML = t.currentSecond();

    //Update the current hand rotations
    analogHour.style.transform = "translate(-50%, -50%) rotate(" + dHr + "deg)";
    analogMinute.style.transform = "translate(-50%, -50%) rotate(" + dMin + "deg)";
    analogSecond.style.transform = "translate(-50%, -50%) rotate(" + dSec + "deg)";
}

//The animation class is only applied to the seconds arm
//The viewers mind will percieve the minute hand as being animated
//And the hour hand moves too slowly to matter
function applyArmAnimationClass() {
    analogSecond.classList.add("arm-animation");
}

//Wait half a second before applying the class
let applyClass = setInterval(function() {
    applyArmAnimationClass();
    clearInterval(applyClass);
}, 500);