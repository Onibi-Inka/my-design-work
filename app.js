$(function () {

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);

        $('html, body').animate({
            scrollTop: elementOffset - 100
        }, 600);
    });

    window.onscroll = function showHeader() {
        var header = document.querySelector(".header");
        if (window.pageYOffset > 200)
            header.classList.add("fixed");
        else
            header.classList.remove("fixed");
    }

    $('.artists_slider').slick({
        infinity: true,
        slidesToShow: 3,
        arrows: true,
        dots: true,
    });

    const animItems = document.querySelectorAll('.animBlockLeft, .animBlockRight, .animBlockOpacity');
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animBlock_active');
            } else {
                animItem.classList.remove('animBlock_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();


});

let contactsButton1 = document.querySelector('#button1');
let contactsButton2 = document.querySelector('#button2');

let input1 = document.querySelector('.inputs_first')
let input2 = document.querySelector('.inputs_second')

contactsButton1.onclick = function () {
    contactsButton1.classList.add("active_button");
    contactsButton2.classList.remove("active_button");

    input2.classList.add('inputs_not_active');
    input1.classList.remove('inputs_not_active');
}
contactsButton2.onclick = function () {
    contactsButton2.classList.add("active_button");
    contactsButton1.classList.remove("active_button");

    input1.classList.add('inputs_not_active');
    input2.classList.remove('inputs_not_active');
}

