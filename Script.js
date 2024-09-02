document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Speed of the counting animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount(); 
    });
});

//  custmer setisfaction

    var testimonialCarousel = document.getElementById('testimonialCarousel');
    var carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 200,
        pause: 'hover'
    });


    document.addEventListener('DOMContentLoaded', function () {
        const dropdown = document.querySelector('.nav-item.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
        dropdown.addEventListener('mouseenter', function () {
            dropdownMenu.style.display = 'block';
        });
    
        dropdown.addEventListener('mouseleave', function () {
            dropdownMenu.style.display = 'none';
        });
    });
    



    

    
    
    
    
    
