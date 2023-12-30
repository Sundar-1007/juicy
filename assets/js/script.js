
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
            imgSrc: "main-img.png",
            heading: "Balmore",
            bg_color:"bg-success"
        },
        {
            text: "new lorem ispum",
            imgSrc: "main-img.png",
            heading: "Balmore",
            bg_color:"bg-danger"
        },
        {
            text: "new lorem ispum2",
            imgSrc: "main-img.png",
            heading: "Balmore",
            bg_color:"bg-warning"
        }
    ]

    var car1_content = car1_DataArray.map(data =>`
        <div class="px-xxl-3 p-0 px-xl-2">
            <div class="blog-card rounded-4 position-relative text-white shadow-1 + ${data.bg_color}">
                <div class="p-3">
                    <p class="special-text">
                        special text
                    </p>
                    <p class="blog-text">${data.text}</p>
                </div>
                <div class="blog-hoverable-content p-3 overflow-hidden">
                    <img src="${data.imgSrc}" class="blog-card-mainimg rounded-4" />
                    <h2 class="blog-head-text my-3 text-dark">${data.heading}</h2>
                </div>
                <img src="assets/images/Arrow.png" alt="assets/images/Arrow.png" class="blog-arrow">
            </div>
        </div>`)

    $(".car-1").append(car1_content.join(''))

    $(".owl-carousel.car-1").owlCarousel({
        loop: true,
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
});