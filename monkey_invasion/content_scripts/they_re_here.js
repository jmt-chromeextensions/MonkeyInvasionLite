$( document ).ready(function() {
	
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
		djBananas = new Audio(bangers[Math.floor(Math.random()*bangers.length)]);
		djBananas.addEventListener('ended', changeSong, false);
		djBananas.play();
	}

	var bangers = [];
	var monkeys = [];
	
	for (let i = 1; i <= 3; i++) {
		bangers.push(chrome.runtime.getURL(`mewsick/${i}.mp3`));
	}
	
	for (let i = 1; i <= 10; i++) {
		monkeys.push(chrome.runtime.getURL(`monkeys/${i}.gif`));
	}
	
	// ¡Música, maestro!
	var djBananas = new Audio(bangers[Math.floor(Math.random()*bangers.length)]);
	djBananas.addEventListener('ended', changeSong, false);
	djBananas.play();
	
	
	// Initial massive image change
	$("img").attr("src",monkeys[Math.floor(Math.random()*monkeys.length)]);
	$("*").each(function( index ) {
			$(this).css("background-image", "url(" + monkeys[Math.floor(Math.random()*monkeys.length)]);
		});
	
	// Initialize Monkeynator
	Monkeynator();
	
	// All images are changed to a new monkey every three seconds
	setInterval(function(){ 
		$("img").attr("src",monkeys[Math.floor(Math.random()*monkeys.length)]);
		$("*").each(function( index ) {
			$(this).css("background-image", "url(" + monkeys[Math.floor(Math.random()*monkeys.length)]);
		});
	}, 3000);

});
















