// SETTINGS - set to true or false depending on your preference
loadCSS = true // Loads updates CSS via the 69 Studios website 
cleanTitle = true // Sets title to "Roblox"
activity = true // Keeps track of your total time spent on the Roblox website

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
	if (document.title != "Roblox" && cleanTitle == true) {document.title = "Roblox";}
	time += 1
	if (activity == true) {
		if (time > 60) {
			console.log(roundToTwo(time/60), " minutes or ", time, " seconds")
		}
		else {
			console.log(time)
		}
	}
	// console.log(localStorage.getItem('time'));
	localStorage.setItem('time', time);
}, 1000);
