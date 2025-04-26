
document.querySelectorAll(".lang-option").forEach(el => {
    el.addEventListener("click", function(e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
    });
});

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


// Vendor carousel
$('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:5
        }
    }
});


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const overlay = document.getElementById("overlay");
    // Open sidebar
    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });
    // Close when clicking outside the sidebar
    overlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn-toggle");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let currentlyOpen = document.querySelector(".collapse.show");

            // If there's another open menu, close it before opening a new one
            if (currentlyOpen && currentlyOpen !== this.nextElementSibling) {
                new bootstrap.Collapse(currentlyOpen, { toggle: false }).hide();
            }

            let targetCollapse = new bootstrap.Collapse(this.nextElementSibling);
        });
    });
});
const cardContanier = document.getElementById("cat-row-overflow");
const leftBtn = document.getElementById("left-btn-scroll");
const rightBtn = document.getElementById("right-btn-scroll");

function updateScrollButtons() {
  const maxScrollLeft = cardContanier.scrollWidth - cardContanier.clientWidth;

  if (cardContanier.scrollLeft <= 0) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "block";
  }

  if (cardContanier.scrollLeft >= maxScrollLeft - 1) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }
}

// Initial check
updateScrollButtons();

// Update buttons on scroll
cardContanier.addEventListener("scroll", updateScrollButtons);

// Update buttons after clicking scroll buttons
leftBtn.addEventListener("click", () => {
  cardContanier.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  setTimeout(updateScrollButtons, 300); // Delay to allow smooth scroll
});

rightBtn.addEventListener("click", () => {
  cardContanier.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
  setTimeout(updateScrollButtons, 300); // Delay to allow smooth scroll
});
