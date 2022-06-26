// SETTINGS
loadCSS = true // Loads CSS if true
cleanTitle = false // Sets title to "Roblox"

// MAIN
// functions
function roundToTwo(num) {
    return + (Math.round(num + "e+2")  + "e-2");
}

//actual
if (loadCSS == true) {
	$('head').append('<link rel="stylesheet" type="text/css" href="https://69-studios.repl.co/exStyles/roblox.css">'); // Adds the CSS
}



// Logs time spent in Roblox
var time = 0

if (localStorage.getItem('time') != null) {
	time = parseInt(localStorage.getItem('time'));
}

setInterval(function () {
	console.log(document.title)
	
	if (document.title != "Roblox" && cleanTitle == true) {document.title = "Roblox";}
	time += 1
	if (time > 60) {
		console.log(roundToTwo(time/60), " minutes or ", time, " seconds")
	}
	else {
		console.log(time)
	}
	// console.log(localStorage.getItem('time'));
	localStorage.setItem('time', time);
}, 1000);
