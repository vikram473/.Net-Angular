// Carousel auto control (optional enhancement)
const carouselElement = document.querySelector('#productCarousel');

if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        ride: 'carousel'
    });
}