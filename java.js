$(document).ready(function () {
    
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('fixed-top');
            } else {
                $('.navbar').removeClass('fixed-top');
            }
        });
    
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
        const { direction, relatedTarget } = event;
        console.log(`Sliding to the ${direction} of item with index ${$(relatedTarget).index()}`);
    });

    
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        if (!name || !email || !phone || !message) {
            $('#formMessage').text('Please fill out all fields.').addClass('text-danger').removeClass('text-success');
        } else {
            $('#formMessage').text('Thank you for your message! We will get back to you soon.').addClass('text-success').removeClass('text-danger');
            $('#contactForm')[0].reset();
        }
    });
});
