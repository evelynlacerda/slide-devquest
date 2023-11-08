const arrowPrev = document.querySelector('#arrow-left');
const arrowNext = document.querySelector('#arrow-right');

const slideImage = document.querySelectorAll('.slide');

let slidePosition = 0
let slideAll = slideImage.length

arrowNext.addEventListener('click', function() {
    if(slidePosition === slideAll - 1) {
        return;
    }

    slideRemoveOpacity();
    
    slidePosition++;
    slideImage[slidePosition].classList.add('show');
    
    arrowOpacity();
})

arrowPrev.addEventListener('click', function() {
    if(slidePosition === 0) {
        return;
    }

    slideRemoveOpacity();

    slidePosition--;
    slideImage[slidePosition].classList.add('show');

    arrowOpacity();
})

function slideRemoveOpacity() {
    const actualSlide = document.querySelector('.show');
    actualSlide.classList.remove('show');
}

function arrowOpacity() {
    if(slidePosition !== 0) {
        arrowPrev.classList.remove('opacity');
    } else {
        arrowPrev.classList.add('opacity');
    }

    if(slidePosition !== 0 && slidePosition === slideAll - 1) {
        arrowNext.classList.add('opacity');
    } else {
        arrowNext.classList.remove('opacity');
    }
}