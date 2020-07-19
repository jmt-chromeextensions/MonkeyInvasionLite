// God Save Dropbox and these URLs

const MONO = "https://www.dropbox.com/s/lv8j0xb6n7eidga/monoooo.png?raw=1";
const MONO_GRIS = "https://www.dropbox.com/s/ncdiezdj557wghr/monoooo-grey.png?raw=1";

const MONKEYS = 
["https://www.dropbox.com/s/v8kh7sy4uysubei/1.gif?raw=1",
"https://www.dropbox.com/s/0ayoz60befkkhi8/2.gif?raw=1",
"https://www.dropbox.com/s/7cibzslxdtbhfv7/3.gif?raw=1",
"https://www.dropbox.com/s/w14t5j2w52pt17v/4.gif?raw=1",
"https://www.dropbox.com/s/03rj8wrxmgdnejh/5.gif?raw=1",
"https://www.dropbox.com/s/1rdqttwfoihnkwh/6.gif?raw=1",
"https://www.dropbox.com/s/wxxfdzk6rz50lnc/7.gif?raw=1",
"https://www.dropbox.com/s/6x203ibvp6as4zo/8.gif?raw=1",
"https://www.dropbox.com/s/i1i4etvvtvsy322/9.gif?raw=1",
"https://www.dropbox.com/s/6317ozrytbheti8/10.gif?raw=1",]

const BABY_VEGETA = "https://www.dropbox.com/s/wrxlh28sp11d56j/baby.gif?raw=1";

const BANGERS = 
["https://www.dropbox.com/s/l64msaboqfublby/4.mp3?raw=1",
"https://www.dropbox.com/s/0y9qgdftafr5g57/1.mp3?raw=1",
"https://www.dropbox.com/s/8wko59fjevzf9hc/2.mp3?raw=1",
"https://www.dropbox.com/s/nkcb025s50rw2c4/3.mp3?raw=1",
"https://www.dropbox.com/s/shrab8kt4gbceak/5.mp3?raw=1",
"https://www.dropbox.com/s/l9txy2q3n0rfv02/6.mp3?raw=1"]

$(document).ready(function () {

	// Gather all monkeys and songs 🎺🙈🙉🙊🎺
	
	var djBananas = new Audio(BANGERS[0]); // Load the first song so it can be ready when the invasion starts
	var lastSongIndex = 0;

	var monkey_soldiers = [];
	monkeysAssemble();

	// Monkey loader and bait button

	$("body").append(`
	
	<div id="planet_of_the_apes" class="planet_of_the_apes" style="display:none">
        <div id="monkeycons_bait">
            <div id="monkeycons">
                <div class="monkeycons">
                    <img src="${MONO}" />
                    <div id="color_monkey" class="crop">
                        <img src="${MONO_GRIS}" />
                    </div>
                </div>
            </div>
            <div id="bait_div" style="display:none">
                <div id="low_quality_bait" class="m4k3_monk3ys_g0">MAKE <br /> THE MONKEYS <br /> GO</div>
            </div>
        </div>
    </div>

	`);

	$("#low_quality_bait").click(theyreHere);

	// Phase 1: The Bait

	$("*").css("background-image", "url(" + MONKEYS[0]);

	var initialMonkeySpam = setInterval(function () { $("*").css("background-image", "url(" + MONKEYS[0]); }, 1000);

	setTimeout(() => {

		$("#planet_of_the_apes").show();

		let imageLoad = setInterval(function () {
			$("#color_monkey").height($("#color_monkey").height() - 2.5)

			if ($("#color_monkey").height() < 10) {

				setTimeout(() => {
					$("#planet_of_the_apes").css("cursor", "pointer");
				}, 500);

				$("#monkeycons_bait").addClass("flip-card-inner");
				$("#monkeycons").addClass("flip-card-front");
				$("#bait_div").addClass("flip-card-back");
				$("#bait_div").show();

				clearInterval(imageLoad);
			}

		}, 50);

	}, 3000);

	function monkeysAssemble() {
		debugger;
		MONKEYS.forEach(monkey => {
			let img = new Image();
			img.src = monkey;
			monkey_soldiers.push(img);
		});
	}

	function theyreHere() {

		$("#planet_of_the_apes").hide();
		clearInterval(initialMonkeySpam);

		// Phase 2: The Rave

		// Initial massive image change
		$("img").each(function () {
			// $(this).attr("src", MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
			$(this).attr("src", monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);
		});
		$("*").each(function () {
			// $(this).css("background-image", "url(" + MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
			$(this).css("background-image", "url(" + monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);
		});

		// ¡Música, maestro!
		djBananas.addEventListener('ended', changeSong, false);
		djBananas.play();

		// Initialize Monkeynator
		Monkeynator();

		// All images are changed to a new monkey every three seconds
		setInterval(function () {

			// Toss a 100-faced coin to your prince
			if (Math.round(Math.random() * 100) == 55)
				babyVegeta();
			else
				changeMonkeys();

		}, 3000);

	}

	function Monkeynator() {

		// Mutation Observer instantiation
		var mutationObs = new MutationObserver(newInnocentHtmlAdded);

		// Observe initialization
		mutationObs.observe(document.body, { childList: true, subtree: true });

	}

	// This function aims to replace every new image added to the page with one of the ape invaders.
	// In addition, monkeys will try to occupy the background images of all of the new elements.
	function newInnocentHtmlAdded(mutations) {

		for (let i = 0, length = mutations.length; i < length; i++) {

			if (mutations[i].addedNodes[0]) {

				let addedContent = mutations[i].addedNodes[0];
				// $(addedContent).css("background-image", "url(" + MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
				$(addedContent).css("background-image", "url(" + monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);

				let addedImg = $(addedContent).find("img");

				if (addedImg) {
					// $(addedImg).attr("src", MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
					$(addedImg).attr("src", monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);
				}

			}
		}

	}

	function changeSong() {
		let randomSongIndex = Math.floor(Math.random() * BANGERS.length);

		while (randomSongIndex == lastSongIndex) {
			randomSongIndex = Math.floor(Math.random() * BANGERS.length);
		}

		lastSongIndex = randomSongIndex;
		djBananas = new Audio(BANGERS[randomSongIndex]);
		djBananas.addEventListener('ended', changeSong, false);
		djBananas.play();
	}

	function changeMonkeys() {
		$("img").each(function () {
			// $(this).attr("src", MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
			$(this).attr("src", monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);
		});
		$("*").each(function () {
			// $(this).css("background-image", "url(" + MONKEYS[Math.floor(Math.random() * MONKEYS.length)]);
			$(this).css("background-image", "url(" + monkey_soldiers[Math.floor(Math.random() * monkey_soldiers.length)].src);
		});
	}

	function babyVegeta() {
		$("img").attr("src", BABY_VEGETA);
		$("*").css("background-image", "url(" + BABY_VEGETA);
	}

});
















