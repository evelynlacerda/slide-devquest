const arrowPrev = document.querySelector('#arrow-left');
const arrowNext = document.querySelector('#arrow-right');

const slideImage = document.querySelectorAll('.slide');

let slidePosition = 0
let slideAll = slideImage.length

arrowNext.addEventListener('click', function() {
    // Se a posição atual do slide for igual ao tamanho do array, o comando irá retornar, ou seja, não irá executar o código abaixo.
    if(slidePosition === slideAll - 1) {
        return;
    }

    slideRemoveOpacity();
    
    slidePosition++;
    // Elemento do slide[posição do array feito na linha 4]
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
        // Se a posição atual do slide não for igual a 0, igual a primeira posição, o comando irá remover a classe de opacidade.
        arrowPrev.classList.remove('opacity');
    } else {
        // Se a posição atual for igual a primeira posição, o comando irá adicionar a classe de opacidade.
        arrowPrev.classList.add('opacity');
    }

    if(slidePosition !== 0 && slidePosition === slideAll - 1) {
        // Se a posição atual não for igual a 0, e a posição atual for identica ao tamanho do array, o comando irá adicionar a classe de opacidade.
        arrowNext.classList.add('opacity');
    } else {
        arrowNext.classList.remove('opacity');
    }
}