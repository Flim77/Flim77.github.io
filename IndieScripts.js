let slideIndex = 0;
          showSlides();
          
          function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
          }

//Animations below slide up top

$(document).ready(function() {
    // Function to check if element is in viewport
    function isElementInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animations
    function handleAnimations() {
        $('.fade-in-right, .fade-in-left, .fade-in-bottom').each(function() {
            var animationClass = $(this).attr('class');
            if (isElementInViewport(this)) {
                $(this).addClass('visible').addClass(animationClass);
            } else {
                $(this).removeClass('visible').removeClass(animationClass);
            }
        });
    }

    // Trigger animations on scroll
    $(window).scroll(function() {
        handleAnimations();
    });

    // Trigger animations on page load (if necessary)
    handleAnimations();
});

//Credit card appearing in this field

document.addEventListener("DOMContentLoaded", function() {
    var donationAmountInput = document.getElementById("donation-amount");
    var creditCardSection = document.getElementById("credit-card-section");

    donationAmountInput.addEventListener("input", function() {
        // Check if donation amount is filled out
        if (donationAmountInput.value.trim() !== "") {
            // Show credit card section
            creditCardSection.style.display = "block";
        } else {
            // Hide credit card section
            creditCardSection.style.display = "none";
        }
    });
});