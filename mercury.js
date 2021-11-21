//////////////////// IMAGE GALLERY //////////////////////////////////

let fullImgBox = document.getElementById("fullImgBox"); // let - used to declare a variable, in this case fullImgBox. getElementById - gets the element that has this ID in css.
let fullImg = document.getElementById("fullImg");

function openFullImg(pic) { // function - performs a task; in this case open up the gallery photos to a larger size.
	fullImgBox.style.display = "flex";
	fullImg.src = pic;
}

function closeFullImg(pic) { // function - performs a task; in this case closes the Img.
	fullImgBox.style.display = "none";
	fullImg.src = pic;
}

//////////////////// SCROLLTRIGGER ELEMENT REVEAL //////////////////////////////////

let tl = gsap.timeline({ // timelines in gsaps are used to control the timing of multiple twens and other timelines.
    scrollTrigger: {
        trigger: '.column1', //the trigger fo teh event occurs with the elemetn with teh class .column1
        start: "center bottom", // starts when teh center of this element hits the bottom of the screen
        scrub: 1 // - basically means that the aniamtion begins like 1 second after
    }
});

tl.from(".img_1", { // .from - you define where the values should start and then it goes back to its orginal spot.
        x: 200, // so here its starts from 200px away from the orginal spot, which is to teh right, thus its slowly fades in from teh right 
        opacity: 0, // starts from opacity 0 so it can fade in
        duration: 1 // 1 sec duration
    })
    .from(".text1", {
        x: -200, // this is -200 so that it can start fromm the left - opposite of top.
        opacity: 0,
        duration: 1
    }, "-=1"); // start one second earlier thanit normally would have


tl.from(".img_2", {
        x: -200,
        opacity: 0,
        duration: 1
    })
    .from(".text2", {
        x: 200,
        opacity: 0,
        duration: 1
    }, "-=1"); 


tl.from(".img_3", {
        x: 200,
        opacity: 0,
        duration: 1
    })
    .from(".text3", {
        x: -200,
        opacity: 0,
        duration: 1
    }, "-=1"); 

tl.from(".cards", {
    x: 200,
    opacity: 0,
    duration: 1
});
