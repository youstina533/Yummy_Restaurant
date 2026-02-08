document.addEventListener('DOMContentLoaded', function () {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('nav-bar-links');

    if(mobileToggle && navLinks){

        // Toggle mobile menu on/off
        mobileToggle.addEventListener('click', () => {
          mobileToggle.classList.toggle('active');
          navLinks.classList.toggle('active');
          // Prevent body scroll when menu is open
          document.body.style.overflow= navLinks.classList.contains('active')? 'hidden': '';
        });

        // Close mobile menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach (link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = "" ; // make the body scroll not hidden as I close the mobile menu
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    } // close of if

    // Get all cards
    const cards = document.querySelectorAll('.card');

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of card is visible
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });


}) // close of DOMContentLoaded