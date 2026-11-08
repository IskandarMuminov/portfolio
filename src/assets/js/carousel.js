// Project page image carousels (Splide).
//
// Markup: a <section class="splide project-carousel" data-bss-baguettebox>
// containing .splide__track > ul.splide__list > li.splide__slide > a > img.
// Add or remove <li> slides freely; the carousel adapts to any number.
//
// - The current image sits in the centre with the previous/next ones peeking
//   in at the sides.
// - Clicking a side image slides to it; clicking the centre image opens the
//   baguetteBox lightbox (set up by template.js).
//
// Splide is mounted on DOMContentLoaded, i.e. after template.js has already
// registered the lightbox, so baguetteBox only sees the real slides and not
// the duplicate "clone" slides Splide adds to make the loop seamless.

document.addEventListener('DOMContentLoaded', function () {
    if (typeof Splide === 'undefined') return;

    document.querySelectorAll('.project-carousel').forEach(function (root) {
        const slides = root.querySelectorAll('.splide__slide');
        const multiple = slides.length > 1;

        // Remember each real slide's position; Splide's clones copy this attribute,
        // which lets a click on a clone be mapped back to its real slide.
        slides.forEach(function (slide, i) {
            slide.dataset.slide = i;
        });

        const splide = new Splide(root, {
            type: multiple ? 'loop' : 'slide',
            focus: 'center',
            perPage: 1,
            padding: multiple ? '16%' : 0,
            gap: '0.75rem',
            speed: 350,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            arrows: multiple,
            pagination: multiple,
            drag: multiple,
            breakpoints: {
                576: { padding: multiple ? '9%' : 0, gap: '0.5rem' }
            }
        });

        root.querySelector('.splide__list').addEventListener('click', function (e) {
            const slide = e.target.closest('.splide__slide');
            if (!slide) return;

            const index = Number(slide.dataset.slide);

            if (!slide.classList.contains('is-active')) {
                // Side image: bring it to the centre instead of opening the lightbox.
                e.preventDefault();
                e.stopPropagation();
                splide.go(index);
            } else if (slide.classList.contains('splide__slide--clone')) {
                // Clones have no lightbox handler, so open the real slide's image.
                e.preventDefault();
                e.stopPropagation();
                const real = root.querySelector('.splide__slide:not(.splide__slide--clone)[data-slide="' + index + '"] a');
                if (real) real.click();
            }
        }, true);

        splide.mount();
    });
});
