function startSliderLoop() {
    const slideTrack = document.querySelector('.slider .slide-track');
    const slideWidth = 250; // Width of each slide in pixels
    const numSlides = 7; // Number of slides
    const animationDuration = 20000; // Animation duration in milliseconds (20 seconds)

    // Duplicate slide elements to ensure seamless looping
    for (let i = 0; i < numSlides; i++) {
        const slides = slideTrack.querySelectorAll('.slide');
        const clonedSlide = slides[i].cloneNode(true);
        slideTrack.appendChild(clonedSlide);
    }

    function animateLoop(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = elapsedTime / animationDuration;

        const currentPosition = Math.floor(progress * slideWidth * numSlides);
        slideTrack.style.transform = `translateX(-${currentPosition}px)`;

        if (progress >= 1) {
            startTime = timestamp;
        }

        requestAnimationFrame(animateLoop);
    }

    let startTime = performance.now();

    // Start the animation loop
    animateLoop(startTime);
}

// Call the function to start the slider loop
startSliderLoop();



// backward slide 
function startBackwardSliderLoop() {
    const slideTrack = document.querySelector('.bslider .bslide-track');
    const slideWidth = 250; // Width of each slide in pixels
    const numSlides = 7; // Number of slides
    const animationDuration = 23000; // Animation duration in milliseconds (20 seconds)

    // Duplicate slide elements to ensure seamless looping
    for (let i = 0; i < numSlides; i++) {
        const slides = slideTrack.querySelectorAll('.bslide');
        const clonedSlide = slides[i].cloneNode(true);
        slideTrack.appendChild(clonedSlide);
    }

    function animateLoop(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = elapsedTime / animationDuration;

        const currentPosition = Math.floor((1 - progress) * slideWidth * numSlides);
        slideTrack.style.transform = `translateX(-${currentPosition}px)`;

        if (progress >= 1) {
            startTime = timestamp;
        }

        requestAnimationFrame(animateLoop);
    }

    let startTime = performance.now();

    // Start the animation loop
    animateLoop(startTime);
}

// Call the function to start the backward slider loop
startBackwardSliderLoop();