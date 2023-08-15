        // Get references to all buttons and the audio element
        const playButtons = document.querySelectorAll(".playButton");
        const audioPlayer = document.getElementById("audioPlayer");

        // Add a click event listener to each button
        playButtons.forEach(button => {
            button.addEventListener("click", function() {
                // Play the audio
                audioPlayer.play();
            });
        });

        $(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots: true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1170: {
                        items: 3
                    }
                }
            });
        });