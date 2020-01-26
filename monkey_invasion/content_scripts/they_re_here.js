$( document ).ready(function() {
	
	function theyreHere() {
		
		$("#m4k3_monk3ys_g0_div").hide();
		clearInterval(initialMonkeySpam);
		
		// Phase 2: The Rave
		
		// ¡Música, maestro!
		djBananas = new Audio(chrome.runtime.getURL('mewsick/4.mp3'));
		djBananas.addEventListener('ended', changeSong, false);
		djBananas.play();
		
		// Fullscreen
        // https://stackoverflow.com/questions/7495373/how-to-make-browser-full-screen-using-f11-key-event-through-javascript
        // var el = document.documentElement
            // , rfs = // for newer Webkit and Firefox
                // el.requestFullScreen
                // || el.webkitRequestFullScreen
                // || el.mozRequestFullScreen
                // || el.msRequestFullScreen
            // ;
        // if (typeof rfs != "undefined" && rfs) {
            // rfs.call(el);
        // } 
		
		// Initial massive image change
		$("img").each(function( index ) {
				$(this).attr("src",monkeys[Math.floor(Math.random()*monkeys.length)]);
			});
		$("*").each(function( index ) {
				$(this).css("background-image", "url(" + monkeys[Math.floor(Math.random()*monkeys.length)]);
			});
		
		// Initialize Monkeynator
		Monkeynator();
		
		// All images are changed to a new monkey every three seconds
		setInterval(function(){ 
		
			// Toss a 100-faced coin to your prince
			if (Math.round(Math.random() * 100) == 55)
				babyVegeta();
			else	
				changeMonkeys();
		
		}, 3000);
			
	}
	
	function Monkeynator() {
		
		// Mutation Observer instantiation
		var mutationObs = new MutationObserver(callbackChannelAdded);
		
		// Observe initialization
		mutationObs.observe(document.body, { childList: true, subtree: true });
	  
	}

	// This function aims to replace every new image added to the page with one of the ape invaders.
	// In addition, monkeys will try to occupy the background images of all of the new elements.
	function callbackChannelAdded(mutations, mutationObs) {
		
		for (let i = 0, length = mutations.length; i < length; i++) {

			if (mutations[i].addedNodes[0]) {
				
				let addedChannelDiv = mutations[i].addedNodes[0];
				$(addedChannelDiv).css("background-image", "url(" + monkeys[Math.floor(Math.random()*monkeys.length)]);
				
				let addedImg = $(addedChannelDiv).find("img");
				
				if (addedImg) {
					$(addedImg).attr("src",monkeys[Math.floor(Math.random()*monkeys.length)]);
					
				}
			
			}
		}
		
	}
	
	function changeSong() {
		let randomSongIndex = Math.floor(Math.random()*bangers.length);
		
		while (randomSongIndex == lastSongIndex) {
			randomSongIndex = Math.floor(Math.random()*bangers.length);
		}
		
		lastSongIndex = randomSongIndex;
		djBananas = new Audio(bangers[randomSongIndex]);
		djBananas.addEventListener('ended', changeSong, false);
		djBananas.play();
	}
	
	function changeMonkeys() {
		$("img").each(function( index ) {
			$(this).attr("src",monkeys[Math.floor(Math.random()*monkeys.length)]);
		});
		$("*").each(function( index ) {
				$(this).css("background-image", "url(" + monkeys[Math.floor(Math.random()*monkeys.length)]);
		});
	}
	
	function babyVegeta() {
		$("img").attr("src",chrome.runtime.getURL('monkeys/baby.gif'));
		$("*").css("background-image", "url(" + chrome.runtime.getURL('monkeys/baby.gif'));
	}

	// Add stylesheet
	let monkeysGoStylesheet = '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL('content_scripts/makemonkeysgo.css') + '">';
	$("head").append(monkeysGoStylesheet);
	$("body").append('<div id="m4k3_monk3ys_g0_div" class="m4k3_monk3ys_g0_container"> <div class="m4k3_monk3ys_g0"> MAKE THE MONKEYS GO </div> </div>');
	$("#m4k3_monk3ys_g0_div").click(theyreHere);

	// Get all monkeys and songs
	var bangers = [];
	var monkeys = [];
	
	var djBananas;
	var lastSongIndex = 3;
	
	for (let i = 1; i <= 6; i++) {
		bangers.push(chrome.runtime.getURL(`mewsick/${i}.mp3`));
	}
	
	for (let i = 1; i <= 10; i++) {
		monkeys.push(chrome.runtime.getURL(`monkeys/${i}.gif`));
	}
	
	// Phase 1: The Bait
	
	$("*").css("background-image", "url(" + chrome.runtime.getURL('monkeys/1.gif'));	
	setTimeout(function(){ $("#m4k3_monk3ys_g0_div").show() }, 6000);
	var initialMonkeySpam = setInterval(function(){ $("*").css("background-image", "url(" + chrome.runtime.getURL('monkeys/1.gif')); }, 1000);

});
















