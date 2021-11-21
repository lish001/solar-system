console.log('JavaScript is working!');

//////////////////// SCROLLTRIGGER PARALLAX ON MAIN PAGE //////////////////////////////////

let sky = document.getElementById('sky'); // declaring  
let earth = document.getElementById('earth');
let bgmountains = document.getElementById('bgmountains');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let midmountains = document.getElementById('midmountains');
let frontmountains = document.getElementById('frontmountains');

let header = document.querySelector('header');

window.addEventListener('scroll', function() { // listens foe the event; in this case scroll and then run the function
	let value = window.scrollY;
	sky.style.left = value * 0.25 + 'px'; // .style - chnages the style of the element. in this case it multiples the position of the sky with 0.25px 
	earth.style.top = value * 1.05 + 'px'; // same is done for all of tehse to move the elements to different sides of the screen :)
	bgmountains.style.top = value * 0.5 + 'px';
	frontmountains.style.top = value * 0 + 'px';
	text.style.marginRight = value * 4 + 'px';
	text.style.marginTop = value * 1.5 + 'px';
	btn.style.marginTop = value * 1.5 + 'px';
	header.style.top = value * 0.5 + 'px';

});

//////////////////// ALERT //////////////////////////////////

let container = document.querySelector('.alert-duration');
let button = container.querySelector('.button1');
let alert = container.querySelector('sl-alert');

button.addEventListener('click', () => alert.show()); // when button is clicked, alert is shown



//////////////////// ROCKET TO TOP //////////////////////////////////

let scrollToTopRocket = document.querySelector("#rocket_little"); //

scrollToTopRocket.addEventListener("click", function() {

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});

});

function myFunction(x) {

	if (x.matches) { // If media query matches then do this

		let scrollToTopRocket = document.querySelector("#rocket_big"); //

		scrollToTopRocket.addEventListener("click", function() {

			window.scrollTo({ // window scrolls back to top
				top: 0,
				left: 0,
				behavior: "smooth"
			});

			gsap.to("#rocket_big", { // rocket scrolls to -400
				duration: 1,
				y: -400,
			});
		});


	} else {

		let scrollToTopRocket = document.querySelector("#rocket_big"); // only window scrolsl back, rocket stay at bottom on phone screens msotly.

		scrollToTopRocket.addEventListener("click", function() {

			window.scrollTo({ 
				top: 0,
				left: 0,
				behavior: "smooth"
			});

		});

	}
}

var x = window.matchMedia("(min-width: 1240px)"); // min width for rocket to also go up.
myFunction(x); // Call listener function at run time
x.addEventListener(myFunction); // Attach listener function on state changes


    

