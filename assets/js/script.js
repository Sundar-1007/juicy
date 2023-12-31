
$(document).ready(function () {
    AOS.init();

    setInterval(() => {
        let activeImage = $('.mid-container img.active');

        if (activeImage.length > 0) {
            activeImage.removeClass('active').fadeOut().next('img').addClass('active').fadeIn();

            // Check if the next image exists; if not, go to the first image
            if (activeImage.next('img').length === 0) {
                $('.mid-container img').first().addClass('active').fadeIn();
            }
        } else {
            // If no active image, show the first image
            $('.mid-container img').first().addClass('active').fadeIn();
        }
    }, 2000);

    const car1_DataArray = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est officiis recusandae placeat",
            imgSrc: "assets/videos/new400kb.mp4",
            heading: "Balmore",
            bg_color: "bg-success",
            dur:600
        },
        {
            text: "new lorem ispum",
            imgSrc: "assets/videos/new400kb.mp4",
            heading: "Balmore",
            bg_color: "bg-danger",
            dur:700
        },
        {
            text: "new lorem ispum2",
            imgSrc: "assets/videos/new400kb.mp4",
            heading: "Balmore",
            bg_color: "bg-warning",
            dur:800
        }
    ]

    var car1_content = car1_DataArray.map(data => `
        <div class="px-xxl-3 p-0 px-xl-2" data-aos = "fade-up" data-aos-duration="${data.dur}">
            <a class="blog-card rounded-4 position-relative text-white shadow-1 + ${data.bg_color}" 
            data-fancybox="gallery" href="${data.imgSrc}">
                <div class="p-3">
                    <p class="special-text">
                        special text
                    </p>
                    <p class="blog-text">${data.text}</p>
                </div>
                <div class="blog-hoverable-content p-3 overflow-hidden">
                    <video src="${data.imgSrc}" class="blog-card-mainimg rounded-4"> <video/>
                    <h2 class="blog-head-text my-3 text-dark">${data.heading}</h2>
                </div>
                <img src="assets/images/Arrow.png" alt="assets/images/Arrow.png" class="blog-arrow">
            </a>
        </div>`)

    $(".car-1").append(car1_content.join(''))

    $(".owl-carousel.car-1").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.custom1').owlCarousel({
        loop: true,
        nav: true,
        animateOut: 'fadeOut',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
    });

    AOS.refresh();
});