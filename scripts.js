$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        const target = this.getAttribute('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});