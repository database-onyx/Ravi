document.addEventListener("DOMContentLoaded", function() {
    const floatingImage = document.getElementById("floatingImage");

    // Function to reset animation by removing and re-adding CSS class
    function resetAnimation() {
        floatingImage.classList.remove("img-1");
        void floatingImage.offsetWidth; // Force reflow
        floatingImage.classList.add("img-1");
    }

    // Add event listener to trigger animation on image click
    floatingImage.addEventListener("click", resetAnimation);
});

function showImageFor3Seconds(imageUrl) {
    var image = document.createElement('img');
    image.src = imageUrl;
    document.body.appendChild(image);

    setTimeout(function() {
        document.body.removeChild(image);
    }, 3000);
}

// Usage
var imageUrl = "assets/images/paper-plane-2.gif"; // Replace with the actual path to your image
showImageFor3Seconds(imageUrl);