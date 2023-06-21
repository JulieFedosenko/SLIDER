const image = document.querySelector('.projects__pic');
const cityText = document.querySelector('.city-text');
const areaText = document.querySelector('.area-text');
const timeText = document.querySelector('.time-text');
const costText = document.querySelector('.cost-text');
const controls = document.querySelector('.projects__slider');
const prevArrow = controls.querySelector('.slider__left-arrow');
const nextArrow = controls.querySelector('.slider__right-arrow');
const dots = controls.querySelectorAll('.slider-dot');
const links = document.querySelectorAll('.subtitle-btn');

const defaultSlides = [{
    url: "./png/rostov_admiral_1.png",
    subtitle: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
},
{
    url: "./png/sochi_2.png",
    subtitle: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
},
{
    url: "./png/rostov_patriotic_3.png",
    subtitle: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];

let currentIndex = 0;

function goToSlide(index) {
    image.style.backgroundImage = `url(${defaultSlides[index].url})`
    cityText.innerHTML = defaultSlides[index].city;
    areaText.textContent = defaultSlides[index].area;
    timeText.textContent = defaultSlides[index].time;
    costText.textContent = defaultSlides[index].cost;
    currentIndex = index;
    updateDots();
    updateLinks();
}

function toggleActiveClass(element, elementIndex, activeClassName) {
    if (elementIndex === currentIndex) {
        element.classList.add(activeClassName);
    } else {
        element.classList.remove(activeClassName);
    }
}

function updateDots() {
    dots.forEach((dot, index) => {
        toggleActiveClass(dot, index, "slider-dot-active")
    });
}

function updateLinks() {
    links.forEach((link, index) => {
        toggleActiveClass(link, index, "subtitle-btn-active")
    });
}

prevArrow.addEventListener('click', () => {
    const index = currentIndex === 0 ? defaultSlides.length - 1 : currentIndex - 1;
    goToSlide(index);
});

nextArrow.addEventListener('click', () => {
    const index = currentIndex === defaultSlides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(index);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

links.forEach((link, index) => {
    link.addEventListener('click',()=> goToSlide(index));
});

function initSliderLinks () {
    defaultSlides.forEach((slide, idx)=> {
        links[idx].textContent = slide.subtitle
    })
}

initSliderLinks()

goToSlide(currentIndex);


