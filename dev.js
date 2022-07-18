// Settings
let settings = {
    "loadCSS": true,
    "cleanTitle": true,
    "devMode": true,
    "removeAds": true,
    "cssURL": `https://69-studios.repl.co/exStyles/roblox.css`
}

let gameName = document.getElementsByClassName("game-name")[0];

// Add CSS from cssURL
if (settings.loadCSS) {
    let css = document.createElement("link");
    css.href = settings.cssURL;
    css.rel = "stylesheet";
    css.type = "text/css";
    document.head.appendChild(css);
}

// if devMode is true, refresh CSS from cssURL every 3 seconds
if (settings.devMode) {
    setInterval(function() {
        let css = document.createElement("link");
        css.href = settings.cssURL;
        css.rel = "stylesheet";
        css.type = "text/css";
        document.head.appendChild(css);
    }, 3000);
}

// if cleanTitle is true and there is no gameName class, set the title to Roblox every second
if (settings.cleanTitle) {
    if (gameName == null) {
        setInterval(function() {
            document.title = "Roblox";
        }, 1000);
    }
}
// TIME TRACKER ----------------------------------------------------------
// Count how much time has been spent on the page
let timeSpent = 0;
setInterval(function() {
    if (localStorage.getItem("timeSpent") != null) {
        timeSpent = parseInt(localStorage.getItem("timeSpent"));
        timeSpent++;
        setTime();
    }
    else {
        timeSpent++;
        setTime()
    }
}, 1000)

// Format timeSpent to a readable time format
function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}


// Every 5 seconds
setInterval(function() {
    let firstImage = document.getElementsByClassName(`carousel-item-active`)[0]
    let imgURL = firstImage.getElementsByTagName("img")[0]
    document.body.setAttribute("style", `background: url("${imgURL.src}") center bottom/cover fixed no-repeat !important;
            -webkit-transition: background-image 0.2s ease-in-out;
            transition: background-image 0.2s ease-in-out;
    `);
}, 500)

// if removeAds is true, remove all elements with id Skyscraper-Abp-Right, Skyscraper-Abp-Left or Leaderboard-Abp
if (settings.removeAds) {
    let skyscraper = document.getElementById("Skyscraper-Abp-Right");
    let leaderboard = document.getElementById("Leaderboard-Abp");
    let skyscraperLeft = document.getElementById("Skyscraper-Abp-Left");
    if (skyscraper) {
        skyscraper.remove();}
    if (leaderboard) {
        leaderboard.remove();}
    if (skyscraperLeft) {
        skyscraperLeft.remove();}
    }

// Get element with class left-col-list
let sidebar = document.getElementsByClassName("left-col-list")[0];

// Add a new element to the sidebar with time spent
let timeSpentElement = document.createElement("li");

timeSpentElement.innerHTML = `<li class="timeSpent">Time spent: ${formatTime(timeSpent)}</li>`;
sidebar.innerHTML = timeSpentElement.innerHTML + sidebar.innerHTML;

function setTime() {
    // get element class timeSpent
    let timeSpentClass = document.getElementsByClassName("timeSpent")[0];
    timeSpentClass.innerHTML = `<li class="timeSpent">Time spent:<br> ${formatTime(timeSpent)}</li>`
    // set local storage key "timeSpent" to timeSpent
    localStorage.setItem("timeSpent", timeSpent.toString());
}

// IF an element with class "game-name" exists, set the title to the game name
if (gameName) {
    document.title = gameName.innerHTML;
}
/* IN DEVELOPMENT ---------------------------------------------------------
// When button with class "btn-common-play-game-lg" is clicked, increment localStorage key gameName.innerHTML
let playButton = document.getElementsByClassName("btn-common-play-game-lg")[0];
playButton.addEventListener("click", function() {
    console.log("clicked");
    if (localStorage.getItem("gameName") != null) {
        let gameName = localStorage.getItem("gameName");
        gameName++;
        localStorage.setItem("G_" + gameName, gameName);
    }
    else {
        localStorage.setItem("G_" + gameName, "1");
    }
})
*/ 

// get element with class "game-title-container"
let gameTitle = document.getElementsByClassName("game-title-container")[0];
// Append a new element to the gameTitle with the number of times the game has been played
let gamePlayedElement = document.createElement("li");
gamePlayedElement.innerHTML = `<li class="gamePlayed">Times played: ${localStorage.getItem("G_" + gameName.innerHTML)}</li>`;
