// See a development version at https://69-studios.repl.co/exStyles/roblox.js

// SETTINGS
loadCSS = true // Loads CSS if true
cleanTitle = true // Sets title to "Roblox"
devMode = true // Refreshes CSS every 5 seconds
cssUrl = `<link rel="stylesheet" type="text/css" href="https://69-studios.repl.co/exStyles/roblox.css">` // links CSS

var style = document.createElement('style');
var body = document.documentElement;

// MAIN
var sidebar = document.getElementsByClassName(`left-col-list`)[0]
sidebar.innerHTML = `<li id="timer"> <strong>TIME:</strong> theTime</li>` + sidebar.innerHTML

var timerSB = document.getElementById(`timer`)
console.log(document.getElementById(`timer`))

var firstImage = document.getElementsByClassName(`thumbnail-2d-container`)
var imgURL = "g"
// span.thumbnail-2d-container.carousel-item.carousel-item-active
// functions
function roundToTwo(num) { return + (Math.round(num + "e+2") + "e-2"); }

//actual
if (loadCSS == true) {
    $('head').append(cssUrl);
}

if (devMode == true) {
    setInterval(function() {
        console.log("Refreshed")
        $('head').append(cssUrl);
    }, 5000)
}

// Logs time spent in Roblox
var time = 0

if (localStorage.getItem('time') != null) {
    time = parseInt(localStorage.getItem('time'));
}

setInterval(function() { // Executes every 1,000 ms
    if (document.title != "Roblox" && cleanTitle == true) {
        document.title = "Roblox";
    }

    firstImage = document.getElementsByClassName(`carousel-item-active`)[0]
    imgURL = firstImage.getElementsByTagName("img")[0]
    console.log(imgURL.src)
    style.innerHTML = `
          :root {
            background: url(${imgURL.src}) var(--almostblack) center bottom/cover fixed no-repeat;
            -webkit-transition: background-image 0.2s ease-in-out;
            transition: background-image 0.2s ease-in-out;
          }
        `;
    document.head.appendChild(style);

    setTime()
}, 1000);

// Funny
var target = document.getElementsByClassName(`game-name`)[0]
target.innerHTML = target.innerHTML.replace(`Military Tycoon`, `Poopoo Moneygrab Tycoon`)
target.innerHTML = target.innerHTML.replace(`phrase`, `what to replace with`)

// Functions 

function setTime() {
    time += 1
    if (time > 60) //if time spent is above 60 seconds 
    {
        timerSB.innerHTML = timerSB.innerHTML.replace(`theTime`, roundToTwo(time / 60) + "m")
    }
    else //if time spent is below 60 seconds
    {
        timerSB.innerHTML = timerSB.innerHTML.replace(`theTime`, time) + "minutes"
    }
    localStorage.setItem('time', time);
}
